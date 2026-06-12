export function Hero() {
  return (
    <section className="relative min-h-[40rem] bg-[#0a1628] overflow-hidden">

      {/* CRM badge */}
      <div className="absolute top-6 right-6 z-10 bg-white/5 border border-white/10 text-[#7ab8d9] text-xs px-3 py-1.5 rounded-md">
        CRM/PE 9981
      </div>

      {/* Foto — mobile: fundo completo / desktop: metade direita */}
      <div className="absolute inset-0 md:left-1/2 md:inset-y-0 md:right-0">
        <img
          src="/foto-medico.png"
          alt="Dr. Ricardo Lyra"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay mobile */}
        <div className="absolute inset-0 bg-[#0a1628]/70 md:hidden" />
        {/* Gradiente desktop  */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a1628] to-transparent" />
        {/* Gradiente base  */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a1628] to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-center min-h-[40rem] max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-start max-w-lg">

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

          <p className="text-[#8899aa] lg:text-lg text-sm leading-relaxed mb-8 max-w-sm">
            Mais de 30 anos cuidando de pacientes com dedicação, tecnologia e humanidade.
          </p>

          <a
            href="#sobre"
            className="lg:text-lg border border-[#2d6a9f] text-[#7ab8d9] hover:bg-[#2d6a9f]/20 text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Saiba mais
          </a>

        </div>
      </div>

    </section>
  )
}
