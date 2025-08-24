import Button from "../../components/common/button";
import * as S from "./styles";

const Cta = () => (
  <S.Wrapper>
    <h1 className="title">
      <span style={S.gradient}>Join our community</span> by using our services
      and grow your business.
    </h1>

    <Button type="primary" style={S.btn}>
      Try It For Free
    </Button>
  </S.Wrapper>
);

export default Cta;
