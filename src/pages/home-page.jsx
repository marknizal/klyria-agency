import { Main, Section } from "../components/shared";

import Hero from "../sections/hero";
import Services from "../sections/services";
import About from "../sections/about";

const Homepage = () => {
  return (
    <Main>
      <Section $bg="linear-gradient(-20deg, #537895 0%, #000435 100%);">
        <Hero />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section $bg="linear-gradient(-225deg, #D7FFFE 0%, #FFFEFF 100%);">
        <About />
      </Section>
    </Main>
  );
};

export default Homepage;
