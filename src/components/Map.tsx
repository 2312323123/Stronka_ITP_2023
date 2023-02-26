import React from 'react'
//@ts-ignore
import img3_desktop from '../images/DesktopBackgrounds/3.jpg'
//@ts-ignore
import img3_mobile from '../images/MobileBackgrounds/3.jpg'
//@ts-ignore
import map1 from '../images/map.svg'
import styled from 'styled-components'
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
  top: 22%;
`

const MapBox = styled.div`
  width: 70%;
  height: 60%;
  position: absolute;
  left: 15%;
  top: 20%;
  background-color: #cd5d29;
  align-items: center;
  display: flexbox;
  justify-content: center;
  @media (max-width: 769px) {
    background-color: rgba(0, 0, 0, 0);
    width: 83%;
    top: 10%;
    left: 10%;
  } ;
`

const Map: React.FC = () => {
  return (
    <>
      <Container>
        <picture>
          <source srcSet={img3_desktop} media="(min-width: 769px)" />
          <source srcSet={img3_mobile} media="(max-width: 768px)" />
          <Img src={img3_desktop} alt="last page" />
        </picture>
        <MapBox>
          <MapImg src={map1} alt="map" />
        </MapBox>
      </Container>
    </>
  )
}

export default Map
