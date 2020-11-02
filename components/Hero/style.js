import styled from "styled-components";
import { phone } from "../../styles/MediaQueries";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${phone} {
    font-size: 12px;
  }
`;

export const H1 = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 16px;

  ${phone} {
    margin: 0;
  }
`;

export const P = styled.p`
  font-weight: bold;
  text-align: center;
  max-width: 80%;

  ${phone} {
    font-size: 1.4em;
    max-width: 100%;
  }
`;
