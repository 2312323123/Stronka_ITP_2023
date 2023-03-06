import React from "react";
//@ts-ignore
import img2_desktop from "../images/desktop_backgrounds/2.svg";
//@ts-ignore
import img2_mobile from "../images/mobile_backgrounds/2.jpg";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  top: 2rem;
`;

const TextBox1 = styled.div`
  width: 38%;
  height: 12%;
  position: absolute;
  top: 18%;
  left: 4%;
  background-color: #e8d9cb;
  font-size: 1.3vw;
  color: #d2764a;
  border: 0.15rem solid;
  padding: 0.3rem;
  display: flexbox;
  text-align: justify;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
    left: 10%;
    top: 7%;
    height: 8%;
    font-size: 3vw;
  } ;
`;

const TextBox2 = styled(TextBox1)`
  height: 5%;
  top: 33%;
  @media (max-width: 768px) {
    height: 4%;
    top: 19%;
  }
`;

const TextBox3 = styled(TextBox1)`
  top: 54%;
  left: 56%;
  @media (max-width: 768px) {
    height: 8.4%;
    top: 73.5%;
    left: 10%;
  }
`;

const TextBox4 = styled(TextBox3)`
  top: 69%;
  height: 6.5%;
  @media (max-width: 768px) {
    height: 6%;
    top: 86%;
    left: 10%;
  }
`;

const TextPage: React.FC = () => {
  return (
    <>
      <Container>
        <picture>
          <source srcSet={img2_desktop} media="(min-width: 769px)" />
          <source srcSet={img2_mobile} media="(max-width: 768px)" />
          <Img src={img2_desktop} alt="text page" />
        </picture>
        <TextBox1>
          Inżynierskie Targi Pracy organizowane przez Stowarzyszenie Studentów
          BEST AGH Kraków to projekt, który już od 25 lat łączy środowisko
          akademickie i biznesowe. Naszym celem jest zapewnienie wszystkim
          uczestnikom Targów, jak największej jakości wydarzenia oraz pełnej
          satysfakcji.
        </TextBox1>
        <TextBox2>
          Aby to zrealizować, w tym roku zaprosiliśmy 50 firm, które są
          wiodącymi markami w swoich branżach.
        </TextBox2>
        <TextBox3>
          W dniu 8 marca spotkają się pracodawcy szukający idealnych pracowników
          oraz studenci starający się o wymarzoną pracę lub staż. Na naszej
          stronie internetowej znajdziecie informacje nie tylko o naszych
          wystawcach i ich ofertach pracy, ale także o konkursach oraz
          warsztatach.
        </TextBox3>
        <TextBox4>
          Istnieje również możliwość przesłania swojego CV do naszej bazy,
          dzięki której nasi wystawcy poznają Was jeszcze lepiej pod kątem
          waszego doświadczenia i umiejętności.
        </TextBox4>
      </Container>
    </>
  );
};

export default TextPage;
