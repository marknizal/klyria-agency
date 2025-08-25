import styled from "@emotion/styled";

import { Button } from "antd";
import { radius } from "../../../styles";

export const AntdButton = styled(Button)`
  font-size: 0.9rem;
  border-radius: ${radius.sm};
  padding: 1.15rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
