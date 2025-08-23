import styled from "@emotion/styled";
import { Button } from "antd";

export const AntdButton = styled(Button)`
  font-size: 0.9rem;
  border-radius: 0.5rem;
  padding: 1.15rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
