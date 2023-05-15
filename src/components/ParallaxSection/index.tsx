import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styled from "styled-components";
import Foreground from "./Foreground";
import Background from "./Background";
import Midground from "./Midground";

interface IProps {
  children?: ReactNode;
}

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 22vw;
`;

const ParallaxSection: FC<IProps> = () => {
  return (
    <StyledSVGWrapper>
      <Background />
      <Midground />
      <Foreground />
    </StyledSVGWrapper>
  );
};

export default memo(ParallaxSection);
