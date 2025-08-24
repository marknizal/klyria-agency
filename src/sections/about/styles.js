import styled from "@emotion/styled";

import { breakpoint } from "../../styles";
import { Container } from "../../components/shared";
import { Collapse as AntdCollapse } from "antd";

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  padding: 5rem 1rem;
  align-items: center;

  ${breakpoint.tablet} {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
  }

  ${breakpoint.mobile} {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  pointer-events: none;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Collapse = styled(AntdCollapse)`
  .ant-collapse-content-box {
    padding: 0 1.5rem !important;
  }

  .ant-collapse-header {
    font-size: 1.15rem;
    font-weight: 500;
    padding: 0.8rem 0 !important;
    align-items: center !important;
  }

  .ant-collapse-content {
    font-size: 1rem;
  }
`;
