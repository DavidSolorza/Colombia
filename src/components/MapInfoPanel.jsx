import { useMemo } from 'react';
import { ethnicities, regions } from '../data/ethnicities';

export default function MapInfoPanel({ className = '' }) {
  const stats = useMemo(() => {
    const totalPop = ethnicities.reduce((acc, e) => acc + (Number(e.population) || 0), 0);
    const languageFamilies = new Set(ethnicities.map((e) => e.languageFamily).filter(Boolean)).size;
    const languages = new Set(ethnicities.map((e) => e.language).filter(Boolean)).size;
    return {
      pueblos: ethnicities.length,
      regiones: regions.length,
      totalPop,
      languageFamilies,
      languages
    };
  }, []);

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
          <p className="text-[0.55rem] font-bold uppercase leading-tight tracking-[0.1em] text-emerald-700/90 sm:text-[0.6rem]">
            Culturas indígenas de Colombia
          </p>
          <h2 id="map-info-heading" className="text-lg font-bold tracking-tight text-slate-900">
            Sobre este mapa
          </h2>
          <p className="mt-1 text-sm font-medium text-emerald-800/90">Pueblos indígenas por región natural</p>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2.5 sm:gap-3">
        <div className="rounded-xl border border-emerald-100/90 bg-white/80 px-3 py-2.5 shadow-sm">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">Pueblos</p>
          <p className="mt-0.5 text-xl font-black tabular-nums text-emerald-800">{stats.pueblos}</p>
        </div>
        <div className="rounded-xl border border-emerald-100/90 bg-white/80 px-3 py-2.5 shadow-sm">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">Regiones</p>
          <p className="mt-0.5 text-xl font-black tabular-nums text-emerald-800">{stats.regiones}</p>
        </div>
        <div className="rounded-xl border border-emerald-100/90 bg-white/80 px-3 py-2.5 shadow-sm">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">Población ∑</p>
          <p className="mt-0.5 text-lg font-black tabular-nums leading-tight text-emerald-800">
            {stats.totalPop >= 1_000_000
              ? `${(stats.totalPop / 1_000_000).toFixed(1).replace('.', ',')} M`
              : stats.totalPop.toLocaleString('es-CO')}
          </p>
          <p className="mt-0.5 text-[0.6rem] leading-tight text-slate-500">estimada en fichas</p>
        </div>
        <div className="rounded-xl border border-emerald-100/90 bg-white/80 px-3 py-2.5 shadow-sm">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">Lenguas · familias</p>
          <p className="mt-0.5 text-lg font-black tabular-nums text-emerald-800">
            {stats.languages}
            <span className="text-sm font-bold text-slate-400"> · </span>
            {stats.languageFamilies}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-slate-600">
        <strong className="font-semibold uppercase tracking-wide text-slate-800">
          Culturas indígenas de Colombia
        </strong>{' '}
        reúne un mapa y una biblioteca para acercar la
        diversidad indígena del país: puedes ver <strong className="font-semibold text-slate-800">dónde viven</strong>{' '}
        los pueblos, <strong className="font-semibold text-slate-800">cuántas personas</strong> se estiman por grupo,
        y <strong className="font-semibold text-slate-800">lengua, familia lingüística y macroregión</strong>. El
        objetivo es visibilizar datos básicos y abrir la puerta a profundizar en historias, lenguas y territorios.
      </p>

      <h3 className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Cómo moverte</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Pasa el cursor</strong> sobre una región: verás un resumen
            con pueblos, departamentos, población sumada, familias lingüísticas y un texto corto sobre el territorio.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Haz clic</strong> en el mapa o en la leyenda fija para
            abrir la región: allí aparecen todos los pueblos de esa zona con acceso a cada ficha.
          </span>
        </li>
      </ul>

      <h3 className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Qué vas a encontrar</h3>
      <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Seis regiones culturales naturales</strong> (Amazonía
            norte y sur, Andina sur, Pacífico, Andina norte / Caribe, Llanos): agrupan departamentos según afinidades
            geográficas y culturales usadas en la app, no solo límites administrativos.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">94 pueblos en fichas</strong>: al abrir una región verás la
            lista completa de la zona; desde ahí entras al detalle de cada uno.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Contenido ampliado</strong> cuando hay texto: otros nombres,
            ubicación, población con fuente, cultura, economía, tradiciones y artesanías.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>
            <strong className="font-semibold text-slate-900">Biblioteca</strong> en el menú: búsqueda, filtros por
            región y estado de la lengua, y orden alfabético o por población.
          </span>
        </li>
      </ul>

      <div className="mt-5 rounded-xl border border-amber-200/70 bg-amber-50/60 px-3.5 py-3 text-xs leading-relaxed text-amber-950/90">
        <strong className="font-semibold text-amber-900">Nota sobre los números:</strong> la población total del panel es
        la suma de las estimaciones de cada ficha; no sustituye censos ni diagnósticos oficiales. Para investigación o
        políticas públicas, contrasta siempre con fuentes estatales y con los propios pueblos.
      </div>
    </aside>
  );
}
