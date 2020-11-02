import styled from "styled-components";
import { phone } from "../../styles/MediaQueries";
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${phone} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;
