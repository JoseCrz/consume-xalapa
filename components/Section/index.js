import React from "react";
import PropTypes from "prop-types";

import { StyledSection, H2 } from "./style";

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <H2>{title}</H2>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
