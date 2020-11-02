import styled from "styled-components";
import { phone } from "../../styles/MediaQueries";

export const Main = styled.main`
  width: 100%;
  max-width: 1300px;
  padding: 0 36px;
  margin: 0 auto;

  ${phone} {
    padding: 0 5px;
  }
`;
