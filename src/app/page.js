import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects></Projects>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}