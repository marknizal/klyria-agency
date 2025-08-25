import { LuCheck } from "react-icons/lu";
import { features } from "./data";

import { Image, Box, Paragraph } from "../../components/shared";
import SectionTitle from "../../components/common/section-title";
import Thumbnail from "../../assets/feature-banner.png";

import * as S from "./styles";

const Feature = () => (
  <S.Wrapper>
    <Box $gap="1.5rem">
      <SectionTitle
        title="Our Solutions"
        subTitle="We make your spending stress-free for you to have the perfect control."
        $align="left"
      />

      <Paragraph>
        Our platform helps you stay on top of your finances with intelligent
        tools designed to simplify money management. Track expenses, plan
        budgets, and make smarter financial decisions effortlessly.
      </Paragraph>

      <S.List>
        {features.map((feature) => (
          <S.Item key={feature.id}>
            <LuCheck style={S.icon} /> <p style={S.text}>{feature.text}</p>
          </S.Item>
        ))}
      </S.List>
    </Box>

    <Image src={Thumbnail} alt="feature-banner" $ratio="4 / 3" $fit="contain" />
  </S.Wrapper>
);

export default Feature;
