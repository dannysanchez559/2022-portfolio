import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  a:hover {
    color: rgba(90, 113, 158, 1);
  }

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-evenly;
  }
`;

const LeftNav = styled.div``;

const RightNav = styled.div`
  width: 300px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // Small devices (landscape phones, 350px and up)
  @media (min-width: 350px) {
    width: auto;
    justify-content: space-evenly;
    a {
      margin: 0 15px;
    }
  }
`;

const Nav = () => {
  const [opaqueNav, setOpaqueNav] = useState("rgba(0,0,0,0)");

  useEffect(() => {
    window.addEventListener("scroll", navBarScrollEffect);

    return () => {
      window.removeEventListener("scroll", navBarScrollEffect);
    };
  }, []);

  const navBarScrollEffect = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setOpaqueNav("rgba(0, 0, 0, 0.8)")
        : setOpaqueNav("rgba(0,0,0,0)");
    }
  };

  return (
    <NavWrapper style={{ backgroundColor: `${opaqueNav}` }}>
      <LeftNav>
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={400}
          style={{ cursor: "pointer" }}
        >
          <a> Daniel S.</a>
        </Link>
      </LeftNav>
      <RightNav>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={400}
          style={{ cursor: "pointer" }}
        >
          about
        </Link>
        <Link
          to="work"
          spy={true}
          smooth={true}
          duration={400}
          style={{ cursor: "pointer" }}
        >
          work
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={400}
          style={{ cursor: "pointer" }}
        >
          contact
        </Link>
      </RightNav>
    </NavWrapper>
  );
};

export default Nav;
