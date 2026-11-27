<div align="center">
    <p><em>🗂️ 打破图床边界，构建你的专属开源文件托管引擎。</em></p>
</div>

---

# 1. 项目介绍

CloudFlare ImgBed 是支持 Docker 与 Serverless 部署的自建图床和文件托管方案，可将 **Telegram**、**Discord**、**Cloudflare R2**、**S3 兼容存储**、**Hugging Face**、**WebDAV** 等渠道统一接入一个管理界面。项目提供文件管理、身份认证、目录组织、内容审核、RESTful API 与 WebDAV，同时也在不断增加 AI 驱动的图片标签识别等个性化能力，适用于个人图床、网站资源管理和轻量文件分发。 **[查看完整功能 →](https://cfbed.sanyue.de)**

**架构一览**

![CloudFlare ImgBed 技术架构：多端接入、多平台运行时、数据库兼容、统一存储渠道与可扩展 AI 能力]

基于“同构内核 + 插件化底座”架构，单一核心引擎可无缝运行于 Pages、Workers 或 Docker 容器，并灵活挂载 KV、D1 与 SQLite 等多模态存储。系统通过独立适配器实现元数据与文件载荷的彻底解耦；依托智能通道路由提供动态负载均衡与故障无缝兜底；更内置 AI 原生工作流框架，将可配置的模型、Prompt 与结构化输出深度融入文件处理管线。

# 2. 合作伙伴

<table width="100%">
  <tr>
    <td align="center"><strong><a href="https://www.cloudflare.com/">Cloudflare</a></strong></td>
    <td><sub>入选 Project Alexandria 计划，提供高级 CDN 加速及安全防护。</sub></td>
  </tr>
  <tr>
    <td align="center"><strong><a href="https://www.hncloud.com/activity/activity_2026summer.html?k=MarSeventh">华纳云</a></strong></td>
    <td><sub>提供稳定、优质的云计算资源，通过本项目链接注册立享超值优惠！</sub></td>
  </tr>
  <tr>
    <td align="center"><strong><a href="https://www.svyun.com/recommend/AELZ0UeMz8K11Zg7pEXC">速维云</a></strong></td>
    <td><sub>提供稳定、优质的云计算资源，通过本项目链接注册立享超值优惠！</sub></td>
  </tr>
  <tr>
    <td align="center"><strong><a href="https://edgeone.ai/?from=github">EdgeOne</a></strong></td>
    <td><sub>入选开发者合作计划，高级 CDN 加速及安全防护</sub></td>
  </tr>
  <tr>
    <td align="center"><strong><a href="https://linux.do/t/topic/2578561">Linux DO</a></strong></td>
    <td><sub>提供社区支持，期待您的参与！</sub></td>
  </tr>
</table>

- **丰富的周边应用**：桌面客户端、Bot 辅助工具等
- **AI 智能体应用**：项目官方 Skill 及相关工具
- **优质的教程内容**：内容创作者分享的优质视频和图文教程

您也可以向社区分享自己的作品，提交规范请参见[生态建设征集令](https://github.com/MarSeventh/CloudFlare-ImgBed/discussions/606)，期待您的参与！

# 3. 开源协议与相关项目

## 📄 开源协议

> [!IMPORTANT]
> 本项目基于 [MIT License](LICENSE) 开源。您可以自由使用、修改和分发本项目，但须在软件的所有副本或重要部分中保留原始版权及许可声明。

## 🔗 相关开源项目

- **上游项目**：[MarSeventh/CloudFlare-ImgBed](https://github.com/MarSeventh/CloudFlare-ImgBed)

CloudFlare ImgBed 由 Telegraph-Image 发展而来，感谢原项目作者及所有贡献者。
