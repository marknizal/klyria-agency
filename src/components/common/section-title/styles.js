import styled from "@emotion/styled";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: ${(props) => props.$align || "center"};
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${color.link};
`;

export const SubTitle = styled.h1`
  font-size: 2rem;

  ${breakpoint.desktop} {
    max-width: 700px;
  }
`;
