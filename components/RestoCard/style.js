import styled from "styled-components";

export const Card = styled.div`
  background: var(--element);
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardBody = styled.div`
  padding: 15px 20px;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const Category = styled.p`
  text-transform: uppercase;
  margin: 0 5px 0 0;
  font-weight: bold;
  display: inline;
`;

export const Name = styled.h2`
  font-size: 1.8em;
  margin: 0;
  letter-spacing: 2px;
`;

export const Type = styled.p`
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Hours = styled.p`
  margin: 0;
  color: var(--primary);
  font-weight: bold;
  letter-spacing: 1px;
  display: inline;
  text-transform: uppercase;
`;

export const Div = styled.div`
  border-bottom: 1px solid var(--text);
  padding: 10px 0;
`;

export const Tags = styled.ul`
  padding: 0;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  font-size: 0.7em;
`;

export const Tag = styled.li`
  margin: 0 3px;
  font-weight: bold;
  span {
    background: var(--primary);
    color: var(--body);
    padding: 3px;
    border-radius: 5px;
    display: block;
  }
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.3em;
  letter-spacing: 1px;
`;

export const Items = styled.ul`
  margin: 0;
`;

export const Actions = styled(Div)`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Cta = styled.a`
  text-transform: uppercase;
  background: ${({ isHollow }) =>
    isHollow ? "transparent" : "var(--primary)"};
  color: ${({ isHollow }) => (isHollow ? "var(--primary)" : "var(--text-cta)")};
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isHollow }) => isHollow && "border: 2px solid var(--primary)"}
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  margin: 5px 0;
  text-decoration: none;
  &:hover {
    color: var(--primary);
  }
  i {
    margin-right: 5px;
  }
`;
