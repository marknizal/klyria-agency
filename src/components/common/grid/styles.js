import styled from "@emotion/styled";
import { breakpoint } from "../../../styles";

export const List = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  gap: ${(props) => props.$gap || "0.8rem"};
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);

  &.asymmetric {
    grid-template-columns: 2fr 1fr;
  }

  ${breakpoint.tablet} {
    grid-template-columns: repeat(var(--columns-tablet, 2), 1fr);

    &.asymmetric {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  ${breakpoint.mobile} {
    grid-template-columns: repeat(var(--columns-mobile, 1), 1fr);

    &.asymmetric {
      grid-template-columns: repeat(1, 1fr);
    }

    &.small-gap {
      gap: 0.5rem;
    }
  }
`;
