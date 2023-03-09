import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// @ts-ignore
import gear_icon from "../images/gear.svg";
// @ts-ignore
import itp_logo from "../images/navbar/itp-01.svg";
// @ts-ignore
import fb_icon from "../images/navbar/fb-01.svg";
// @ts-ignore
import ig_icon from "../images/navbar/ig-01.svg";
// @ts-ignore
import li_icon from "../images/navbar/li-01.svg";

const socialLinks = {
  facebook: "https://www.facebook.com/BEST.itp",
  instagram: "https://www.instagram.com/itp_best/",
  linkedin: "https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/",
};

const Nav = styled.nav`
  background-color: #e5c9ad;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  height: 6vh;
  padding: 0.5em 0;

  a {
    text-decoration: none;
    color: #cd5e28;
  }

  @media (max-width: 768px) {
    height: calc(99vh - calc(100vh - 100%));
    width: 100vw;
    max-width: 100vw;
    flex-direction: column;
    position: fixed;
    transition: max-width 0.5s ease-in-out;
    font-size: xx-large;
    overflow: hidden;

    &.hidden {
      max-width: 0;
    }

    a {
      font-size: 2.5rem;
    }

    .links {
      min-width: 100vw;
    }
  }
`;

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
`;

const LinkContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  flex-direction: inherit;
  text-align: center;

  @media (min-width: 768px) {
    gap: 0;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 12%;
  margin-right: 1%;

  a {
    height: 80%;
  }

  img {
    display: block;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & {
      height: 15%;
      min-width: 40vw;
      margin-right: 0;

      a {
        max-width: 33%;
      }

      img {
        width: 95%;
      }
    }
  }
`;

const NavControlButton = styled.button`
  position: fixed;
  z-index: 10;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  width: 65px;
  height: 65px;
  border: none;
  background: none;
  transition: transform 0.6s ease-in-out;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  &.opened {
    transform: rotate(360deg);
  }
`;

interface ILink {
  name: String;
  path: string;
}

const links: ILink[] = [
  { name: "Home", path: "/" },
  { name: "Mapa", path: "/#map" },
  { name: "Sponsorzy", path: "/#sponsors" },
  { name: "Patroni", path: "/#patrons" },
  { name: "Partnerzy", path: "/#partners" },
  {
    name: "Katalog wystawców",
    path: "https://itp.best.krakow.pl/ITP2023-katalog.pdf",
  },
  {
    name: "Wyślij CV",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSc36Pr-ib_wTRvGmZ5Lt8QUBBYu5BdenBO2TvuImyFKWEZxfQ/viewform?usp=sf_link",
  },
  {
    name: "Zapisz się na warsztaty",
    path: "https://forms.gle/6iHgFDjkCfxJ3n3E8",
  },
  { name: "O Beście", path: "https://www.newsite.best.krakow.pl/" },
  {
    name: "Harmonogram",
    path: "https://itp.best.krakow.pl/Harmonogram wydarzenia.pdf",
  },
  {
    name: "Regulamin",
    path: "https://itp.best.krakow.pl/ITP2023-Regulamin.pdf",
  },
];

const Navigation: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = (toggleScroll = false) => {
    if (!showNav && toggleScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setShowNav(!showNav);
  };

  const navClass = showNav ? "" : "hidden";
  const buttonClass = showNav ? "opened" : "";

  // media query
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const linkStyle =
    width > breakpoint
      ? {
          fontSize: "clamp(0.8rem, 1.3vw, 1.2rem)",
          fontFamily: "Calibri, Helvetica, sans-serif",
          fontWeight: "bold",
          flexBasis: "100%",
          alignSelf: "center",
        }
      : {
          fontSize: "clamp(2rem, 5vw, 3rem)",
        };

  return (
    <>
      <Nav className={"navigation " + navClass}>
        <LogoContainer>
          <img src={itp_logo} alt="XXV Inżynierskie Targi Pracy" />
        </LogoContainer>
        <LinkContainer className="links">
          {links.map((link, i) => (
            <Link
              style={linkStyle}
              to={link.path}
              key={i}
              onClick={() => toggleNav()}
            >
              {link.name}
            </Link>
          ))}
        </LinkContainer>
        <SocialsContainer>
          <a href={socialLinks["facebook"]}>
            <img src={fb_icon} alt="facebook" />
          </a>
          <a href={socialLinks["instagram"]}>
            <img src={ig_icon} alt="instagram" />
          </a>
          <a href={socialLinks["linkedin"]}>
            <img src={li_icon} alt="linkedin" />
          </a>
        </SocialsContainer>
      </Nav>
      <NavControlButton onClick={() => toggleNav(true)} className={buttonClass}>
        <img src={gear_icon} alt="menu" />
      </NavControlButton>
    </>
  );
};
export default Navigation;
