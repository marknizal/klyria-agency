import { color, gradientBg } from "../styles";
import { Main, Section } from "../components/shared";

import Navbar from "../components/common/navbar";
import Hero from "../sections/hero";
import Services from "../sections/services";
import About from "../sections/about";
import Feature from "../sections/feature";
import Projects from "../sections/projects";
import Cta from "../sections/cta";
import Footer from "../components/common/footer";

const Homepage = () => {
  return (
    <Main>
      <Navbar />
      <Section $bg={gradientBg.hero}>
        <Hero />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section $bg={gradientBg.about}>
        <About />
      </Section>
      <Section>
        <Feature />
      </Section>
      <Section $bg={gradientBg.projects}>
        <Projects />
      </Section>
      <Section $bg={color.primary}>
        <Cta />
      </Section>
      <Footer />
    </Main>
  );
};

export default Homepage;
