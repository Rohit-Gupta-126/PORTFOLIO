"use client"
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Ring from "@/components/UI/Ring";
import LetterGlitch from "@/components/LetterGlitch";

export default function Page() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsPageReady(true), 4800);
  }, []);

  return (
    <>
      {!isPageReady && <LetterGlitch />}
      {isPageReady &&

        <section className="">

          <Header />
          
          <section className="Home text-white flex items-center justify-center" id="home">
            <div className="hero-container flex items-center gap-96 rounded-lg p-8">
              <div className="textbox text-3xl">
                Hi, I am Rohit Gupta
              </div>
              <Ring />
            </div>
          </section>

          <About />

          <Skills />

          <Projects />

          <Experience />

          <Contact />

        </section>
        
        }
    </>
  );
}
