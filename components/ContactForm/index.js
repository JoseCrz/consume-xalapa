import React from "react";
import HubspotForm from "react-hubspot-form";

import { Container } from "./style";

export const ContactForm = () => {
  return (
    <Container>
      <HubspotForm
        portalId="7416801"
        formId="37679158-059c-4b48-a648-55540d9c51fb"
      />
    </Container>
  );
};
