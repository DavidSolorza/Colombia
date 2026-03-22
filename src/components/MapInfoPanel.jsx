export default function MapInfoPanel({ className = '' }) {
  return (
    <aside
      className={`rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50/40 to-sky-50/50 p-5 shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.04] sm:p-6 ${className}`}
      aria-labelledby="map-info-heading"
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </span>
        <div>
          <h2 id="map-info-heading" className="text-lg font-bold tracking-tight text-slate-900">
            Culturas de Colombia
          </h2>
          <p className="mt-1 text-sm font-medium text-emerald-800/90">Mapa interactivo de pueblos indígenas</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-slate-600">
        Esta página es un acercamiento a la diversidad indígena del país: puedes explorar{' '}
        <strong className="font-semibold text-slate-800">dónde viven</strong> distintos pueblos,{' '}
        <strong className="font-semibold text-slate-800">cuántas personas</strong> se estiman por grupo y{' '}
        <strong className="font-semibold text-slate-800">qué lengua y macroregión</strong> les corresponden en la
        aplicación. El objetivo es visibilizar datos básicos y abrir la puerta a profundizar en historias, lenguas y
        territorios.
      </p>

      <h3 className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Qué vas a encontrar</h3>
      <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Mapa por macroregiones</strong> (Caribe, Andina, Pacífico,
            Amazonía, Orinoquía): pasa el cursor para ver cuántos pueblos hay y la población sumada; haz clic para abrir
            el detalle de la región.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Pueblos por región</strong>: al abrir una macroregión verás
            la lista de los <strong>94 pueblos</strong> que la app incluye; desde ahí puedes abrir la ficha de cada uno.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Fichas ampliadas</strong> cuando hay texto disponible:
            otros nombres, ubicación detallada, población con fuente, lengua, cultura, economía, tradiciones y artesanías.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Biblioteca</strong> en el menú superior: lista completa,
            búsqueda y acceso rápido a cada pueblo sin usar solo el mapa.
          </span>
        </li>
      </ul>
    </aside>
  );
}
