import ArticleComponent from "@/components/ArticleComponent";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import POW from "@/components/POW";
import Projects from "@/components/Projects";
import Role from "@/components/Role";
import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    

      <Hero />
      <Skills />

      <Projects />
      <Role />
      {/* <POW /> */}
      {/* <ArticleComponent /> */}

      <Footer />
    </main>
  );
}
