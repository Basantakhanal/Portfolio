import Experience from "./Sections/Experience";
// import Testimonials from "./Sections/Testimonials";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";
import Project from "./Sections/Project";
// import Footers from "./Sections/Footers";
// import CustomCursor from "./Components/CustomCursor";
import React from "react";
import IntroAnimation from "./Components/IntroAnimation";
import About from "./Sections/About";

// export default function App() {
//   const [introDone, setIntroDone] = React.useState(false);

//   return (
//     <>
//       {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
//       {introDone && (
//         <div className="relative min-h-screen bg-gradient-to-br from-[#302b63] via-[#00bf8f] to-[#1cd8d2] text-white">
//           <CustomCursor />
//           <Navbar />
//           <Home />
//           <About /> 
//           <Skills />
//           <Project />
//           <Experience />
//           {/* <Testimonials /> */}
//           <Contact />
//           {/* <Footers /> */}
//         </div>
//       )}
//     </>
//   );
// }
export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className="relative min-h-screen bg-[#0f172a] text-white">
          {/* <CustomCursor /> */}   {/* ← remove if you don't want cursor glow */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Contact />
        </div>
      )}
    </>
  );
}