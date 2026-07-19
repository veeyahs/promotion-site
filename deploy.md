# GitHub Pages 部署教程

本教程详细介绍如何将 `promotion-site` 项目（React + TypeScript + Vite）通过 GitHub Pages 部署发布，最终可通过 `https://veeyahs.github.io/promotion-site/` 访问。

---

## 一、前置准备

### 1. 确认仓库信息

- 仓库地址：`https://github.com/veeyahs/promotion-site`
- 默认分支：`main`
- GitHub Pages 默认访问 URL：`https://veeyahs.github.io/promotion-site/`

> 由于项目部署在 `promotion-site` 子路径下（非根域名），必须配置 Vite 的 `base` 选项，否则会出现资源 404 问题。

### 2. 本地环境检查

确认已安装：

- Node.js ≥ 18
- Git
- 已配置好 GitHub 的 SSH 或 HTTPS 凭证（当前使用 HTTPS：`https://github.com/veeyahs/promotion-site.git`）

### 3. 确认远程仓库已连接

```bash
git remote -v
# 期望输出：
# origin  https://github.com/veeyahs/promotion-site.git (fetch)
# origin  https://github.com/veeyahs/promotion-site.git (push)
```

---

## 二、配置 Vite 的 `base` 路径（关键步骤）

编辑 `vite.config.ts`，在 `defineConfig` 中添加 `base` 字段：

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  // 必须与仓库名一致，确保资源在子路径下正确加载
  base: '/promotion-site/',
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths()
  ],
})
```

> 说明：
> - 如果使用自定义域名（如 `promote.example.com`），则 `base` 应设为 `'/'`。
> - 若仓库名为 `<username>.github.io`（用户主页仓库），`base` 也应设为 `'/'`。

---

## 三、本地构建验证

执行构建命令：

```bash
npm run build
```

构建完成后会在项目根目录生成 `dist/` 目录。

本地预览（使用相对路径验证 `base` 配置是否生效）：

```bash
npm run preview
```

浏览器打开 `http://localhost:4173/promotion-site/`，确认页面正常加载、无 404 资源报错。

---

## 四、部署方式选择

以下提供两种主流方案，**推荐使用方案二（GitHub Actions 自动部署）**，提交代码即自动发布；方案一适合临时手动发布。

### 方案一：使用 `gh-pages` 包手动部署

#### 1. 安装 `gh-pages`

```bash
npm install --save-dev gh-pages
```

#### 2. 在 `package.json` 中添加部署脚本

编辑 `package.json`，在 `scripts` 中增加 `predeploy` 与 `deploy`：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "check": "tsc -b --noEmit",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. 执行部署

```bash
npm run deploy
```

`gh-pages` 会：

1. 先执行 `predeploy`（即 `npm run build`）生成 `dist/`
2. 将 `dist/` 内容推送到远程仓库的 `gh-pages` 分支

首次执行会在本地生成临时目录 `.gh-pages-cache`，执行完毕后会自动清理。

#### 4. 在 GitHub 仓库配置 Pages 来源

1. 打开 `https://github.com/veeyahs/promotion-site/settings/pages`
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `gh-pages`，文件夹选择 `/ (root)`
4. 点击 **Save**

等待 1~2 分钟，访问 `https://veeyahs.github.io/promotion-site/` 即可看到站点。

---

### 方案二：GitHub Actions 自动部署（推荐）

#### 1. 创建 Workflow 文件

在项目根目录新建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 2. 在 GitHub 仓库配置 Pages 来源

1. 打开 `https://github.com/veeyahs/promotion-site/settings/pages`
2. **Source** 选择 `GitHub Actions`
3. 无需选择分支，保存即可

#### 3. 提交并推送

```bash
git add .github/workflows/deploy.yml vite.config.ts
git commit -m "ci: add GitHub Pages auto deploy workflow"
git push origin main
```

#### 4. 查看部署状态

- 浏览器打开 `https://github.com/veeyahs/promotion-site/actions`
- 找到名为 `Deploy to GitHub Pages` 的 workflow
- 等待绿色对勾出现（通常 1~3 分钟）

#### 5. 访问站点

部署成功后访问：

```
https://veeyahs.github.io/promotion-site/
```

之后每次推送代码到 `main` 分支都会自动触发部署。

---

## 五、更新与重新发布

### 使用方案一（手动）

每次代码更新后，重新执行：

```bash
npm run deploy
```

### 使用方案二（自动）

直接推送到 `main` 分支即可：

```bash
git add .
git commit -m "feat: update site content"
git push origin main
```

GitHub Actions 会自动重新构建并发布。

---

## 六、自定义域名（可选）

如需使用自定义域名（例如 `promote.finepod.com`）：

1. 在域名服务商处添加 CNAME 记录：
   - 主机记录：`promote`
   - 记录类型：`CNAME`
   - 记录值：`veeyahs.github.io`

2. 在 `dist/` 根目录放置一个名为 `CNAME` 的文件（无扩展名），内容为你的域名：

   ```
   promote.finepod.com
   ```

   - 方案一：手动在 `public/` 目录创建 `CNAME` 文件，Vite 构建时会自动拷贝到 `dist/`。
   - 方案二：在 workflow 的 `Upload artifact` 步骤之前增加一步：

     ```yaml
     - name: Add CNAME
       run: echo "promote.finepod.com" > dist/CNAME
     ```

3. 在仓库 `Settings → Pages → Custom domain` 中填入域名并保存，勾选 `Enforce HTTPS`。

4. 将 `vite.config.ts` 的 `base` 改回 `'/'`。

---

## 七、常见问题排查

### 1. 页面空白 / 资源 404

**原因**：`base` 路径配置错误。

**解决**：

- 部署在 `https://<username>.github.io/<repo>/` 形式时，`base` 必须为 `'/<repo>/'`
- 检查浏览器开发者工具 Network 面板，看资源 URL 是否包含 `/promotion-site/` 前缀
- 修改 `vite.config.ts` 后必须重新执行 `npm run build`

### 2. 路由刷新 404

**原因**：GitHub Pages 是静态托管，刷新子路由时服务器会去寻找对应路径的文件，找不到就返回 404。

**解决**：

- 使用 `HashRouter` 替代 `BrowserRouter`（URL 中会带 `#`，如 `/#/about`），最简单稳妥
- 或在 `public/` 目录添加 `404.html` 重定向脚本（社区常见方案，参见 [spa-github-pages](https://github.com/rafgraph/spa-github-pages)）
- 本项目当前如未使用路由可忽略此项

### 3. 部署后样式错乱 / 字体不加载

**原因**：CSS 或字体引用了绝对路径 `/assets/xxx`，未带上 `base` 前缀。

**解决**：

- 确认 `vite.config.ts` 中已配置 `base: '/promotion-site/'`
- 在代码中避免硬编码 `/assets/...`，应使用 `import` 方式引入资源，Vite 会自动加上 `base` 前缀

### 4. Actions 部署失败：`Permission denied`

**原因**：仓库 Settings 中 Actions 权限不足。

**解决**：

1. 打开 `https://github.com/veeyahs/promotion-site/settings/actions`
2. 滚动到 **Workflow permissions**
3. 选择 **Read and write permissions**
4. 保存

### 5. `npm ci` 失败：`lockfile missing`

**原因**：仓库中未提交 `package-lock.json`。

**解决**：

```bash
git add package-lock.json
git commit -m "chore: add package-lock.json"
git push
```

或把 workflow 中的 `npm ci` 改为 `npm install`。

### 6. CDN 缓存导致更新未生效

**原因**：浏览器或 GitHub Pages CDN 缓存了旧资源。

**解决**：

- 强制刷新浏览器：`Cmd + Shift + R`（Mac）或 `Ctrl + Shift + R`（Windows）
- 在浏览器开发者工具 Network 面板勾选 `Disable cache`
- 等待 5~10 分钟，CDN 缓存会自动刷新
- 或在 workflow 的 build 步骤中加入版本号 query：修改 `index.html` 中的资源引用为带 hash 的形式（Vite 默认已支持）

### 7. `gh-pages` 分支推送失败

**原因**：本地 git 凭证问题或远程分支冲突。

**解决**：

```bash
# 检查 git 凭证
git config --global user.name
git config --global user.email

# 强制覆盖 gh-pages 分支（谨慎使用）
npm run deploy -- --no-history
```

---

## 八、部署流程速查图

```
┌──────────────────────────────────────────────────────────────┐
│  本地开发                                                     │
│  └─ npm run dev                                               │
└──────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  配置 vite.config.ts 的 base: '/promotion-site/'             │
└──────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  本地构建验证                                                 │
│  └─ npm run build && npm run preview                          │
└──────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────┐         ┌────────────────────────────┐
│  方案一: 手动部署    │         │  方案二: 自动部署（推荐）   │
│  npm run deploy     │         │  git push origin main      │
│  → gh-pages 分支    │         │  → GitHub Actions 自动构建  │
└─────────────────────┘         └────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  仓库 Settings → Pages → 选择来源                             │
│  - 方案一: gh-pages 分支 / (root)                             │
│  - 方案二: GitHub Actions                                     │
└──────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  访问 https://veeyahs.github.io/promotion-site/               │
└──────────────────────────────────────────────────────────────┘
```

---

## 附录：关键文件清单

| 文件路径                        | 作用                                   |
| ------------------------------- | -------------------------------------- |
| `vite.config.ts`                | Vite 配置，需添加 `base: '/promotion-site/'` |
| `package.json`                  | 项目依赖与脚本，方案一需添加 `deploy` 脚本 |
| `.github/workflows/deploy.yml`  | GitHub Actions 部署工作流（方案二）    |
| `dist/`                         | 构建产物，由 `npm run build` 生成       |
| `public/CNAME`                  | 自定义域名配置文件（可选）             |
| `.gitignore`                    | Git 忽略规则，建议加入 `dist/`、`node_modules/` |

---

## 附录：环境变量与构建命令对照

| 场景                   | `base` 值              | 访问 URL                                   |
| ---------------------- | ---------------------- | ------------------------------------------ |
| 仓库名为 `promotion-site` | `'/promotion-site/'`   | `https://veeyahs.github.io/promotion-site/` |
| 用户主页仓库           | `'/'`                  | `https://veeyahs.github.io/`                |
| 自定义域名             | `'/'`                  | `https://promote.finepod.com/`              |

---

至此，部署教程完成。按方案二配置后，每次 `git push origin main` 即可自动发布，无需手动操作。