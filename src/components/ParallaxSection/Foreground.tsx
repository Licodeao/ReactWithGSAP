import React, { forwardRef, useRef, useImperativeHandle } from "react";
import type { ForwardRefRenderFunction } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import f1 from "@/assets/flower1.svg";
import f2 from "@/assets/flower2.svg";
import f3 from "@/assets/flower3.svg";

type propType = {};

type handleType = {
  moveTo: (x: number, y: number) => void;
};

const ForegroundWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

const Foreground: ForwardRefRenderFunction<handleType, propType> = (
  props,
  forwardedRef
) => {
  const el = useRef(null);

  useImperativeHandle(
    forwardedRef,
    () => ({
      moveTo(x: number, y: number) {
        gsap.to(el.current, {
          x,
          y,
        });
      },
    }),
    []
  );

  return (
    <ForegroundWrapper ref={el}>
      <img src={f1} alt="f1" />
      <img src={f2} alt="f2" />
      <img src={f3} alt="f3" />
    </ForegroundWrapper>
  );
};

export default forwardRef(Foreground);
