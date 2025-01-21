import React from "react";
import { Dashboard } from "@/components/Home";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/about";
import Project from "@/components/Project";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },  // Menggunakan anchor link untuk scrolling
    { name: "About", link: "#about" },
    { name: "Project", link: "#project" },
  ];

  return (
    <div className="flex min-h-[300vh] bg-black flex-col scroll-smooth">  {/* scroll-smooth untuk efek halus */}
      <FloatingNav navItems={navItems} className="font-outfit" />

      {/* Dashboard Section */}
      <section id="home" className="relative z-10">
        <Dashboard />
      </section>

      {/* Gradient Divider Between Sections */}
      <div className="h-16 bg-gradient-to-b from-black to-backgroud"></div>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-slate-500">
        <About />
      </section>

      {/* Gradient Divider Between Sections */}
      <div className="h-16 bg-gradient-to-b from-backgroud to-backgroud"></div>

      {/* Project Section */}
      <section id="project" className="relative z-10 bg-backgroud">
        <Project />
      </section>
    </div>
  );
}
