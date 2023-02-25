// component body in typescript
import React from 'react'
// @ts-ignore
import BEST_logo from '../images/landing_page/BEST_logo.png'
// @ts-ignore
import ITP_logo from '../images/landing_page/ITP_logo.png'
// @ts-ignore
import tlo_pc_1 from '../images/landing_page/1.svg'
import styled from 'styled-components'

import Wave from './Wave'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: #efd7bf url(${tlo_pc_1});
  background-size: cover;
  background-position: bottom;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    height: calc(100vh - 6vh - 1em);
  }
`

const BESTLogo = styled.img`
  position: absolute;
  width: clamp(8rem, 24vw, 20rem);
  right: 0;
  margin-top: 4vh;
  margin-right: 6vw;
  user-select: none;
  @media (min-width: 768px) {
    margin-top: 2vh;
    margin-right: 4vw;
  }
`

const HeroTextContainer = styled.div`
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(12rem, 80vw, 36rem);
  text-align: center;
  @media (min-width: 768px) {
    width: clamp(12rem, 50vw, 36rem);
    transform: none;
    top: 10%;
    left: 10%;
    text-align: left;
  }
`

const ITPLogo = styled.img`
  width: 100%;
  display: block;
  margin-block: 1.6rem;
  margin-inline: auto;
  @media (min-width: 768px) {
    width: 98%;
    margin-inline: 0;
  }
`

const H2 = styled.h2`
  font-size: clamp(0.8rem, 5vw, 2.5rem);
  line-height: 1.15;
  @media (min-width: 768px) {
    font-size: clamp(1.7rem, 2.5vw, 2.5rem);
    line-height: 1.2;
  }
`
const H2_smaller = styled.h2`
  font-size: clamp(0.8rem, 4.6vw, 2rem);
  line-height: 1.15;
  @media (min-width: 768px) {
    font-size: clamp(1.5rem, 2.2vw, 2.2rem);
    line-height: 1.2;
  }
`

const TitlePage: React.FC = () => {
  return (
    <>
      <Section>
        <HeroTextContainer>
          <ITPLogo src={ITP_logo} alt="ITP_logo" />
          <H2>8 marca 2023</H2>
          <H2>10:00-16:00</H2>
          <H2_smaller>stadion miejski im. Henryka Reymana</H2_smaller>
        </HeroTextContainer>
        <BESTLogo src={BEST_logo} alt="BEST_logo" />
        <Wave />
      </Section>
    </>
  )
}

export default TitlePage
