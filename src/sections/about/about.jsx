import Thumbnail from "../../assets/about-banner.png";
import SectionTitle from "../../components/common/section-title";

import * as S from "./styles";
import { Image, Box } from "../../components/shared";
import { aboutItems } from "./data";

const About = () => (
  <S.Wrapper>
    <Image src={Thumbnail} alt="about-banner" $ratio="4 / 3" $fit="contain" />

    <Box>
      <SectionTitle
        title="Why choose us?"
        subTitle="We bring solutions to make life easier for our clients."
        $align="left"
      />

      <S.Collapse
        defaultActiveKey={["1"]}
        ghost
        items={aboutItems.map((item) => ({
          label: item.label,
          children: <p>{item.content}</p>,
          key: item.key,
        }))}
      />
    </Box>
  </S.Wrapper>
);

export default About;
