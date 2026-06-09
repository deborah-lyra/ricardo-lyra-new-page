"use client"

const unidades = [
  {
    nome: "Andros Recife",
    endereco: "RioMar Trade Center - Av. República do Líbano, 251 - Sala 206, Pina",
    cidade: "Recife - PE",
    whatsapp: "5581989815885",
  },
  {
    nome: "Centro Clínico Stevam Rios",
    endereco: "R. Melo Verçosa, 306 - Matriz",
    cidade: "Vitória de Santo Antão - PE",
    whatsapp: "5581982137885",
  },
]

export function ModalUnidade({ onClose }: { onClose: () => void }) {
  const handleSelect = (whatsapp: string) => {
    window.open(`https://wa.me/${whatsapp}`, "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm">

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-blue-600 uppercase tracking-widest mb-0.5">Agendamento</p>
            <h3 className="text-sm font-medium text-[#0a1628]">Escolha a unidade</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Unidades */}
        <div className="p-4 flex flex-col gap-3">
          {unidades.map((u) => (
            <button
              key={u.nome}
              onClick={() => handleSelect(u.whatsapp)}
              className="w-full text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl p-4 flex items-center gap-4 transition-all duration-150 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#0a1628] mb-0.5">{u.nome}</p>
                <p className="text-xs text-slate-500 truncate">{u.endereco}</p>
                <p className="text-xs text-blue-500">{u.cidade}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-300 group-hover:text-blue-400 flex-shrink-0 transition-colors">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 pb-5">
          Você será redirecionado para o WhatsApp
        </p>

      </div>
    </div>
  )
}
