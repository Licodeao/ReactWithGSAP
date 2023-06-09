# ReactWithGSAP

搭配 React, 学习 GSAP

[GSAP官方文档](https://greensock.com/)

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

### Timeline

对动画进行排序，从而动画按照时间线执行。简化了对动画的整体控制，并精确地管理时间安排，同时它支持链式调用。

xPercent、yPercent支持动态传入

```tsx
// 示例
  
useEffect(() => {
  const crossRevealTween = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      // 触发动画的元素
      trigger: triggerRef.current as gsap.DOMTarget,
      // 动画开始的位置
      start: "center center",
      // 动画结束的位置
      end: () => "+=" + triggerRef.current!.offsetWidth,
      // 使进度条在开始和结束之间充当一个刷子
      scrub: true,
      // 钉住动画
      pin: true,
      // pin住某个元素，防止产生轻微的抖动
      anticipatePin: 1,
      // 标记某个元素，方便查看动画是否成功
      markers: true,
    },
  });

  crossRevealTween
  	/**
  	* xPercent、yPercent支持动态传入
  	* fromTo(containerRef.current, { [crossReveal]: 100, x: 0 }, { [crossReveal]: 0 })
  	*/
    .fromTo(containerRef.current, { xPercent: 100, x: 0 }, { xPercent: 0 })
    // 同时图片反方向移动
    .fromTo(imageRef.current, { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
    // 同时淡入name和job
    .from(personRef.current, { autoAlpha: 0 }, 0)
    // 同时淡入quote
    .from(quoteRef.current, { autoAlpha: 0, delay: 0.26 }, 0);
}, []);
```

### ScrollTrigger

用最少的代码创建基于滚动的动画，在页面滚动到某些位置以及在某些元素进入视口时触发动画，支持水平和垂直滚动。

```tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册插件
gsap.registerPlugin(ScrollTrigger);
```

### to

to方法完成了与add方法同样的事情，但代码量更少，但共同点就是两者都是基于timeline的

```typescript
let scaleTween = gsap.timeline()

// add
let tween = gsap.to(targetRef.current, { duration: 1, x: "80%" })
scaleTween.add(tween)

// to
scaleTween.to(targetRef.current, { duration: 1, x: "80%" })
```

### from

基于timeline，使元素从某个位置开始执行动画。同样地，它与add(gsap.from(...))完成了一样的事情，只是代码更少。

```typescript
let scaleTween = gsap.timeline()

scaleTween.from(targetRef.current, {duration: 1, x: 100, opacity: 0.5});
```

### fromTo

基于timeline，指定元素执行动画期间的开始和结束的位置。它与add(gsap.fromTo(...))完成了一样的事情，只是代码更少。

```typescript
let scaleTween = gsap.timeline()

scaleTween.fromTo(targetRef.current, { x: -100 }, { x: 100, duration: 1 });
```

### set

基于timeline，在触发动画时立即设置某个值。

如在动画3中，通过将幽灵元素的display值设置为block，从而显现元素。

```typescript
let scaleTween = gsap.timeline()

scaleTween.set(targetRef.current, { display: "block" });
```

## 动画效果

![animation-1](https://github.com/Licodeao/ReactWithGSAP/blob/master/gifs/animation-1.gif)

![animation-2](https://github.com/Licodeao/ReactWithGSAP/blob/master/gifs/animation-2.gif)

![animation-3](https://github.com/Licodeao/ReactWithGSAP/blob/master/gifs/animation-3.gif)
