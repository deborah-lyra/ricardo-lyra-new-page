"use client"
import { ModalUnidade } from '@/src/components/modalUnidade'
import { useState } from 'react'


export default function Urology() {
  const [showUnidade, setShowUnidade] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-[#0a1628] px-6 py-20">
        <div className="max-w-3xl mx-auto">

          <div className="flex justify-center mb-8">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 opacity-80">
              <path
                d="M20 28 C16 28 12 32 12 38 C12 48 20 56 32 56 C44 56 52 48 52 38 C52 32 48 28 44 28 C42 20 38 14 32 14 C26 14 22 20 20 28 Z"
                stroke="#7ab8d9" strokeWidth="2" fill="none"
              />
              <path d="M32 56 L32 62" stroke="#7ab8d9" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="32" cy="38" rx="8" ry="7" stroke="#7ab8d9" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#2d7aaa]/20 border border-[#2d7aaa]/40 text-[#7ab8d9] text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Especialização
            </span>
            <h1 className="text-4xl font-medium text-[#f0f4f8] mb-3">Urologia</h1>
            <p className="text-[#7ab8d9] text-base">Diagnóstico e tratamento do trato urinário</p>
          </div>

          <div className="bg-[#0f2137] border border-[#1e3a55] rounded-2xl p-8 mb-6">
            <h2 className="text-lg font-medium text-[#f0f4f8] mb-4">O que é Urologia?</h2>
            <p className="text-[#8899aa] text-sm leading-relaxed mb-4">
              A Urologia é a especialidade médica que cuida do sistema urinário de homens e mulheres,
              além do sistema reprodutor masculino. O urologista é o médico capacitado para diagnosticar
              e tratar doenças que afetam rins, ureteres, bexiga, uretra e próstata.
            </p>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              Com avanços tecnológicos como a cirurgia minimamente invasiva e o diagnóstico por imagem,
              a urologia moderna oferece tratamentos cada vez mais precisos e com recuperação mais rápida.
            </p>
          </div>

          <div className="bg-[#0f2137] border border-[#1e3a55] rounded-2xl p-8 mb-6">
            <h2 className="text-lg font-medium text-[#f0f4f8] mb-4">Condições tratadas</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Cálculos renais (pedras nos rins)",
                "Infecções urinárias recorrentes",
                "Hiperplasia benigna da próstata (HPB)",
                "Câncer de próstata, rim e bexiga",
                "Incontinência urinária",
                "Disfunções da bexiga",
                "Vasectomia e reversão de vasectomia",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#8899aa]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ab8d9] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setShowUnidade(true)}
              className="bg-[#1a6fa8] hover:bg-[#1a5f94] text-[#e8f3fb] text-sm font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Agendar consulta
            </button>
          </div>

        </div>
      </main>

      {showUnidade && <ModalUnidade onClose={() => setShowUnidade(false)} />}
    </>
  )
}
