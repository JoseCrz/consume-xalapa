import React from "react";
import PropTypes from "prop-types";

import { H2 } from "./style";

export const Section = ({ title, children }) => {
  return (
    <section>
      <H2>{title}</H2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
