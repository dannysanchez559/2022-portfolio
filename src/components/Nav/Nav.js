import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavWrapper, LeftNav, RightNav } from "./style.js";

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
