import React from "react";

import { Foot, A } from "./style";
export const Footer = () => {
  return (
    <Foot>
      <p>
        Hecho con ♥️ por: <A href="https://www.memopoblete.com">Memo</A>,{" "}
        <A href="https://reneblanco.com">Rene</A> y{" "}
        <A href="https://josecuevas.dev">José</A> desde{" "}
        <A href="https://dobletapta.com">DobleTapTap</A>.
      </p>
    </Foot>
  );
};
