import styled from "@emotion/styled";

import { Container } from "../../components/shared";
import { breakpoint } from "../../styles";

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  padding: 5rem 1rem;
  align-items: center;

  ${breakpoint.tablet} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  ${breakpoint.mobile} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  pointer-events: none;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

export const text = {
  fontSize: "1rem",
};

export const icon = {
  fontSize: "1.35rem",
  flexShrink: 0,
  backgroundColor: "yellowgreen",
  color: "white",
  borderRadius: "50%",
  padding: "0.25rem",
};
