import { AntdButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return <AntdButton {...rest}>{children}</AntdButton>;
};

export default Button;
