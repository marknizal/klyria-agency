import * as S from "./styles";

import Button from "../../components/common/button";
import HeroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <S.Wrapper>
      <S.Hello>
        <h1 className="title">
          <span style={S.gradient}>Crafting projects</span> specific solutions
          with expertise.
        </h1>

        <p className="description">
          We're a creative company that focuses on establishing long-term
          relationships with customers.
        </p>

        <S.Actions>
          <Button style={S.btn} type="primary">
            Explore Now
          </Button>
          <Button style={S.btn}>Contact Us</Button>
        </S.Actions>
      </S.Hello>

      <S.Image src={HeroImage} loading="lazy" />
    </S.Wrapper>
  );
};

export default Hero;
