import { motion, AnimatePresence } from 'framer-motion';
import { departments, getEthnicityByRegion } from '../data/ethnicities';
import EthnicityCard from './EthnicityCard';

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.08 }
  }
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 28 } }
};

const cardGrid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.12 }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 360, damping: 26 } }
};

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
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[55] flex items-start justify-center overflow-y-auto overscroll-contain bg-gradient-to-b from-slate-950/80 via-slate-900/75 to-emerald-950/50 px-3 pb-10 pt-[max(1rem,calc(6.75rem+env(safe-area-inset-top,0px)))] backdrop-blur-xl sm:px-6 sm:pb-12 sm:pt-[max(1rem,calc(7rem+env(safe-area-inset-top,0px)))]"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="region-modal-title"
          initial={{ opacity: 0, scale: 0.92, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 24, stiffness: 320 }}
          className="relative flex max-h-[min(64dvh,calc(100dvh-8rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px)))] w-full max-w-[min(100%,48rem)] flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/40 sm:max-h-[min(66dvh,calc(100dvh-8.25rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px)))] md:max-w-5xl lg:max-w-6xl xl:max-w-[76rem] 2xl:max-w-[84rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
            style={{
              background: `linear-gradient(90deg, ${region.color}, ${region.color}99, ${region.color})`
            }}
          />

          <button
            type="button"
            className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/95 text-slate-600 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-all hover:scale-105 hover:border-slate-300 hover:bg-white hover:text-slate-900 active:scale-95 sm:right-4 sm:top-4"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <header className="relative shrink-0 overflow-hidden px-5 pb-5 pt-7 sm:px-8 sm:pb-6 sm:pt-8">
            <div
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: region.color }}
            />
            <div
              className="pointer-events-none absolute -bottom-16 left-1/4 h-40 w-40 rounded-full opacity-[0.12] blur-2xl"
              style={{ background: region.color }}
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, type: 'spring', stiffness: 280, damping: 26 }}
            >
              <p className="relative text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                Región natural
              </p>
              <h2
                id="region-modal-title"
                className="relative mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[1.9rem] lg:leading-tight"
              >
                <span style={{ color: region.color }}>{region.name}</span>
              </h2>
              <p className="relative mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {region.description}
              </p>
            </motion.div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-2 sm:px-8 sm:py-4">
            <section className="mb-8 sm:mb-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/25">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 21v-6h6v6" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 sm:text-base">
                    Departamentos
                  </h3>
                  <p className="text-xs text-slate-500 sm:text-sm">{regionDepartments.length} entidades en esta macroregión</p>
                </div>
                <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tabular-nums text-slate-700">
                  {regionDepartments.length}
                </span>
              </div>

              <motion.div
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                variants={listContainer}
                initial="hidden"
                animate="show"
              >
                {regionDepartments.map((dept) => {
                  const deptEthnicities = regionEthnicities.filter((e) => e.departments.includes(dept.name));
                  return (
                    <motion.div
                      key={dept.id}
                      variants={listItem}
                      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-4 shadow-md shadow-slate-900/[0.04] ring-1 ring-slate-100/80"
                    >
                      <div
                        className="absolute left-0 top-0 h-full w-1 rounded-l-2xl opacity-90 transition-opacity group-hover:opacity-100"
                        style={{ background: region.color }}
                      />
                      <h4 className="pl-2 text-sm font-bold text-slate-900 sm:text-base">{dept.name}</h4>
                      <div className="mt-3 flex flex-wrap gap-3 pl-2 text-xs text-slate-600 sm:text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/80 px-2 py-1 font-medium">
                          <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                          {dept.population.toLocaleString('es-CO')}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-bold text-white shadow-sm sm:text-sm"
                          style={{ background: `linear-gradient(135deg, ${region.color}, ${region.color}cc)` }}
                        >
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {deptEthnicities.length} etnias
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>

            <section>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-600/25">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 sm:text-base">
                    Pueblos indígenas
                  </h3>
                  <p className="text-xs text-slate-500 sm:text-sm">Toca una tarjeta para abrir la ficha completa</p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tabular-nums text-emerald-900">
                  {regionEthnicities.length}
                </span>
              </div>

              <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                variants={cardGrid}
                initial="hidden"
                animate="show"
              >
                {regionEthnicities.map((ethnicity) => (
                  <motion.div key={ethnicity.id} variants={cardItem} layout>
                    <EthnicityCard ethnicity={ethnicity} onClick={() => onEthnicityClick(ethnicity)} />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>

          <footer className="shrink-0 border-t border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-emerald-50/30 px-5 py-4 sm:px-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/25 transition-shadow hover:shadow-xl sm:w-auto sm:px-8"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver al mapa
            </motion.button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
