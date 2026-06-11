export function AboutMe() {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.097.04A24.3 24.3 0 0121 12.75V9.75a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9.75v3a24.3 24.3 0 006.046 3.013l.097-.04a2.25 2.25 0 001.357-2.059V3.104z" />
        </svg>
      ),
      title: "Cirurgia peniana",
      desc: "Atuação no departamento de cirurgia peniana do HGV, com expertise em procedimentos complexos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0" />
        </svg>
      ),
      title: "Andrologia",
      desc: "Coordenador do Serviço de Andrologia do Hospital Getúlio Vargas, referência em saúde sexual masculina.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      title: "Urologia hospitalar",
      desc: "Coordenador de urologia no Hospital Esperança Olinda – Rede D'Or.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Formação médica",
      desc: "Preceptor de residência médica, contribuindo com a formação de novos especialistas.",
    },
  ]

  const lista = [
    "Médico formado pela UPE em 1991, com residência em Urologia no Hospital Getúlio Vargas – Recife.",
    "Formação em Andrologia pelo Instituto H. Ellis – São Paulo.",
    "Membro titular da Sociedade Brasileira de Urologia e da ABEMSS.",
    "Preceptor de residência médica e coordenador do Serviço de Andrologia do HGV.",
    "Coordenador do Serviço de Urologia do Hospital Esperança Olinda – Rede D'Or.",
  ]

  return (
    <section id="aboutMe" className="bg-slate-200 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        <div>
          {/* Texto — esquerda */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Sobre Mim
            </span>

            <h2 className="text-3xl text-[#0a1628] font-bold mb-1">Dr. Ricardo Lyra</h2>
            <p className="text-blue-600 text-sm mb-6">Urologista · Andrologista · CRM/PE 9981</p>

            <ul className="flex flex-col gap-4 mb-8">
              {lista.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-8 pt-6 border-t border-gray-100">
              <div>
                <p className="text-2xl font-medium text-[#0a1628]">30+</p>
                <p className="text-xs text-gray-400 mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-2xl font-medium text-[#0a1628]">1991</p>
                <p className="text-xs text-gray-400 mt-1">Ano de formação</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards — direita */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 mb-1">{card.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
