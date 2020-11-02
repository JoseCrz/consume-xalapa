import React from "react";
import Link from "next/link";

import { Header, Nav, Ul, Li } from "./style";

export const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <Link href="">
              <a>Inicio</a>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <a>Negocios</a>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <a>Mapa</a>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <a>Promociones</a>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <a>Contacto</a>
            </Link>
          </Li>
          <Li>
            <Link href="">
              <a>Nosotros</a>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
};
