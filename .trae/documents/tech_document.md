## 1. 架构设计

```mermaid
graph TD
    "前端展示层(React + Tailwind)" --> "页面组件"
    "页面组件" --> "HeroSection"
    "页面组件" --> "BrandSection"
    "页面组件" --> "TrendSection"
    "页面组件" --> "TeamSection"
    "页面组件" --> "TechSection"
    "页面组件" --> "ProcessSection"
    "页面组件" --> "SolutionSection"
    "页面组件" --> "ROISection"
    "页面组件" --> "CooperationSection"
    "页面组件" --> "ContactSection"
    "页面组件" --> "Navigation"
    "页面组件" --> "PDFExport"
    "前端展示层" --> "动画系统(CSS + IntersectionObserver)"
    "前端展示层" --> "打印样式(@media print)"
```

## 2. 技术说明

- **前端**：React@18 + Tailwind CSS@3 + Vite
- **初始化工具**：vite-init
- **后端**：无（纯前端静态页面）
- **数据库**：无
- **PDF导出**：使用浏览器原生 `window.print()` + `@media print` 样式优化，无需额外依赖
- **动画**：CSS动画 + IntersectionObserver实现滚动触发

## 3. 路由定义

| 路由 | 用途 |
|------|------|
| / | 宣传手册主页，包含所有9个章节 |

## 4. API定义

无后端API，所有数据硬编码在前端组件中。

## 5. 组件架构

```
App
├── Navigation          # 侧边/顶部导航
├── PDFExportButton     # PDF导出悬浮按钮
├── HeroSection         # 封面区
├── BrandSection        # 品牌定位
├── TrendSection        # 行业趋势
├── TeamSection         # 核心团队
├── TechSection         # 技术架构与优势
├── ProcessSection      # 服务流程
├── SolutionSection     # 行业解决方案
├── ROISection          # 客户价值ROI
├── CooperationSection  # 合作模式
└── ContactSection      # 联系方式
```

## 6. 关键技术决策

### 6.1 PDF导出方案
- 采用 `window.print()` + `@media print` CSS 方案
- 优势：零依赖、高质量输出、完美还原页面样式
- 打印样式：白色背景、分页控制、隐藏非内容元素

### 6.2 动画方案
- CSS keyframes 用于背景波浪、粒子等持续动画
- IntersectionObserver 用于滚动触发渐入动画
- CSS transitions 用于 hover 微交互
- prefers-reduced-motion 媒体查询兼顾无障碍

### 6.3 响应式方案
- Tailwind CSS 断点系统（sm/md/lg/xl）
- 移动端优先的组件拆分思维
