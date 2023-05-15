import styled from "styled-components";

export const ContentSectionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content_wrapper {
    max-width: 980px;

    h2 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #acacac;
    }

    h3 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #080f0f;
    }
  }
`;

export const CrossRevealSectionWrapper = styled.section`
  position: relative;
  padding-bottom: 56.25%;

  .crossRevealImage {
    width: 100%;
    height: 100%;
  }

  .crossRevealImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(50%, 0);
  }

  .afterImage img {
    transform: translate(-50%, 0);
  }

  .person_content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;

    .person_name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }

    .person_job {
      color: #fff;
      line-height: 1.3;
      font-weight: 400;
      letter-spacing: -0.022em;
      font-size: 17px;
    }
  }

  .landscape_wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0;

    .quote_sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: #fff;
    }

    .author_name {
      line-height: 1.14;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0;
      color: #fff;
      padding-top: 20px;
    }
  }
`;
