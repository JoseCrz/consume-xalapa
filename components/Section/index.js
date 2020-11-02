import React from "react";
import PropTypes from "prop-types";

import { StyledSection, H2 } from "./style";

export const Section = ({ title, id, children }) => {
  return (
    <StyledSection id={id}>
      <H2>{title}</H2>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};
