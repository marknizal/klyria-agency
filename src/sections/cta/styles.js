import styled from "@emotion/styled";

import { Container } from "../../components/shared";
import { color, breakpoint, radius } from "../../styles";

export const gradient = {
  background: "linear-gradient(90deg, #ffffff, #b3d8ff, #3b82f6, #7aa7d9)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: color.transparent,
  backgroundClip: "text",
  color: color.transparent,
};

export const btn = { borderRadius: radius.lg, padding: "1.5rem" };

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 4rem 1rem 0;
  color: ${color.white};

  .title {
    font-size: 2rem;
    max-width: 60%;
  }

  ${breakpoint.tablet} {
    padding: 4rem 2rem 0;
  }

  ${breakpoint.mobile} {
    flex-direction: column;

    .title {
      max-width: inherit;
    }
  }
`;
