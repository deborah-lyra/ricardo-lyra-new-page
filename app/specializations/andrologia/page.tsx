"use client"
import { ModalUnidade } from '@/src/components/modalUnidade'
import { useState } from 'react'

export default function Andrology() {
  const [showUnidade, setShowUnidade] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-[#0a1628] px-6 py-20">
        <div className="max-w-3xl mx-auto">

          <div className="flex justify-center mb-8">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 opacity-80">
              <ellipse cx="32" cy="18" rx="10" ry="12" stroke="#7ab8d9" strokeWidth="2" />
              <ellipse cx="32" cy="18" rx="4" ry="5" fill="#7ab8d9" opacity="0.4" />
              <path d="M22 22 Q8 32 10 48" stroke="#7ab8d9" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 48 Q4 54 8 60" stroke="#7ab8d9" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 48 Q16 56 12 62" stroke="#7ab8d9" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#2d7aaa]/20 border border-[#2d7aaa]/40 text-[#7ab8d9] text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Especialização
            </span>
            <h1 className="text-4xl font-medium text-[#f0f4f8] mb-3">Andrologia</h1>
            <p className="text-[#7ab8d9] text-base">Saúde sexual e reprodutiva masculina</p>
          </div>

          <div className="bg-[#0f2137] border border-[#1e3a55] rounded-2xl p-8 mb-6">
            <h2 className="text-lg font-medium text-[#f0f4f8] mb-4">O que é Andrologia?</h2>
            <p className="text-[#8899aa] text-sm leading-relaxed mb-4">
              A Andrologia é a especialidade médica dedicada à saúde sexual e reprodutiva masculina.
              O andrologista é o especialista responsável pelo diagnóstico e tratamento das disfunções
              que afetam o sistema reprodutor masculino, atuando em parceria com outras especialidades
              quando necessário.
            </p>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              É uma área que envolve aspectos físicos, hormonais e emocionais, exigindo uma abordagem
              humanizada e multidisciplinar do paciente.
            </p>
          </div>

          <div className="bg-[#0f2137] border border-[#1e3a55] rounded-2xl p-8 mb-6">
            <h2 className="text-lg font-medium text-[#f0f4f8] mb-4">Condições tratadas</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Disfunção erétil",
                "Infertilidade masculina",
                "Hipogonadismo (baixa testosterona)",
                "Ejaculação precoce",
                "Doença de Peyronie (curvatura peniana)",
                "Cirurgia peniana reconstrutiva",
                "Saúde sexual do homem idoso",
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
