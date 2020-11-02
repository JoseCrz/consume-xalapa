import React from "react";
import PropTypes from "prop-types";

import { GiHamburgerMenu } from "react-icons/gi";

import { Container } from "./style";

export const BurgerButton = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <GiHamburgerMenu />
    </Container>
  );
};

BurgerButton.propTypes = {
  onClick: PropTypes.func,
};
