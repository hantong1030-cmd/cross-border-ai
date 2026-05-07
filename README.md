# cross-border-ai

可直接预览的跨境电商 AI 后台高保真原型，采用单文件 HTML/CSS/JS 呈现深色科技感 Shopify 风格运营工作台。

## 功能亮点

- 直接打开 `index.html` 即可预览，无需安装依赖
- Shopify 风格的后台布局与左侧导航
- 商品列表、库存状态、价格和 AI Listing 分数
- AI 生成标题按钮与可交互标题结果预览
- GMV、订单、渠道和区域数据图表
- 深色科技感 UI，适配大屏运营场景

## 预览方式

方式一：直接用浏览器打开仓库根目录的 `index.html`。

方式二：使用内置零依赖静态服务启动，并访问 `http://localhost:4173`。如果在云端/容器环境中预览，请打开平台转发出来的 4173 端口链接。

```bash
npm start
```

方式三：也可以使用 Python 静态服务，并显式绑定到 `0.0.0.0` 方便外部预览。

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

## React 版本

仓库仍保留 `src/` 下的 React + Tailwind + Vite 实现，后续可继续工程化开发：

```bash
npm install
npm run dev
```
