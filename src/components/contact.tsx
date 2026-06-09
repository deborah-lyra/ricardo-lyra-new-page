const locais = [
    {
      nome: "Andros Recife",
      endereco: "RioMar Trade Center - Av. República do Líbano, 251 - Sala 206 - Pina, Recife - PE",
      cep: "51110-131",
      telefone: "(81) 98981-5885",
      whatsapp: "5581989815885",
      maps: "https://maps.google.com/?q=RioMar+Trade+Center+Av+República+do+Líbano+251+Recife",
    },
    {
      nome: "Centro Clínico Stevam Rios",
      endereco: "R. Melo Verçosa, 306 - Matriz, Vitória de Santo Antão - PE",
      cep: "55602-020",
      telefone: "(81) 98213-7885",
      whatsapp: "5581982137885",
      maps: "https://maps.google.com/?q=R+Melo+Verçosa+306+Vitória+de+Santo+Antão+PE",
    },
  ]
  
  export function Contacts() {
    return (
      <section id="contato" className="bg-[#0a1628] py-20 px-6">
        <div className="max-w-4xl mx-auto">
  
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#2d7aaa]/20 border border-[#2d7aaa]/40 text-[#7ab8d9] text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-3xl font-medium text-[#f0f4f8] mb-3">Locais de atendimento</h2>
            <p className="text-[#8899aa] text-sm max-w-sm mx-auto leading-relaxed">
              Atendimento em duas unidades na região de Pernambuco.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locais.map((local) => (
              <div
                key={local.nome}
                className="bg-[#0f2137] border border-[#1e3a55] rounded-2xl p-7 flex flex-col gap-5"
              >
                {/* Nome */}
                <div>
                  <h3 className="text-base font-medium text-[#f0f4f8] mb-1">{local.nome}</h3>
                  <p className="text-xs text-[#8899aa] leading-relaxed">{local.endereco}</p>
                  <p className="text-xs text-[#8899aa]">CEP {local.cep}</p>
                </div>
  
                <div className="border-t border-[#1e3a55]" />
  
                {/* Telefone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2d7aaa]/20 flex items-center justify-center text-[#7ab8d9] flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#8899aa]">Telefone</p>
                    <a href={`tel:${local.telefone}`} className="text-sm text-[#f0f4f8] hover:text-[#7ab8d9] transition-colors">
                      {local.telefone}
                    </a>
                  </div>
                </div>
  
                {/* Botões */}
                <div className="flex gap-3 mt-1">
                  <a
                    href={`https://wa.me/${local.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#1a6fa8] hover:bg-[#1a5f94] text-[#e8f3fb] text-xs font-medium py-2.5 rounded-lg transition-colors text-center"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={local.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#2d6a9f] text-[#7ab8d9] hover:bg-[#2d6a9f]/20 text-xs py-2.5 rounded-lg transition-colors text-center"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  