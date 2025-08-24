import styled from "@emotion/styled";
import { color, breakpoint } from "../../styles";

export const Main = styled.main`
  display: block;
`;

export const Section = styled.section`
  background: ${(props) => props.$bg || color.white};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  ${breakpoint.tablet} {
    padding: 4rem 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.$size || "1rem"};
  text-align: ${(props) => props.$align || "left"};
  line-height: 1.5rem;
`;
