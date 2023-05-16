import React, { ElementRef, memo, useEffect, useRef } from "react";
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
  type ForeType = ElementRef<typeof Foreground>;
  type MidType = ElementRef<typeof Midground>;
  type BackType = ElementRef<typeof Background>;
  const foregroundRef = useRef<ForeType>(null);
  const midgroundRef = useRef<MidType>(null);
  const backgroundRef = useRef<BackType>(null);

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      foregroundRef.current?.moveTo(clientX / 4, clientY / 8);

      midgroundRef.current?.moveTo(clientX / 2, clientY / 4);

      backgroundRef.current?.moveTo(clientX, clientY / 2);
    };
    const onLeave = () => {
      foregroundRef.current?.moveTo(0, 0);
      midgroundRef.current?.moveTo(0, 0);
      backgroundRef.current?.moveTo(0, 0);
    };

    document.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <StyledSVGWrapper>
      <Background ref={backgroundRef} />
      <Midground ref={midgroundRef} />
      <Foreground ref={foregroundRef} />
    </StyledSVGWrapper>
  );
};

export default memo(ParallaxSection);
