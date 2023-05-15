# ReactWithGSAP

搭配 React, 学习 GSAP

## 初步配置

安装依赖项

| gsap              | 动画库   |
| ----------------- | -------- |
| styled-components | 样式工具 |
| styled-reset      | 样式重置 |

在程序主入口中，配置样式重置

```tsx
// index.tsx

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 其他样式 */
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
```

## 什么是GSAP

GSAP(GreenSock)，是一个强大的 JavaScript 工具集。

GSAP可以对JavaScript可以操作的所有内容进行动画处理（CSS属性，SVG，WebGL，React，画布，通用对象等），同时解决了不同浏览器上存在的兼容性问题，而且速度极快（比jQuery 快20倍），**构建适用于所有**主流浏览器的**高性能动画**。

## API

### ScrollTrigger

用最少的代码创建基于滚动的动画，在页面滚动到某些位置以及在某些元素进入视口时触发动画，支持水平和垂直滚动。

```tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册插件
gsap.registerPlugin(ScrollTrigger);
```

