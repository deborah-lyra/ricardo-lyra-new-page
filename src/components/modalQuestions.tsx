"use client"
import { useState } from 'react';
import { ModalUnidade } from './modalUnidade';


const questions = [
  {
    text: "Com que frequência você consegue uma ereção durante a atividade sexual?",
    options: ["Não tentei ter relação sexual", "Quase nunca / Nunca", "Poucas vezes", "Algumas vezes", "Na maioria das vezes", "Quase sempre / Sempre"],
  },
  {
    text: "Quando você tem ereções após estímulo sexual, com que frequência suas ereções são suficientemente rígidas para penetração?",
    options: ["Nenhuma atividade sexual", "Quase nunca / Nunca", "Poucas vezes", "Algumas vezes", "Na maioria das vezes", "Quase sempre / Sempre"],
  },
  {
    text: "Quando você tentou ter uma relação sexual, com que frequência você conseguiu penetrar sua companheira?",
    options: ["Não tentei ter relação sexual", "Quase nunca / Nunca", "Poucas vezes", "Algumas vezes", "Na maioria das vezes", "Quase sempre / Sempre"],
  },
  {
    text: "Durante a relação sexual, com que frequência você consegue manter a ereção depois de ter penetrado sua companheira?",
    options: ["Não tentei ter relação sexual", "Quase nunca / Nunca", "Poucas vezes", "Algumas vezes", "Na maioria das vezes", "Quase sempre / Sempre"],
  },
  {
    text: "Durante a relação sexual, qual seu grau de dificuldade para manter a ereção até completar a relação sexual?",
    options: ["Não tentei ter relação sexual", "Extremamente difícil", "Muito difícil", "Difícil", "Um pouco difícil", "Não é difícil"],
  },
  {
    text: "Qual seu grau de confiança de que você pode conseguir manter uma ereção?",
    options: ["Não tentei ter relação sexual", "Muito baixo", "Baixo", "Moderado", "Alto", "Muito alto"],
  },
]

const getResult = (score: number) => {
  if (score >= 26) return { label: "Normal", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" }
  if (score >= 22) return { label: "Disfunção leve", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" }
  if (score >= 17) return { label: "Disfunção leve a moderada", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" }
  if (score >= 11) return { label: "Disfunção moderada", color: "text-orange-600", bg: "bg-orange-50 border-orange-200" }
  if (score >= 6)  return { label: "Disfunção grave", color: "text-red-600", bg: "bg-red-50 border-red-200" }
  return { label: "-", color: "text-slate-400", bg: "bg-slate-50 border-slate-200" }
}

export function ModalQuestions({ closeModal }: { closeModal: () => void }) {
  const [answers, setAnswers] = useState<number[]>(Array(6).fill(-1))
  const [showUnidade, setShowUnidade] = useState(false)

  const handleOptionClick = (questionIndex: number, value: number) => {
    const updated = [...answers]
    updated[questionIndex] = value
    setAnswers(updated)
  }

  const answered = answers.filter(a => a >= 0).length
  const totalScore = answers.filter(a => a >= 0).reduce((sum, v) => sum + v, 0)
  const allAnswered = answered === 6
  const result = getResult(totalScore)

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-start justify-between gap-4 rounded-t-2xl">
            <div>
              <p className="text-xs text-blue-600 uppercase tracking-widest mb-1">Autoavaliação</p>
              <h2 className="text-base font-medium text-[#0a1628] leading-snug">
                Índice Internacional de Função Erétil (IIFE)
              </h2>
            </div>
            <button
              onClick={closeModal}
              className="flex-shrink-0 w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progresso */}
          <div className="px-6 pt-4">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>{answered} de 6 respondidas</span>
              <span>{answered}/6</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(answered / 6) * 100}%` }}
              />
            </div>
          </div>

          {/* Perguntas */}
          <div className="px-6 py-5 flex flex-col gap-6">
            {questions.map((q, qi) => (
              <div key={qi}>
                <p className="text-sm font-medium text-[#0a1628] mb-3 leading-relaxed">
                  <span className="text-blue-500 mr-1">{qi + 1}.</span>{q.text}
                </p>
                <div className="flex flex-col gap-1.5">
                  {q.options.map((opt, vi) => (
                    <button
                      key={vi}
                      onClick={() => handleOptionClick(qi, vi)}
                      className={`text-left text-xs px-4 py-2.5 rounded-lg border transition-all duration-150 ${
                        answers[qi] === vi
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <span className={`font-medium mr-2 ${answers[qi] === vi ? 'text-blue-200' : 'text-slate-400'}`}>{vi}</span>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Resultado */}
            {allAnswered && (
              <div className={`border rounded-xl p-5 ${result.bg}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Resultado</p>
                  <p className="text-xs text-slate-500">Pontuação: <span className="font-medium text-slate-700">{totalScore}</span></p>
                </div>
                <p className={`text-lg font-medium ${result.color}`}>{result.label}</p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Em caso de dúvidas ou se o resultado indicar alguma disfunção, recomendamos agendar uma consulta com o Dr. Ricardo Lyra.
                </p>
                <button
                  onClick={() => setShowUnidade(true)}
                  className="mt-4 inline-block bg-[#1a6fa8] hover:bg-[#1a5f94] text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-colors"
                >
                  Agendar consulta
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Modal de seleção de unidade */}
      {showUnidade && (
        <ModalUnidade onClose={() => setShowUnidade(false)} />
      )}
    </>
  )
}
