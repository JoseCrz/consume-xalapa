import React, { useState } from "react";
import Link from "next/link";

import { LogoText } from "../LogoText";
import { BurgerButton } from "../BurgerButton";

import { Header, Nav, Ul, Li, A } from "./style";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header>
      <LogoText />
      <Nav isActive={isActive}>
        <Ul>
          <Li>
            <Link href="">
              <A>Inicio</A>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <A>Negocios</A>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <A>Mapa</A>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <A>Promociones</A>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <A>Contacto</A>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <A>Nosotros</A>
            </Link>
          </Li>
        </Ul>
      </Nav>
      <BurgerButton onClick={() => setIsActive(!isActive)} />
    </Header>
  );
};
