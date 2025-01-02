import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Gap from "@/components/Home/Gap";
import Project from "@/components/Projects";

const Page = () => {
  return (
    <>
      <Home />
      <Gap/>
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default Page