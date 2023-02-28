import React from 'react';
import styled from "styled-components";
import useMediaQuery from "../utils/UseMediaQuery";

function importAll(r: any) {
  return r.keys().map(r)
}

const imagesDesktop = importAll(
  require.context('../images/DesktopBackgrounds', false, /\.(png|jpe?g|svg)$/)
)
const imagesMobile = importAll(
  require.context('../images/MobileBackgrounds', false, /\.(png|jpe?g|svg)$/)
)
const logos = importAll(
  require.context('../images/Logos', false, /\.(png|jpe?g|svg)$/)
)

const Container = styled.div`
  position: relative;
  display: grid;
`

const ImgDesktop = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  } ;
`

const ImgMobile = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 769px) {
    display: none;
  } ;
`

const Crane = styled.img`
  width: 30%;
  position: absolute;
  right: 10%;
  top: 9.52%;
  @media (max-width: 768px) {
    display: none;
  } ;
`

const SponsorImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  transform: translate(-0.5rem, -0.5rem);
  @media (min-width: 768px) {
    padding: 1.5rem;
    transform: translate(-1.5rem, -1.5rem);
  } ;
`

const Sabre = styled.a`
  width: 20%;
  position: absolute;
  right: 38%;
  top: 16%;
  @media (max-width: 768px) {
    right: 32%;
    top: 3.5%;
    width: 38%;
  } ;
`

const Woodward = styled.a`
  width: 20%;
  position: absolute;
  left: 8.8%;
  top: 36.6%;
  @media (max-width: 768px) {
    top: 32%;
    left: 7%;
    width: 30%;
  } ;
`
const Pega = styled.a`
  width: 9%;
  position: absolute;
  left: 45.6%;
  top: 36%;
  @media (max-width: 768px) {
    left: 69%;
    top: 31%;
    width: 17%;
  } ;
`
const Mars = styled.a`
  width: 11%;
  position: absolute;
  right: 13%;
  top: 36.6%;
  @media (max-width: 768px) {
    right: 10.5%;
    top: 39.4%;
    width: 23%;
  } ;
`
const Aptiv = styled.a`
  width: 16%;
  position: absolute;
  left: 10.5%;
  top: 44%;
  @media (max-width: 768px) {
    left: 8.4%;
    top: 48.4%;
    width: 27%;
  } ;
`
const Motorola = styled.a`
  width: 9%;
  position: absolute;
  left: 45.8%;
  top: 43%;
  @media (max-width: 768px) {
    left: 14.5%;
    top: 38.5%;
    width: 16%;
  } ;
`

const Autodesk = styled.a`
  width: 18.8%;
  position: absolute;
  right: 9.4%;
  top: 44.1%;
  @media (max-width: 768px) {
    right: 6.2%;
    top: 48.5%;
    width: 32%;
  } ;
`

const GE = styled.a`
  width: 15%;
  position: absolute;
  right: 65.7%;
  top: 65.4%;
  @media (max-width: 768px) {
    right: 66%;
    top: 65.8%;
    width: 24%;
  } ;
`

const Adecco = styled.a`
  width: 12%;
  position: absolute;
  right: 21%;
  top: 65.3%;
  @media (max-width: 768px) {
    right: 10.8%;
    top: 65.6%;
    width: 22%;
  } ;
`

const Eska = styled.a`
  width: 12%;
  position: absolute;
  left: 13%;
  top: 86.2%;
  @media (max-width: 768px) {
    left: 8.8%;
    top: 80.5%;
    width: 28%;
  } ;
`

const PodajDalej = styled.a`
  width: 10%;
  position: absolute;
  right: 45.2%;
  top: 86.2%;
  @media (max-width: 768px) {
    right: 12%;
    top: 96.2%;
    width: 20%;
  } ;
`

const DlaStudenta = styled.a`
  width: 11%;
  position: absolute;
  right: 13%;
  top: 86.4%;
  @media (max-width: 768px) {
    right: 10.7%;
    top: 80.8%;
    width: 22%;
  } ;
`

const Eurostudent = styled.a`
  width: 14%;
  position: absolute;
  left: 11.7%;
  top: 93.2%;
  @media (max-width: 768px) {
    left: 7.5%;
    top: 88.5%;
    width: 30%;
  } ;
`

const KMS = styled.a`
  width: 13%;
  position: absolute;
  right: 44%;
  top: 93.4%;
  @media (max-width: 768px) {
    right: 66%;
    top: 96.3%;
    width: 25%;
  } ;
`

const FXMAG = styled.a`
  width: 5%;
  position: absolute;
  right: 15.6%;
  top: 93.4%;
  @media (max-width: 768px) {
    right: 16%;
    top: 88.6%;
    width: 11%;
  } ;
`

const TitleName = styled.div`
  position: absolute;
  background-color: #ead8ce;
  width: 18%;
  height: 3.2%;
  font-size: 2.4vw;
  color: #d2764a;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content:center;
  @media (max-width: 768px) {
    display: none;
  };
`

const MainSponsorTitle = styled(TitleName)`
  left: 43%;
  top: 5.7%;
`
const SponsorsTitle = styled(TitleName)`
  left: 41%;
  top: 28.4%;
`

const StudentPartner = styled(TitleName)`
  left: 17.7%;
  top: 56%;
  font-size: 2.7vw;
  height: 4%;
`

const ContentPartner = styled(StudentPartner)`
  left: 64%;
`

const MediaTitle = styled(TitleName)`
  left: 41%;
  top: 78.2%;
`

const Sponsors: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  console.log(isMobile)
  return (
      <div id="sponsors">
        <Container>
          {!isMobile &&
              <>
                <ImgDesktop src={imagesDesktop[3].default} alt="img4"/>
                <ImgDesktop src={imagesDesktop[4].default} alt="img5"/>
                <ImgDesktop id="partners" src={imagesDesktop[5].default} alt="img6"/>
                <ImgDesktop id="patrons" src={imagesDesktop[6].default} alt="img7"/>
                <Crane src={imagesDesktop[8].default} alt="crane"/>

                <MainSponsorTitle>SPONSOR GŁÓWNY</MainSponsorTitle>
                <SponsorsTitle>SPONSORZY</SponsorsTitle>

                <StudentPartner>PARTNER <br/> STREFY <br/> STUDENTA</StudentPartner>
                <ContentPartner>PARTNER <br/> MERYTORYCZNY </ContentPartner>
              </>
          }

          {
              isMobile &&
              <>
                <ImgMobile src={imagesMobile[3].default} alt="img4"/>
                <ImgMobile id="partners patrons" src={imagesMobile[4].default} alt="img5"/>
              </>
          }


          <Sabre href="https://www.sabre.com/locations/poland/" target="_blank">
            <SponsorImg src={logos[0].default} alt="Sabre"/>
          </Sabre>

          <Woodward href="https://www.woodward.com/" target="_blank">
            <SponsorImg src={logos[1].default} alt="Woodward"/>
          </Woodward>

          <Pega href="https://www.pega.com/" target="_blank">
            <SponsorImg src={logos[2].default} alt="Pega"/>
          </Pega>

          <Mars href="https://www.mars.com/" target="_blank">
            <SponsorImg src={logos[3].default} alt="Mars"/>
          </Mars>

          <Aptiv href="https://www.aptiv.com/" target="_blank">
            <SponsorImg src={logos[4].default} alt="Aptiv"/>
          </Aptiv>

          <Motorola
              href="https://www.motorolasolutions.com/en_us/home.html"
              target="_blank"
          >
            <SponsorImg src={logos[5].default} alt="Motorola"/>
        </Motorola>

        <Autodesk href="https://www.autodesk.com/" target="_blank">
          <SponsorImg src={logos[6].default} alt="Autodesk" />
        </Autodesk>

        <GE href="https://www.ge.com/" target="_blank">
          <SponsorImg src={logos[7].default} alt="GE" />
        </GE>

        <Adecco href="https://www.adecco.pl/" target="_blank">
          <SponsorImg src={logos[8].default} alt="Adecco" />
        </Adecco>

        <Eska href="https://www.eska.pl/" target="_blank">
          <SponsorImg src={logos[9].default} alt="Eska" />
        </Eska>

        <PodajDalej href="https://podajdalej.pl/" target="_blank">
          <SponsorImg src={logos[10].default} alt="Podaj Dalej" />
        </PodajDalej>

        <DlaStudenta href="https://www.dlastudenta.pl/" target="_blank">
          <SponsorImg src={logos[11].default} alt="Dla Studenta" />
        </DlaStudenta>

        <Eurostudent href="https://eurostudent.pl/" target="_blank">
          <SponsorImg src={logos[12].default} alt="Eurostudent" />
        </Eurostudent>

        <KMS href="https://kms.org.pl/" target="_blank">
          <SponsorImg src={logos[13].default} alt="KMS" />
        </KMS>

        <FXMAG href="https://fxmag.pl/" target="_blank">
          <SponsorImg src={logos[14].default} alt="FXMAG" />
        </FXMAG>
      </Container>
    </div>
  )
}

export default Sponsors
