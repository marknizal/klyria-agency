import { LuCheck } from "react-icons/lu";
import { features } from "./data";

import { Paragraph } from "../../components/shared";
import SectionTitle from "../../components/common/section-title";
import Thumbnail from "../../assets/feature-banner.png";

import * as S from "./styles";

const Feature = () => (
  <S.Wrapper>
    <S.Box>
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
    </S.Box>

    <S.Image src={Thumbnail} alt="feature-banner" loading="lazy" />
  </S.Wrapper>
);

export default Feature;
