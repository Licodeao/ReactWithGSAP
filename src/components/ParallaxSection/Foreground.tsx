import React, { memo, forwardRef } from "react";
import type { FC, ReactNode } from "react";
import styled from "styled-components";
import f1 from "@/assets/flower1.svg";
import f2 from "@/assets/flower2.svg";
import f3 from "@/assets/flower3.svg";

interface IProps {
  children?: ReactNode;
}

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

const Foreground: FC<IProps> = forwardRef((props, ref) => {
  return (
    <ForegroundWrapper>
      <img src={f1} alt="f1" />
      <img src={f2} alt="f2" />
      <img src={f3} alt="f3" />
    </ForegroundWrapper>
  );
});

export default memo(Foreground);
