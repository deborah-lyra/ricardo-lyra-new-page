export function Hero() {
    return (
      <section className="relative min-h-[40rem] bg-[#0a1628] overflow-hidden">
  
        <div className="absolute top-6 right-6 z-10 bg-white/5 border border-white/10 text-[#7ab8d9] text-xs px-3 py-1.5 rounded-md">
          CRM/PE 9981
        </div>
  
        <div className="flex flex-col md:flex-row items-center justify-between h-full max-w-6xl mx-auto px-8 min-h-[40rem]">
  
          {/* Texto — lado esquerdo */}
          <div className="flex flex-col items-center md:items-start justify-center p-8 py-16">
            <div className="inline-flex items-center gap-2 bg-[#2d7aaa]/20 border border-[#2d7aaa]/40 text-[#7ab8d9] text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Atendimento disponível
            </div>
  
            <h1 className="text-4xl lg:text-6xl font-medium text-[#f0f4f8] mb-2">
              Dr. Ricardo Lyra
            </h1>
  
            <p className="text-[#7ab8d9] lg:text-2xl text-base mb-4">
              Urologista · Andrologista
            </p>
  
            <p className="text-[#8899aa] lg:text-lg text-center md:text-start text-sm leading-relaxed mb-8 max-w-sm">
              Mais de 30 anos cuidando de corações com dedicação, tecnologia e humanidade.
            </p>
  
            <div className="flex items-center md:items-start ">
              <a
                href="#sobre"
                className="lg:text-lg border border-[#2d6a9f] text-[#7ab8d9] hover:bg-[#2d6a9f]/20 text-sm px-6 py-2.5 rounded-lg transition-colors"
              >
                Saiba mais
              </a>
            </div>
          </div>
  
          {/* Foto — lado direito */}
          <div className="flex items-end justify-center px-8 h-full">
            <div className="w-[380px] h-[480px] lg:h-[600px] rounded-t-[140px] bg-gradient-to-b from-[#1a3a5c] via-[#1e4976] to-[#0a1628] overflow-hidden flex items-end justify-center">
              <img
                src="/foto-medico.png"
                alt="Dr. João Silva"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
  
        </div>
      </section>
    )
  }
  