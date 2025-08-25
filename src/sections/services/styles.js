import styled from "@emotion/styled";

import { color, breakpoint, radius } from "../../styles";
import { Container } from "../../components/shared";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 8px;
  padding: 2rem;
  border-radius: ${radius.base};
  height: 100%;

  ${breakpoint.mobile} {
    padding: 2rem 1.5rem;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  padding: 0.65rem;
  border-radius: calc(${radius.base} + 0.15rem);
  background-color: ${({ $bg }) => $bg};
  color: ${color.white};
`;

export const btn = {
  marginTop: "auto",
  padding: "0",
  height: "auto",
};
