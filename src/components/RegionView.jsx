import { motion, AnimatePresence } from 'framer-motion';
import { departments, getEthnicityByRegion } from '../data/ethnicities';
import EthnicityCard from './EthnicityCard';

export default function RegionView({ region, onClose, onEthnicityClick }) {
  if (!region) return null;

  const regionDepartments = departments.filter((d) => d.region === region.id);
  const regionEthnicities = getEthnicityByRegion(region.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[55] flex items-center justify-center bg-slate-900/65 p-3 pb-6 pt-[max(0.75rem,env(safe-area-inset-top,0px))] backdrop-blur-md sm:p-5 sm:pb-8"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="region-modal-title"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative flex max-h-[min(76dvh,calc(100dvh-5rem))] w-full max-w-[min(100%,42rem)] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_25px_80px_-12px_rgba(15,23,42,0.35)] ring-1 ring-white/60 sm:max-h-[min(78dvh,calc(100dvh-5.5rem))] md:max-w-5xl lg:max-w-6xl xl:max-w-[76rem] 2xl:max-w-[82rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-600 shadow-md backdrop-blur-sm transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-900 sm:right-4 sm:top-4"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <header className="relative shrink-0 overflow-hidden border-b border-slate-100 px-5 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-7">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-[0.18] blur-3xl sm:h-64 sm:w-64"
              style={{ background: region.color }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${region.color}, ${region.color}88, transparent)`
              }}
            />
            <p className="relative text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              Región natural
            </p>
            <h2
              id="region-modal-title"
              className="relative mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-[1.85rem] lg:leading-snug"
              style={{ color: region.color }}
            >
              {region.name}
            </h2>
            <p className="relative mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {region.description}
            </p>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-8 sm:py-5">
            <section className="mb-7 sm:mb-8">
              <h3 className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 sm:mb-4 sm:text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 sm:h-9 sm:w-9 sm:rounded-xl">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 21v-6h6v6" />
                  </svg>
                </span>
                Departamentos
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold normal-case tracking-normal text-slate-600">
                  {regionDepartments.length}
                </span>
              </h3>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {regionDepartments.map((dept) => {
                  const deptEthnicities = regionEthnicities.filter((e) => e.departments.includes(dept.name));
                  return (
                    <div
                      key={dept.id}
                      className="rounded-xl border border-slate-200/90 bg-gradient-to-b from-slate-50/90 to-white p-3 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md sm:rounded-2xl sm:p-3.5"
                    >
                      <h4 className="text-sm font-semibold text-slate-900 sm:text-base">{dept.name}</h4>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600 sm:mt-2.5 sm:gap-3 sm:text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                          {dept.population.toLocaleString()}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {deptEthnicities.length} etnias
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h3 className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 sm:mb-4 sm:text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 sm:h-9 sm:w-9 sm:rounded-xl">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Pueblos indígenas
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold normal-case tracking-normal text-slate-600">
                  {regionEthnicities.length}
                </span>
              </h3>
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {regionEthnicities.map((ethnicity) => (
                  <EthnicityCard
                    key={ethnicity.id}
                    ethnicity={ethnicity}
                    onClick={() => onEthnicityClick(ethnicity)}
                  />
                ))}
              </div>
            </section>
          </div>

          <footer className="shrink-0 border-t border-slate-100 bg-slate-50/80 px-5 py-3 sm:px-8">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-800 sm:w-auto"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver al mapa
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
