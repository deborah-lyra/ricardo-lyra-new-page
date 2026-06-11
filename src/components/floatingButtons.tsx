"use client"

export function FloatingButtons({ openQuestionnaire }: { openQuestionnaire: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">

      {/* Botão teste erétil */}
      <button
        onClick={openQuestionnaire}
        className="group flex items-center gap-3 bg-[#1a6fa8] hover:bg-[#1a5f94] text-white text-xs font-medium px-4 py-3 rounded-full shadow-lg transition-all duration-200"
      >
        <span className="hidden group-hover:inline whitespace-nowrap transition-all">
          Teste sua função erétil
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      </button>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5581989815885"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium px-4 py-3 rounded-full shadow-lg transition-all duration-200"
      >
        <span className="hidden group-hover:inline whitespace-nowrap transition-all">
          Fale no WhatsApp
        </span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.847L.057 23.882l6.197-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.866 9.866 0 01-5.031-1.378l-.36-.214-3.732.872.937-3.463-.235-.375A9.855 9.855 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
        </svg>
      </a>

    </div>
  )
}
