import { Suspense, lazy } from "react";

import { Main, Section } from "../components/shared";
import { color, gradientBg } from "../styles";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Loader from "../components/common/loader";

const Hero = lazy(() => import("../sections/hero"));
const Services = lazy(() => import("../sections/services"));
const About = lazy(() => import("../sections/about"));
const Feature = lazy(() => import("../sections/feature"));
const Projects = lazy(() => import("../sections/projects"));
const Cta = lazy(() => import("../sections/cta"));

const Home = () => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <Section id="home" $bg={gradientBg.hero}>
          <Hero />
        </Section>

        <Section>
          <Services />
        </Section>

        <Section id="about" $bg={gradientBg.about}>
          <About />
        </Section>

        <Section>
          <Feature />
        </Section>

        <Section id="projects" $bg={gradientBg.projects}>
          <Projects />
        </Section>

        <Section id="contact" $bg={color.primary}>
          <Cta />
        </Section>

        <Footer />
      </Suspense>
    </Main>
  );
};

export default Home;
