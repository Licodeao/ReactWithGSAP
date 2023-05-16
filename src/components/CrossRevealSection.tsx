import React, { memo, useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { CrossRevealSectionWrapper } from "./styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IProps {
  children?: ReactNode;
  face: string;
  landscape: string;
  name: string;
  job: string;
  sentenceOne: string;
  sentenceTwo: string;
  crossReveal: string;
}

gsap.registerPlugin(ScrollTrigger);

const CrossRevealSection: FC<IProps> = ({
  face,
  landscape,
  name,
  job,
  sentenceOne,
  sentenceTwo,
  crossReveal,
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
        end: () => "+=" + triggerRef.current!.offsetWidth,
        // 使进度条在开始和结束之间充当一个刷子
        scrub: true,
        // 钉住动画
        pin: true,
        // pin住某个元素时，防止产生轻微的抖动
        anticipatePin: 1,
        // 标记某个元素，方便查看动画是否成功
        markers: true,
      },
    });

    crossRevealTween
      .fromTo(
        containerRef.current,
        { [crossReveal]: 100, x: 0 },
        { [crossReveal]: 0 }
      )
      // 同时图片反方向移动
      .fromTo(
        imageRef.current,
        { [crossReveal]: -100, x: 0 },
        { [crossReveal]: 0 },
        0
      )
      // 同时淡入name和job
      .from(personRef.current, { autoAlpha: 0 }, 0)
      // 同时淡入quote
      .from(quoteRef.current, { autoAlpha: 0, delay: 0.26 }, 0);
  }, [crossReveal]);

  return (
    <CrossRevealSectionWrapper ref={triggerRef}>
      <div className="crossRevealImage">
        <img src={face} alt="face" />
        <div className="person_content" ref={personRef}>
          <h3 className="person_name">{name}</h3>
          <p className="person_job">{job}</p>
        </div>
      </div>

      <div className="crossRevealImage afterImage" ref={containerRef}>
        <img src={landscape} alt="landscape" ref={imageRef} />
      </div>

      <div className="landscape_wrapper" ref={quoteRef}>
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
