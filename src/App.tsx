import React from "react";
import logo from "@/assets/logo.svg";
import beach from "@/assets/beach.avif";
import landscape from "@/assets/landscape.avif";
import { SectionWrapper, SectionTitleWrapper } from "./styled";
import ParallaxSection from "@/components/ParallaxSection/index";
import ContentSection from "@/components/ContentSection";
import CrossRevealSection from "@/components/CrossRevealSection";

function App() {
  return (
    <>
      <SectionWrapper>
        <img src={logo} alt="logo" />
        <SectionTitleWrapper>React With GSAP</SectionTitleWrapper>
        <ParallaxSection />
      </SectionWrapper>
      <ContentSection
        title="Take care"
        description="Poutine trust fund DIY pabst, art party hoodie you probably haven't heard of them single-origin coffee kombucha slow-carb glossier occupy cliche."
      />
      <CrossRevealSection
        face={landscape}
        landscape={beach}
        name="Licodeao"
        job="developer"
        sentenceOne="We only launch"
        sentenceTwo="What we love"
      />
    </>
  );
}

export default App;
