import styled from "styled-components";
import { phone } from "../../styles/MediaQueries";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${phone} {
    font-size: 12px;
  }
`;
export const Nav = styled.nav`
  ${phone} {
    position: fixed;
    top: 0;
    bottom: 0;
    right: ${({ isActive }) => (isActive ? "0" : "-50vw")};
    width: 50vw;
    background: var(--primary);
    z-index: 9998;
    transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 5px 0 0 5px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;

  ${phone} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const Li = styled.li`
  margin-left: 20px;
  font-weight: bold;

  ${phone} {
    margin: 10px 0;
    font-size: 1.6em;
    /* opacity: 0; */
  }
`;

export const A = styled.a`
  text-decoration: none;
  &:hover {
    color: var(--primary);
  }
`;
