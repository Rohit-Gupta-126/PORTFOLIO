"use client"
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Page() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsPageReady(true), 5000);
  }, []);

  return (
    <>
      {!isPageReady && <Loader />}
      {isPageReady &&
        <section className="relative">

          <section className="Home" id="home">
            <Header />
          </section>

          <About />

          <Projects />

          <Experience />

          <Contact />

        </section>}
    </>
  );
}
