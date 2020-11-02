import styled from "styled-components";
import { phone } from "../../styles/MediaQueries";

export const Container = styled.div`
  background: var(--primary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  z-index: 9999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  ${phone} {
    display: flex;
  }
`;
