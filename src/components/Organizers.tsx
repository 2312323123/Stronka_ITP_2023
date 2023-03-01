
import React from 'react';
//@ts-ignore
import img8_desktop from '../images/desktop_backgrounds/8.svg';
//@ts-ignore
import img6_mobile from '../images/mobile_backgrounds/6.jpg';
import styled from "styled-components";
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`

const Container = styled.div`
  position: relative;
  display: grid;
`

const TextBox = styled.div`
  position: absolute;
  background-color: #e8d9cb;
  width: 17%;
  height: 10%;
  bottom: 8%;
  font-size: 0.9vw;
  color: #d2764a;
  text-align: center;
  border: 0.1rem solid;
  border-radius: 2rem;
  align-items: center;
  display: flexbox;
  justify-content:center;
  @media (max-width: 768px) {
    display: none;
  };
`

const NameText = styled.span`
  font-size: 120%;
  font-weight: 600;
`

const TextBoxMikolaj = styled(TextBox) `
  left: 9.9%;
`

const TextBoxPaulina = styled(TextBox) `
  left: 41.6%;
`

const TextBoxMateusz = styled(TextBox) `
  left: 72.9%;
`

const Organizers: React.FC = () => {
    return(
        <>
            <Container>
                <picture>
                    <source srcSet={img8_desktop} media="(min-width: 769px)" />
                    <source srcSet={img6_mobile} media="(max-width: 768px)" />
                    <Img src={img8_desktop} alt="last page"/>
                </picture>
                <TextBoxMikolaj>
                        <NameText>MIKOŁAJ ŻUCHOWSKI <br/> </NameText>
                        KOODRYNATOR DS. LOGISTYKI <br/>
                        508 411 959 <br/>
                        MIKOLAJ.ZUCHOWSKI@BEST.KRAKOW.PL <br/>
                </TextBoxMikolaj>
                <TextBoxPaulina>
                        <NameText>PAULINA SKRZYPCZAK <br/> </NameText>
                        GŁÓWNY KOORDYNATOR <br/>
                        516 321 234 <br/>
                        PAULINA.SKRZYPCZAK@BEST.KRAKOW.PL <br/>
                </TextBoxPaulina>
                <TextBoxMateusz>
                        <NameText>MATEUSZ WIRKIJOWSKI <br/> </NameText>
                        KOODRYNATOR DS. KONTAKTU Z FIRMAMI <br/>
                        530 397 519 <br/>
                        MATEUSZ.WIRKIJOWSKI@BEST.KRAKOW.PL <br/>
                </TextBoxMateusz>

            </Container>
        </>

    )
}

export default Organizers;