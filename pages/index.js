import React from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Section title="Encuentra tu opción ideal"></Section>
    </Layout>
  );
};

export default Home;
