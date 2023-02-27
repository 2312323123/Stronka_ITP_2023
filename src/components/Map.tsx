
import React from 'react';
//@ts-ignore
import img3_desktop from '../images/DesktopBackgrounds/3.jpg';
//@ts-ignore
import img3_mobile from '../images/MobileBackgrounds/3.jpg';
//@ts-ignore
import map1 from '../images/map.svg';
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

const MapImg = styled.img`
    position: absolute;
    top: 18%;
    @media (max-width: 769px) {
       width: 95%;
       top: 25%;
    }
`

const MapBox = styled.div`
  width: 80%;
  height: 60%;
  position: absolute;
  left: 10%;
  top: 20%;
  background-color: #e9d8cc;
  align-items: center;
  display: flex;
  justify-content: center;
  border 0.1rem solid;
  border-radius 10rem;
  @media (max-width: 769px) {
    width: 92%;
    height 27%;
    top: 16%;
    left: 4%;
    border-radius 1rem;
  };
`

const Map: React.FC = () => {
    return(
        <>
            <Container id="map">
                <picture>
                    <source srcSet={img3_desktop} media="(min-width: 769px)" />
                    <source srcSet={img3_mobile} media="(max-width: 768px)" />
                    <Img src={img3_desktop} alt="last page"/>
                </picture>
                <MapBox>
                    <MapImg src={map1} alt="map"/>
                </MapBox>
            </Container>
        </>

    )
}

export default Map;