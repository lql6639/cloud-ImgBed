export async function onRequest(context) {
    // 随机壁纸代理：每次请求都从上游获取新图，并禁止浏览器缓存
    // 用法：后台「网页设置」的背景图配置为 ["/api/alcy/wallpaper"]
    // 上游 https://t.alcy.cc/pc 每次请求 302 到随机图片，
    // 但最终图片带 30 天缓存头，直接引用会导致刷新/跳转始终显示同一张，
    // 因此在这里代取图片并覆盖缓存头为 no-store，让每次刷新和跳转都换图。
    const UPSTREAM = 'https://t.alcy.cc/pc';

    try {
        const upstreamRes = await fetch(UPSTREAM, {
            redirect: 'follow',
            headers: {
                // 部分图源对无 UA 请求做拦截，带上常规浏览器 UA
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
            },
            cf: {
                // 明确不走 Cloudflare 边缘缓存，保证每次拿到的是新图
                cacheTtl: 0,
                cacheEverything: false,
            },
        });

        if (!upstreamRes.ok || !(upstreamRes.body)) {
            return new Response(JSON.stringify({
                status: false,
                message: `wallpaper upstream error: ${upstreamRes.status}`,
            }), { status: 502, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }

        const headers = new Headers();
        headers.set('Content-Type', upstreamRes.headers.get('Content-Type') || 'image/webp');
        // 关键：禁止浏览器缓存，确保刷新/跳转页面时都会重新请求、换一张新图
        headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');

        return new Response(upstreamRes.body, { status: 200, headers });
    } catch (err) {
        return new Response(JSON.stringify({
            status: false,
            message: `wallpaper proxy error: ${err?.message || err}`,
        }), { status: 502, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
    }
}
