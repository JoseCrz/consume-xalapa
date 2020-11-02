import React, { useState } from "react";
import Link from "next/link";

import { LogoText } from "../LogoText";
import { BurgerButton } from "../BurgerButton";

import { Header, Nav, Ul, Li, A } from "./style";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleMenu = () => setIsActive(!isActive);

  return (
    <Header>
      <LogoText />
      <Nav isActive={isActive}>
        <Ul>
          <Li>
            <Link href="">
              <A onClick={handleMenu}>Inicio</A>
            </Link>
          </Li>
          <Li>
            <Link href="#restaurants">
              <A onClick={handleMenu}>Negocios</A>
            </Link>
          </Li>
          <Li>
            <Link href="#map">
              <A onClick={handleMenu}>Mapa</A>
            </Link>
          </Li>
          <Li>
            <Link href="#contact">
              <A onClick={handleMenu}>Contacto</A>
            </Link>
          </Li>
        </Ul>
      </Nav>
      <BurgerButton onClick={handleMenu} />
    </Header>
  );
};
