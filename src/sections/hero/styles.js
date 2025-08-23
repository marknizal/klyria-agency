import styled from "@emotion/styled";

import { css } from "@emotion/react";
import { Container } from "../../components/shared";
import { breakpoint } from "../../styles";

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
    gap: 3rem;
  }
`;

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

export const Hello = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${breakpoint.desktop} {
    gap: 2rem;
  }

  .title {
    font-size: 4rem;
    line-height: 4.5rem;
    color: white;
  }

  .description {
    font-size: 1.25rem;
    line-height: 2rem;
    color: white;
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

export const Btn = { borderRadius: "2rem", padding: "1.25rem 1.5rem" };

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1rem 5rem 2rem;
  object-fit: cover;
`;
