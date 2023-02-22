import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// @ts-ignore
import gear_icon from "../images/gear.svg"
// @ts-ignore
import itp_logo from "../images/navbar/itp-01.svg"
// @ts-ignore
import fb_icon from "../images/navbar/fb-01.svg"
// @ts-ignore
import ig_icon from "../images/navbar/ig-01.svg"
// @ts-ignore
import li_icon from "../images/navbar/li-01.svg"

const Nav = styled.nav`
  background-color: #E5C9AD;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  height: 6vh;
  padding: .5em 0;

  a {
    text-decoration: none;
    color: #CD5E28;
  }

  @media (max-width: 768px) {
    height: 95vh;
    width: 98vw;
    max-width: 100vw;
    flex-direction: column;
    position: absolute;
    transition: max-width .5s ease-in-out;
    font-size: xx-large;

    &.hidden {
      max-width: 0 !important;
      overflow: hidden;
    }
  }
`

const LogoContainer = styled.div`
  min-width: 10%;
  width: 15%;
  img {
    display: block;
    height: 100%;
  }
  @media (max-width: 768px) {
    & {
      height: 15vh;
      width: 50%;
      display: flex;
      justify-content: center;
    }
  }
  
`

const LinkContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 5%;
  flex-direction: inherit;
  text-align: center;
`

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 12%;
  margin-right: 1%;
  img {
    display: block;
    height: 80%;
  }
  
  @media (max-width: 768px) {
    & {
      height: 10%;
      width: 30%;
      margin-right: 0;
      img {
        max-width: 33%;
      }
    }
  }
`

const NavControlButton = styled.button`
  position: absolute;
  z-index: 10;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  width: 65px;
  height: 65px;
  border: none;
  background: none;
  transition: transform .6s ease-in-out;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  &.opened {
    transform: rotate(360deg);
  }
`

interface ILink {
    name: String,
    path: string
}

const links: ILink[] = [
    {name: "Home", path: "/"},
    {name: "Sponsorzy", path: "/sponsors"},
]

const Navigation: React.FC = () => {

    const [showNav, setShowNav] = useState(false)
    const navClass = showNav ? "" : "hidden"
    const buttonClass = showNav ? "opened" : ""

    return (
        <>
            <Nav className={"navigation " + navClass}>
                <LogoContainer>
                    <img src={itp_logo} alt="XXV Inżynierskie Targi Pracy" />
                </LogoContainer>
                <LinkContainer className="links">
                    {links.map((link, i) =>
                        <Link to={link.path} key={i}>
                            {link.name}
                        </Link>
                    )}
                </LinkContainer>
                <SocialsContainer>
                    <img src={fb_icon} alt="facebook"/>
                    <img src={ig_icon} alt="instagram"/>
                    <img src={li_icon} alt="linkedin"/>
                </SocialsContainer>
            </Nav>
            <NavControlButton onClick={() => setShowNav(!showNav)} className={buttonClass}>
                <img src={gear_icon} alt="menu"/>
            </NavControlButton>
        </>
    )
}
export default Navigation;