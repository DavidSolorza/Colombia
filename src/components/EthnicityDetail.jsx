import { motion, AnimatePresence } from 'framer-motion';

const statusColors = {
  Vulnerable: '#fcd34d',
  'En peligro': '#fca5a5',
  'En peligro crítico': '#fb7185'
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 340, damping: 28 } }
};

const contentContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.055, delayChildren: 0.1 }
  }
};

function googleMapsEmbedSrc(lat, lng, zoom = 13) {
  const latN = Number(lat);
  const lngN = Number(lng);
  const key = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY;
  if (key) {
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${latN},${lngN}&zoom=${zoom}`;
  }
  return `https://maps.google.com/maps?q=${latN},${lngN}&hl=es&z=${zoom}&output=embed`;
}

function googleMapsOpenUrl(lat, lng) {
  const latN = Number(lat);
  const lngN = Number(lng);
  return `https://www.google.com/maps/search/?api=1&query=${latN},${lngN}`;
}

function TextBlocks({ text, className = 'leading-relaxed text-slate-600' }) {
  if (!text) return null;
  const parts = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-3">
      {parts.map((p, i) => (
        <p key={i} className={className}>
          {p}
        </p>
      ))}
    </div>
  );
}

function SectionShell({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 p-4 shadow-sm ring-1 ring-slate-100/80 sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default function EthnicityDetail({ ethnicity, onClose }) {
  if (!ethnicity) return null;

  const statusColor = statusColors[ethnicity.status] || '#5eead4';
  const locationText = ethnicity.locationDetail || ethnicity.location;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-gradient-to-b from-slate-950/85 via-slate-900/80 to-emerald-950/40 backdrop-blur-xl"
      >
        <div
          className="flex min-h-[100dvh] w-full items-start justify-center px-3 pb-10 pt-[max(1rem,calc(6.75rem+env(safe-area-inset-top,0px)))] sm:px-6 sm:pb-12 sm:pt-[max(1rem,calc(7rem+env(safe-area-inset-top,0px)))]"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            className="relative flex max-h-[min(66dvh,calc(100dvh-8rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px)))] w-full max-w-[min(100%,44rem)] flex-col overflow-hidden rounded-3xl border border-white/25 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/30 sm:max-h-[min(68dvh,calc(100dvh-8.25rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px)))] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
              style={{
                background: `linear-gradient(90deg, ${statusColor}, ${statusColor}aa, ${statusColor})`
              }}
            />

            <button
              type="button"
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-slate-900/60 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-slate-900/80 active:scale-95 sm:right-4 sm:top-4"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-28 shrink-0 overflow-hidden sm:h-32 md:h-36">
              <img src={ethnicity.image} alt={ethnicity.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: statusColor }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, type: 'spring', stiffness: 280, damping: 24 }}
                >
                  <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
                    {ethnicity.name}
                  </h1>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-900 shadow-md sm:text-xs"
                      style={{ background: statusColor }}
                    >
                      {ethnicity.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-md sm:text-xs">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      {ethnicity.population.toLocaleString('es-CO')} personas
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6">
              <motion.div className="space-y-4 sm:space-y-5" variants={contentContainer} initial="hidden" animate="show">
                <motion.section variants={fadeUp}>
                  <SectionShell>
                    <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                        </svg>
                      </span>
                      Descripción
                    </h3>
                    <p className="leading-relaxed text-slate-600">{ethnicity.description}</p>
                  </SectionShell>
                </motion.section>

                {ethnicity.otherNames ? (
                  <motion.section variants={fadeUp}>
                    <SectionShell>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Otros nombres</h3>
                      <p className="leading-relaxed text-slate-700">{ethnicity.otherNames}</p>
                    </SectionShell>
                  </motion.section>
                ) : null}

                <motion.section variants={fadeUp}>
                  <SectionShell>
                    <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      Ubicación
                    </h3>
                    <p className="leading-relaxed text-slate-700">{locationText}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ethnicity.departments.map((dept) => (
                        <span
                          key={dept}
                          className="rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-3 py-1.5 text-xs font-semibold text-emerald-900 shadow-sm"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </SectionShell>
                </motion.section>

                {ethnicity.populationSource ? (
                  <motion.section variants={fadeUp}>
                    <SectionShell>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Población</h3>
                      <TextBlocks text={ethnicity.populationSource} className="leading-relaxed text-slate-700" />
                    </SectionShell>
                  </motion.section>
                ) : null}

                <motion.section variants={fadeUp}>
                  <SectionShell>
                    <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </span>
                      Lengua
                    </h3>
                    <p className="text-base font-semibold text-slate-900">
                      {ethnicity.language}
                      {ethnicity.languageFamily ? (
                        <span className="font-normal text-slate-600"> · familia {ethnicity.languageFamily}</span>
                      ) : null}
                    </p>
                    {ethnicity.languageDetail ? (
                      <div className="mt-3 border-t border-slate-100 pt-3">
                        <TextBlocks text={ethnicity.languageDetail} />
                      </div>
                    ) : null}
                  </SectionShell>
                </motion.section>

                {ethnicity.culture ? (
                  <motion.section variants={fadeUp}>
                    <SectionShell>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Cultura (costumbres, organización, vivienda, etc.)
                      </h3>
                      <TextBlocks text={ethnicity.culture} />
                    </SectionShell>
                  </motion.section>
                ) : null}

                {ethnicity.economy ? (
                  <motion.section variants={fadeUp}>
                    <SectionShell>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Economía</h3>
                      <TextBlocks text={ethnicity.economy} />
                    </SectionShell>
                  </motion.section>
                ) : null}

                {ethnicity.traditions?.length > 0 ? (
                  <motion.section variants={fadeUp}>
                    <SectionShell>
                      <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                          </svg>
                        </span>
                        Tradiciones
                      </h3>
                      <ul className="space-y-2.5">
                        {ethnicity.traditions.map((tradition, i) => (
                          <li key={i} className="flex gap-3 text-slate-700">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500" aria-hidden />
                            <span className="leading-relaxed">{tradition}</span>
                          </li>
                        ))}
                      </ul>
                    </SectionShell>
                  </motion.section>
                ) : null}

                {ethnicity.crafts?.length > 0 ? (
                  <motion.section variants={fadeUp}>
                    <SectionShell>
                      <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </span>
                        Artesanías
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {ethnicity.crafts.map((craft, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50/90 px-3 py-1.5 text-xs font-semibold text-amber-950 shadow-sm"
                          >
                            <svg className="h-3 w-3 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                              <line x1="7" y1="7" x2="7.01" y2="7" />
                            </svg>
                            {craft}
                          </span>
                        ))}
                      </div>
                    </SectionShell>
                  </motion.section>
                ) : null}

                <motion.section variants={fadeUp} className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-100">
                  <div className="flex items-center gap-2 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-emerald-50/30 px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm ring-1 ring-slate-100">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">Mapa</h3>
                      <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-500">Google Maps</p>
                    </div>
                  </div>
                  <div className="relative h-[150px] w-full bg-slate-200 sm:h-[170px] md:h-[190px]">
                    <iframe
                      title={`Mapa: ${ethnicity.name}`}
                      className="absolute inset-0 h-full w-full border-0"
                      src={googleMapsEmbedSrc(ethnicity.coordinates.lat, ethnicity.coordinates.lng, 12)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-600 sm:text-sm">
                      <span className="font-bold text-slate-800">Coordenadas</span>{' '}
                      <span className="tabular-nums">
                        {ethnicity.coordinates.lat.toFixed(4)}°, {ethnicity.coordinates.lng.toFixed(4)}°
                      </span>
                    </p>
                    <motion.a
                      href={googleMapsOpenUrl(ethnicity.coordinates.lat, ethnicity.coordinates.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25"
                    >
                      Abrir en Google Maps
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.section>
              </motion.div>

              <motion.div
                className="mt-6 pb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-emerald-200 hover:bg-emerald-50/50 hover:text-emerald-900"
                >
                  Cerrar ficha
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
