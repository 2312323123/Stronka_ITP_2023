
import React from 'react';
//@ts-ignore
import img3_desktop from '../images/DesktopBackgrounds/3.jpg';
//@ts-ignore
import img3_mobile from '../images/MobileBackgrounds/3.jpg';
//@ts-ignore
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

const Map: React.FC = () => {
    return(
        <>
            <Container>
                <picture>
                    <source srcSet={img3_desktop} media="(min-width: 769px)" />
                    <source srcSet={img3_mobile} media="(max-width: 768px)" />
                    <Img src={img3_desktop} alt="last page"/>
                </picture>
            </Container>
        </>

    )
}

export default Map;