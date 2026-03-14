import { Navbar, Welcome, Dock, BootScreen, Home } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Terminal, Projects, Finder, Text, Image, Photos, Contact } from "#windows";
import { useState } from "react";

gsap.registerPlugin(Draggable);

const Desktop = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Terminal />
      <Projects />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
    </main>
  );
};

export default function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {booting && <BootScreen onComplete={() => setBooting(false)} />}
      <div style={{ animation: "fadeIn 1.5s ease" }}>
        <Desktop />
      </div>
    </>
  );
}
