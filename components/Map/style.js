import styled from "styled-components";
import { phone } from "../../styles/MediaQueries";
export const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;
  max-width: 80%;
  margin: 0 auto;

  ${phone} {
    max-width: 100%;
  }
`;
