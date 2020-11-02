import React from "react";
import PropTypes from "prop-types";

import { H2, Highlight } from "./style";

export const LogoText = ({ size }) => {
  return (
    <H2 size={size}>
      consume
      <Highlight>xalapa</Highlight>
      .com
    </H2>
  );
};

LogoText.defaultProps = {
  size: "m",
};

LogoText.propTypes = {
  size: PropTypes.string,
};
