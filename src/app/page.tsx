// import Image from "next/image";
import Conocimientos from "./_components/conocimientos";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Experiencia from "./_components/experience";
import Projects from "./_components/projects";
import Footer from "./_components/footer";
export default function Home() {
  return (
    <main >
      <Header />
      <div className="md:max-w-[1200px] mx-auto px-4 ">
        <Hero />
        <Conocimientos/>
        <Experiencia/>
        <Projects/>
        <Footer/>

      </div>
    </main>
  );
}
