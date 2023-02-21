import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// @ts-ignore
import gear_icon from "../images/gear.svg"

const Nav = styled.nav`
  background-color: #E5C9AD;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  height: 6vh;

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

`

const LinkContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 5%;
  flex-direction: inherit;
  text-align: center;
`

const SocialsContainer = styled.div`
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
                    Logo
                </LogoContainer>
                <LinkContainer className="links">
                    {links.map((link, i) =>
                        <Link to={link.path} key={i}>
                            {link.name}
                        </Link>
                    )}
                </LinkContainer>
                <SocialsContainer>
                    Socials
                </SocialsContainer>
            </Nav>
            <NavControlButton onClick={() => setShowNav(!showNav)} className={buttonClass}>
                <img src={gear_icon} alt="menu"/>
            </NavControlButton>
        </>
    )
}
export default Navigation;