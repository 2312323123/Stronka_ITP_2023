
import React from 'react';
//@ts-ignore
import img8_desktop from '../images/DesktopBackgrounds/8.jpg';
//@ts-ignore
import img6_mobile from '../images/MobileBackgrounds/6.jpg';
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

const Organizers: React.FC = () => {
    return(
        <>
            <Container>
                <picture>
                    <source srcSet={img8_desktop} media="(min-width: 769px)" />
                    <source srcSet={img6_mobile} media="(max-width: 768px)" />
                    <Img src={img8_desktop} alt="last page"/>
                </picture>
            </Container>
        </>

    )
}

export default Organizers;