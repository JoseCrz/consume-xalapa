import React from "react";
import Link from "next/link";

import { Header, Nav, Ul, Li, A } from "./style";

export const Navbar = () => {
  return (
    <Header>
      <Nav>
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
    </Header>
  );
};
