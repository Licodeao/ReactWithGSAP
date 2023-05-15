# ReactWithGSAP

搭配 React, 学习 GSAP 动画库

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

