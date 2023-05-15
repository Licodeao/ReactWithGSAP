import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    height: 25vmin;
    pointer-events: none;
    margin-top: 50px;
  }
`;

export const SectionTitleWrapper = styled.h1`
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;
