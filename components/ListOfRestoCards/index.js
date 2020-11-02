import React from "react";
import PropTypes from "prop-types";

import { RestoCard } from "../RestoCard";

import { Container } from "./style";

export const ListOfRestoCards = ({ restaurants }) => {
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <RestoCard {...restaurant} />
      ))}
    </Container>
  );
};

ListOfRestoCards.propTypes = {
  restaurants: PropTypes.array.isRequired,
};
