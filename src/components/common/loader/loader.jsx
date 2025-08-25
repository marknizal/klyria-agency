import { Spin as AntdSpin } from "antd";
import { Wrapper } from "./styles";

const Loader = () => {
  return (
    <Wrapper>
      <AntdSpin size="large" />
    </Wrapper>
  );
};

export default Loader;
