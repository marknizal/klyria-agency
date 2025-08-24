import { services } from "./data";
import { LuExternalLink } from "react-icons/lu";

import Button from "../../components/common/button";
import Grid from "../../components/common/grid";
import SectionTitle from "../../components/common/section-title";

import * as S from "./styles";

const Services = () => (
  <S.Wrapper>
    <SectionTitle
      title="What we do?"
      subTitle="The services we offer are specifically designed to meet your needs."
    />

    <Grid columns={{ default: 4 }} gap="1.5rem">
      {services.map(({ id, title, description, icon: Icon, color }) => (
        <S.Card key={id}>
          <S.IconWrapper $bg={color}>
            <Icon />
          </S.IconWrapper>

          <h2>{title}</h2>
          <p>{description}</p>

          <Button icon={<LuExternalLink />} type="link" style={S.btn}>
            Learn More
          </Button>
        </S.Card>
      ))}
    </Grid>
  </S.Wrapper>
);

export default Services;
