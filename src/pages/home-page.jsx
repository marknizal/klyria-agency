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
      <Section $bg="linear-gradient(-20deg, #537895 0%, #000435 100%);">
        <Hero />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section $bg="linear-gradient(-225deg, #D7FFFE 0%, #FFFEFF 100%);">
        <About />
      </Section>
      <Section>
        <Feature />
      </Section>
      <Section $bg="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);">
        <Projects />
      </Section>
      <Section $bg="#000435">
        <Cta />
      </Section>
      <Footer />
    </Main>
  );
};

export default Homepage;
