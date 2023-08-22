import { styled } from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AboutSpace = styled.div`
  height: 20rem;
  flex-shrink: 1;
  @media (max-width: 400px) {
    height: 0rem;
  }
`;
export const AboutSection1 = styled.div`
  width: 100vw;
  height: calc(100vh + 1px);
  background-color: black;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutSection_Body = styled.div`
  position: relative;

  width: 100%;
  max-width: 1000px;
  flex-shrink: 0;
  @media (max-width: 1000px) {
    padding-bottom: 75%;
  }
  @media (min-width: 1000px) {
    height: 750px;
  }
`;

export const AboutSection_Iframe = styled.iframe`
  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export const AboutSection_Box = styled.div``;

export const AboutSection_Img = styled.img`
  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export const AboutSection_Img_r = styled.img`
  z-index: 1;
`;

export const AboutSection1_Title = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 30%;
  top: 20%;
  left: 50%;
`;

export const AboutSection2 = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: calc(100vh + 0.1rem);

  & > :nth-child(1) {
    top: 0;
    background: linear-gradient(to bottom, black, #000a41);
  }
  & > :nth-child(2) {
    bottom: 0;
    background: linear-gradient(to bottom, #000a41, black);
  }
`;
export const AboutSection2_Coloring = styled.div`
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: calc(100vh / 2 + 0.1rem);
`;

export const AboutSection3 = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  width: 100vw;
  height: calc(100vh + 0.1rem);
`;

export const AboutSection4 = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #00072b;
  padding: 30rem 0;
  width: 100vw;
`;

export const AboutSection5 = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  padding: 10rem 0;
  width: 100vw;
`;

export const AboutSection6 = styled.div`
  width: 100vw;
  padding: 10rem 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: linear-gradient(to bottom, white, #000a41);
`;

export const AboutSection7 = styled.div`
  width: 100vw;

  background-color: #000a41;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
