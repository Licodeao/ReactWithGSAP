import React, { memo, useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { CrossRevealSectionWrapper } from "./styled";
import { gsap } from "gsap";
import type DOMTarget from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IProps {
  children?: ReactNode;
  face: string;
  landscape: string;
  name: string;
  job: string;
  sentenceOne: string;
  sentenceTwo: string;
}

gsap.registerPlugin(ScrollTrigger);

const CrossRevealSection: FC<IProps> = ({
  face,
  landscape,
  name,
  job,
  sentenceOne,
  sentenceTwo,
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const personRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: triggerRef.current as gsap.DOMTarget,
        start: "center center",
        end: () => "+=" + triggerRef.current?.offsetWidth,
        scrub: true,
        anticipatePin: 1,
        markers: true,
      },
    });
  });

  return (
    <CrossRevealSectionWrapper>
      <div className="crossRevealImage" ref={triggerRef}>
        <img src={face} alt="face" />
        <div className="person_content" ref={personRef}>
          <h3 className="person_name">{name}</h3>
          <p className="person_job">{job}</p>
        </div>
      </div>
      <div className="crossRevealImage afterImage" ref={containerRef}>
        <img src={landscape} alt="landscape" ref={imageRef} />
      </div>
      <div className="landscape_wrapper">
        <p className="quote_sentence">
          {sentenceOne}
          <br />
          {sentenceTwo}
        </p>
        <p className="author_name">{name}</p>
      </div>
    </CrossRevealSectionWrapper>
  );
};

export default memo(CrossRevealSection);
