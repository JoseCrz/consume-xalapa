import styled from "styled-components";

export const H2 = styled.h2`
  color: var(--text);
  font-family: var(--logo-font);
  font-size: ${({ size }) => (size === "m" ? "1.6em" : "2.5em")};
  font-weight: bold;
  text-align: center;
`;

export const Highlight = styled.span`
  font-family: var(--logo-font);
  color: var(--primary);
`;
