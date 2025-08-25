import styled from "@emotion/styled";

import { Container as C } from "../../shared";
import { color, breakpoint } from "../../../styles";

export const form = { display: "flex", gap: "0.65rem", marginTop: "1rem" };

export const Wrapper = styled.footer`
  background-color: ${color.primary};
  color: ${color.white};
`;

export const Container = styled(C)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 4rem 1rem;
  align-items: start;

  ${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }

  small {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Link = styled.a`
  font-size: 0.9rem;
  line-height: 1.4rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: ${color.link};
    outline: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
