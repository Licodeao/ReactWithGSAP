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

  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0);
  }

  .afterImage img {
    transform: translate(-100%, 0);
  }

  .crossRevealImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
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
    margin: 0 0;

    .quote_sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: #fff;
    }

    .author_name {
      line-height: 1.14286;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0;
      color: #fff;
      padding-top: 20px;
    }
  }
`;

export const ProductSectionTextWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #080f0f;
  color: #00efeb;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    width: 60%;
  }
`;

export const ProductSectionBottomWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #080f0f;
  color: #fff;

  .product_wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: end;

    .product-image {
      grid-row: 2;
      grid-column: 2 / span 1;
      align-self: end;
      justify-self: end;
      max-width: 100%;
    }

    p {
      font-weight: 600;
      font-size: 20px;
      margin: 0 0 8px 0;
    }

    .product_text_left {
      display: grid;
      grid-column: 1;
      text-align: right;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }

    .product_text_right {
      display: grid;
      grid-column: 3;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }

    .ghost {
      display: none;
      transform: translateX(8%);
    }

    .product1 img {
      width: 80%;
      margin: auto;
    }

    .product2 img,
    .product3 img {
      width: 100%;
      margin: auto;
    }
  }
`;
