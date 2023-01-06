import Home from "./homePage";
import About from "./about";
import Technologies from "./technologies/technos";
import Projects from "./projects/projects";
import Contact from "./contact";

export default function site(){
  return (
    <>
      <Home/>
      <About/>
      <Technologies/>
      <Projects/>
    </>
  );
}