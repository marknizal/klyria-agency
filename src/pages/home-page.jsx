import { Main, Section } from "../components/shared";

import Hero from "../sections/hero";
import Services from "../sections/services";

const Homepage = () => {
  return (
    <Main>
      <Section $bg="linear-gradient(-20deg, #537895 0%, #000435 100%);">
        <Hero />
      </Section>
      <Section>
        <Services />
      </Section>
    </Main>
  );
};

export default Homepage;
