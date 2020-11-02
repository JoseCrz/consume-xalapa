import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nav = styled.nav``;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

export const Li = styled.li`
  margin-left: 20px;
  font-weight: bold;
`;

export const A = styled.a`
  text-decoration: none;
  &:hover {
    color: var(--primary);
  }
`;
