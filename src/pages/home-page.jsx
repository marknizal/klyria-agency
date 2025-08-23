import { Main, Section } from "../components/shared";
import Hero from "../sections/hero";

const Homepage = () => {
  return (
    <Main>
      <Section $bg="#000435">
        <Hero />
      </Section>
    </Main>
  );
};

export default Homepage;
