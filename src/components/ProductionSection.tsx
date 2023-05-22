import React, { memo, useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";
import {
  ProductSectionTextWrapper,
  ProductSectionBottomWrapper,
} from "./styled";
import day from "@/assets/day.png";
import night from "@/assets/night.png";
import product from "@/assets/product.avif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IProps {
  children?: ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

const ProductSection: FC<IProps> = () => {
  const textSectionTriggerRef = useRef(null);
  const productSectionTriggerRef = useRef(null);
  const productWrapperRef = useRef(null);
  const boxTextRef = useRef(null);
  const boxRef = useRef(null);
  const nightCreamRef = useRef(null);
  const dayCreamRef = useRef(null);
  const nightAndDayCreamTextRef = useRef(null);

  useEffect(() => {
    const scaleDownTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: textSectionTriggerRef.current as gsap.DOMTarget,
        start: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    scaleDownTween
      .fromTo(
        productWrapperRef.current,
        { scale: 2.8, transformOrigin: "center top" },
        { scale: 2.2, y: "-50%" }
      )
      .to(productWrapperRef.current, { scale: 1, y: 0 });
  }, []);

  useEffect(() => {
    const splitTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: productSectionTriggerRef.current as gsap.DOMTarget,
        start: "bottom bottom",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        markers: true,
      },
    });

    splitTween
      .to(boxRef.current, { x: "-54%", duration: 3 })
      .to(nightCreamRef.current, { x: "60%", duration: 3 }, "-=3")
      .from(boxTextRef.current, { autoAlpha: 0.1, duration: 3 }, "-=3")
      .from(
        nightAndDayCreamTextRef.current,
        { autoAlpha: 0.1, duration: 3 },
        "-=3"
      )
      .to(boxTextRef.current, { x: "-30%", duration: 3 }, "-=3")
      .to(
        nightAndDayCreamTextRef.current,
        {
          x: "28%",
          duration: 3,
        },
        "-=3"
      )
      .set(dayCreamRef.current, {
        display: "block",
      })
      .from(dayCreamRef.current, {
        autoAlpha: 0.95,
        transfromOrigin: "center center",
        duration: 2.5,
        scale: 0.95,
      });
  }, []);

  return (
    <>
      <ProductSectionTextWrapper ref={textSectionTriggerRef}>
        <p className="text_intro">
          I'm baby craft beer af salvia leggings readymade fashion axe. Portland
          authentic cliche thundercats pickled, distillery trust fund cornhole
          hell of keytar +1 man braid deep v. Mustache fanny pack single-origin
          coffee, banh mi bespoke slow-carb migas flannel yuccie enamel pin.
        </p>
      </ProductSectionTextWrapper>
      <ProductSectionBottomWrapper ref={productSectionTriggerRef}>
        <div ref={productWrapperRef} className="product_wrapper">
          <div ref={boxTextRef} className="product_text_left">
            <p>CLEAN & PURE</p>
            <p>Cleansing foam</p>
          </div>
          <div ref={boxRef} className="product-image product1">
            <img className="product1-img-behind" alt="" src={product} />
          </div>
          <div ref={nightCreamRef} className="product-image product2">
            <img className="product-img" alt="" src={night} />
          </div>
          <div ref={dayCreamRef} className="product-image product3 ghost">
            <img alt="" src={day} />
          </div>
          <div ref={nightAndDayCreamTextRef} className="product_text_right">
            <p>REPARING</p>
            <p>Foam cleaner</p>
          </div>
        </div>
      </ProductSectionBottomWrapper>
    </>
  );
};

export default memo(ProductSection);
