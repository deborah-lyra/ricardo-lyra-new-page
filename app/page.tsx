"use client"

import { AboutMe } from "@/src/components/aboutMe";
import { Contacts } from "@/src/components/contact";
import { Footer } from "@/src/components/footer";
import { Hero } from "@/src/components/hero";
import { ModalQuestions } from "@/src/components/modalQuestions";
import Navbar from "@/src/components/navbar";
import { Specialization } from "@/src/components/specialization";
import { Surgeries } from "@/src/components/surgeries";
import { TopLogo } from "@/src/components/topLogo";
import { useState } from "react";


export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleQuestionnaire = () => setModalOpen((prev) => !prev);
  return (
    <div >
      <TopLogo />
      <Navbar openQuestionnaire={toggleQuestionnaire} />
      <Hero />
      <AboutMe />
      <Specialization />
      <Surgeries />
      <Contacts/>
      <Footer/>
      {isModalOpen && <ModalQuestions closeModal={toggleQuestionnaire} />}

      <button
        className="lg:hidden md:hidden fixed bottom-8 right-8 bg-sky-900 text-white hover:bg-sky-700 rounded-md px-4 py-3 text-md font-medium"
        onClick={toggleQuestionnaire}
      >
        Teste Sua Função Erétil
      </button>
    </div>
  );
}
