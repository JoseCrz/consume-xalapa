import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { ListOfRestoCards } from "../components/ListOfRestoCards";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await axios.get("/api/restaurants");
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
  }, []);
  return (
    <Layout>
      <Hero />
      <Section title="Encuentra tu opción ideal">
        <ListOfRestoCards restaurants={restaurants} />
      </Section>
    </Layout>
  );
};

export default Home;
