import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Container, Image as Img } from "../../components/shared";
import { color, breakpoint, radius } from "../../styles";

/* ---------- Reusable Styles ---------- */

const responsiveText = css`
  .title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const gradient = {
  background: "linear-gradient(-90deg, #ffffff, #b3d8ff, #3b82f6, #7aa7d9)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: color.transparent,
  backgroundClip: "text",
  color: color.transparent,
};

export const btn = {
  borderRadius: radius.lg,
  padding: "1.25rem 1.5rem",
};

/* ---------- Components ---------- */

export const Wrapper = styled(Container)`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  justify-content: center;
  align-items: center;

  ${breakpoint.tablet} {
    gap: 1rem;
    min-height: inherit;
  }

  ${breakpoint.mobile} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Hello = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${breakpoint.desktop} {
    gap: 2rem;
  }

  .title {
    font-size: 4rem;
    line-height: 4.5rem;
    color: ${color.white};
  }

  .description {
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${color.white};
  }

  ${breakpoint.tablet} {
    ${responsiveText}
  }

  ${breakpoint.mobile} {
    ${responsiveText}
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Image = styled(Img)`
  border-radius: 1rem 5rem 2rem;
`;
