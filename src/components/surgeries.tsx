const surgeries = [
    {
      name: "Doppler Peniano",
      description: "Exame de ultrassom para avaliar o fluxo sanguíneo peniano e diagnosticar disfunções vasculares.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          <path d="M8 12h4l2-4 2 8 2-4h2" />
        </svg>
      ),
    },
    {
      name: "Engrossamento Peniano",
      description: "Procedimento estético que visa aumentar a circunferência peniana, utilizando técnicas variadas para resultados personalizados.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M12 5v14M5 12h14" />
        </svg>
      ),
    },
    {
      name: "Reversão de Vasectomia",
      description: "Cirurgia que reconecta os ductos deferentes, restaurando a fertilidade após uma vasectomia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      name: "Tratamento da Curvatura Peniana",
      description: "Correção cirúrgica da curvatura peniana causada pela doença de Peyronie, melhorando a função sexual.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M3 12c0-4 6-9 9-4s6 8 9 4" />
        </svg>
      ),
    },
    {
      name: "Implante de Prótese Peniana",
      description: "Implante cirúrgico de próteses para tratar disfunção erétil, com opções rígidas ou infláveis.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <rect x="3" y="8" width="18" height="8" rx="4" />
          <path d="M7 12h10" />
        </svg>
      ),
    },
    {
      name: "Captação de Espermatozóide (PESA)",
      description: "Procedimento de extração de espermatozoides do epidídimo para uso em fertilização assistida.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <ellipse cx="12" cy="8" rx="4" ry="5" />
          <path d="M8 11Q4 15 5 20" />
          <path d="M5 20Q3 22 4 23" />
          <path d="M5 20Q7 22 6 23" />
        </svg>
      ),
    },
    {
      name: "Microdissecção Testicular",
      description: "Técnica avançada para recuperar espermatozoides diretamente do tecido testicular em casos de azoospermia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
        </svg>
      ),
    },
    {
      name: "Estética Genital",
      description: "Procedimentos cosméticos para melhorar a aparência e função dos órgãos genitais, personalizando resultados.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
        </svg>
      ),
    },
    {
      name: "Varicocele Microcirúrgica",
      description: "Procedimento minimamente invasivo para tratar varicocele, melhorando a fertilidade masculina.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <circle cx="8" cy="16" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M8 13V7a4 4 0 018 0v6" />
        </svg>
      ),
    },
  ]
  
  export function Surgeries() {
    return (
      <section id="surgeries" className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Procedimentos
            </span>
            <h2 className="text-3xl font-medium text-[#0a1628] mb-3">Cirurgias</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
              Com vasta experiência em urologia e andrologia, ofereço procedimentos cirúrgicos avançados,
              personalizados para atender às necessidades de cada paciente, garantindo segurança e resultados satisfatórios.
            </p>
          </div>
  
        </div>
  
        <div className="px-6 sm:px-6 sm:max-w-6xl sm:mx-auto">
          {/* Mobile: scroll horizontal */}
          <div className="flex gap-4 overflow-x-auto pb-4 sm:hidden snap-x snap-mandatory scrollbar-hide">
            {surgeries.map((item) => (
              <div
                key={item.name}
                className="snap-start flex-shrink-0 w-64 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#0a1628] mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Desktop: grid normal */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surgeries.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#0a1628] mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
    
        <div className="text-center mt-12 px-6">
          <a
            href="https://wa.me/5581999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a6fa8] hover:bg-[#1a5f94] text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Agendar consulta
          </a>
        </div>
  
      </section>
    )
  }
  