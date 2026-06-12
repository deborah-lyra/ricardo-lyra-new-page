

export function Footer() {
  return (
    <footer className="bg-slate-200 border-t border-slate-200 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">

        {/* Logo */}
        <div className="flex-shrink-0 ">
          <img src="/logo.svg" alt="Logo Dr. Ricardo Lyra" width={80} height={80} className='rounded-xl'/>
        </div>

        {/* Info central */}
        <div className="text-center sm:text-left">
          <p className="font-bold text-2xl text-[#0a1628]">Dr. Ricardo Lyra</p>
          <p className="text-lg text-slate-800 mt-1">Urologista · Andrologista · CRM/PE 9981</p>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/ricardolyraandrologista/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-[#2d7aaa]/20 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-800 hover:text-blue-600 transition-all"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://br.linkedin.com/in/ricardo-lyra-b937b531"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-[#2d7aaa]/20 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-800 hover:text-blue-600 transition-all"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/ricardo.andrologista/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-[#2d7aaa]/20 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-800 hover:text-blue-600 transition-all"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-300 text-center">
        <p className="text-xs text-slate-800">
          © {new Date().getFullYear()} Dr. Ricardo Lyra · Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
