export default function SiteFooter() {
  return (
    <footer
      className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 to-slate-100/80 px-4 py-10 text-slate-600 sm:px-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">
            Culturas indígenas de Colombia
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Proyecto divulgativo para acercar la diversidad lingüística y territorial de los pueblos indígenas del país.
            Los datos de población son <strong className="font-semibold text-slate-700">estimaciones por pueblo</strong>{' '}
            según las fichas de la aplicación; conviene contrastar con censos oficiales y fuentes comunitarias para
            trabajo académico o político.
          </p>
        </div>
        <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xs leading-relaxed text-slate-500">
            Mapa por <strong className="font-medium text-slate-600">regiones culturales naturales</strong> (no
            coincide con divisiones administrativas únicamente). Usa la leyenda fija, el panel lateral y la biblioteca
            para no perderte.
          </p>
          <p className="shrink-0 text-xs font-medium text-slate-500">
            94 pueblos · 6 regiones · Lenguas y territorios
          </p>
        </div>
      </div>
    </footer>
  );
}
