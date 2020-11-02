import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { ListOfRestoCards } from "../components/ListOfRestoCards";
import { Map } from "../components/Map";
import { LogoText } from "../components/LogoText";
import { ContactForm } from "../components/ContactForm";

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
      <Section title="Encuentra tu opción ideal" id="restaurants">
        <ListOfRestoCards restaurants={restaurants} />
      </Section>
      <Section title="Encuentra tu local" id="map">
        <Map />
      </Section>
      <Section title="Unete a" id="contact">
        <LogoText size="l" />
        <ContactForm />
      </Section>
    </Layout>
  );
};

export default Home;
