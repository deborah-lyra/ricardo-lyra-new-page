import Link from 'next/link'

const specializations = [
  {
    slug: 'andrologia',
    titulo: 'Andrologia',
    descricao: 'Saúde sexual e reprodutiva masculina, disfunção erétil, infertilidade e muito mais.',
    icone: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        {/* Cabeça */}
        <ellipse cx="32" cy="18" rx="10" ry="12" stroke="#7ab8d9" strokeWidth="2" />
        {/* Núcleo */}
        <ellipse cx="32" cy="18" rx="4" ry="5" fill="#7ab8d9" opacity="0.4" />
        {/* Cauda principal */}
        <path d="M22 22 Q8 32 10 48" stroke="#7ab8d9" strokeWidth="2" strokeLinecap="round" />
        {/* Flagelo lateral 1 */}
        <path d="M10 48 Q4 54 8 60" stroke="#7ab8d9" strokeWidth="1.5" strokeLinecap="round" />
        {/* Flagelo lateral 2 */}
        <path d="M10 48 Q16 56 12 62" stroke="#7ab8d9" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'urologia',
    titulo: 'Urologia',
    descricao: 'Diagnóstico e tratamento de doenças do trato urinário masculino e feminino.',
    icone: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        {/* Corpo da bexiga */}
        <path
          d="M20 28 C16 28 12 32 12 38 C12 48 20 56 32 56 C44 56 52 48 52 38 C52 32 48 28 44 28 C42 20 38 14 32 14 C26 14 22 20 20 28 Z"
          stroke="#7ab8d9" strokeWidth="2" fill="none"
        />
        {/* Uretra */}
        <path d="M32 56 L32 62" stroke="#7ab8d9" strokeWidth="2" strokeLinecap="round" />
        {/* Detalhe interno */}
        <ellipse cx="32" cy="38" rx="8" ry="7" stroke="#7ab8d9" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
]

export function Specialization() {
  return (
    <section className="bg-[#0a1628] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-bold inline-flex items-center gap-2 bg-[#2d7aaa]/20 border border-[#2d7aaa]/40 text-[#7ab8d9] text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
          Especializações
        </span>
        <h2 className="text-3xl font-medium text-[#f0f4f8] mb-3">Áreas de atuação</h2>
        <p className="text-[#8899aa] text-sm max-w-md mx-auto">
          Atendimento especializado com mais de 30 anos de experiência nas áreas de urologia e andrologia.
        </p>
      </div>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {specializations.map((esp) => (
          <Link
            key={esp.slug} 
            href={`/specializations/${esp.slug}`}
            className="group bg-[#0f2137] border border-[#1e3a55] hover:border-[#2d7aaa] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-200 hover:bg-[#112540]"
          >
            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              {esp.icone}
            </div>
            <h3 className="text-lg font-medium text-[#f0f4f8] mb-2">{esp.titulo}</h3>
            <p className="text-sm text-[#8899aa] leading-relaxed mb-5">{esp.descricao}</p>
            <span className="text-xs text-[#7ab8d9] border border-[#2d6a9f] px-4 py-1.5 rounded-lg group-hover:bg-[#2d6a9f]/20 transition-colors">
              Saiba mais →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
