import { motion, AnimatePresence } from 'framer-motion';

const statusColors = {
  Vulnerable: '#fcd34d',
  'En peligro': '#fca5a5',
  'En peligro crítico': '#fb7185'
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
        className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-slate-900/60 backdrop-blur-sm"
      >
        <div
          className="flex min-h-[100dvh] w-full items-start justify-center px-3 pb-8 pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:items-center sm:px-5 sm:py-6 sm:pb-10"
          onClick={onClose}
          role="presentation"
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: 'spring', damping: 28, stiffness: 340 }}
          className="relative flex max-h-[min(80dvh,640px)] w-full max-w-[min(100%,36rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/25 sm:max-h-[min(82dvh,660px)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-slate-900/50 text-white shadow-md backdrop-blur-md transition-colors hover:bg-slate-900/70 sm:right-2.5 sm:top-2.5"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="relative h-32 shrink-0 overflow-hidden sm:h-36 md:h-40">
            <img src={ethnicity.image} alt={ethnicity.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">{ethnicity.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span
                  className="inline-flex rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-slate-900 shadow sm:px-2.5 sm:text-xs"
                  style={{ background: statusColor }}
                >
                  {ethnicity.status}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/15 px-2 py-0.5 text-[0.65rem] font-semibold text-white backdrop-blur-sm sm:text-xs">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  {ethnicity.population.toLocaleString()} personas
                </span>
              </div>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
                Descripción
              </h3>
              <p className="leading-relaxed text-slate-600">{ethnicity.description}</p>
            </section>

            {ethnicity.otherNames && (
              <section className="mb-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Otros nombres</h3>
                <p className="leading-relaxed text-slate-700">{ethnicity.otherNames}</p>
              </section>
            )}

            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ubicación
              </h3>
              <p className="leading-relaxed text-slate-700">{locationText}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ethnicity.departments.map((dept) => (
                  <span
                    key={dept}
                    className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </section>

            {ethnicity.populationSource && (
              <section className="mb-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Población</h3>
                <TextBlocks text={ethnicity.populationSource} className="leading-relaxed text-slate-700" />
              </section>
            )}

            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Lengua
              </h3>
              <p className="text-base font-medium text-slate-900">
                {ethnicity.language}
                {ethnicity.languageFamily ? (
                  <span className="font-normal text-slate-600"> · familia {ethnicity.languageFamily}</span>
                ) : null}
              </p>
              {ethnicity.languageDetail ? (
                <div className="mt-2">
                  <TextBlocks text={ethnicity.languageDetail} />
                </div>
              ) : null}
            </section>

            {ethnicity.culture && (
              <section className="mb-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cultura (costumbres, organización, vivienda, etc.)
                </h3>
                <TextBlocks text={ethnicity.culture} />
              </section>
            )}

            {ethnicity.economy && (
              <section className="mb-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Economía</h3>
                <TextBlocks text={ethnicity.economy} />
              </section>
            )}

            {ethnicity.traditions?.length > 0 && (
              <section className="mb-5">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                  </svg>
                  Tradiciones
                </h3>
                <ul className="space-y-2">
                  {ethnicity.traditions.map((tradition, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">{tradition}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {ethnicity.crafts?.length > 0 && (
              <section className="mb-4">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  Artesanías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ethnicity.crafts.map((craft, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      <svg className="h-3 w-3 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                      {craft}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-inner ring-1 ring-slate-100">
              <h3 className="flex items-center gap-2 border-b border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:px-4 sm:text-sm">
                <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Mapa (Google Maps)
              </h3>
              <div className="relative h-[140px] w-full bg-slate-200 sm:h-[160px] md:h-[180px]">
                <iframe
                  title={`Mapa: ${ethnicity.name}`}
                  className="absolute inset-0 h-full w-full border-0"
                  src={googleMapsEmbedSrc(ethnicity.coordinates.lat, ethnicity.coordinates.lng, 12)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-slate-200 bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-2.5">
                <p className="text-xs text-slate-600 sm:text-sm">
                  <span className="font-medium text-slate-800">Coordenadas:</span>{' '}
                  {ethnicity.coordinates.lat.toFixed(4)}°, {ethnicity.coordinates.lng.toFixed(4)}°
                </p>
                <a
                  href={googleMapsOpenUrl(ethnicity.coordinates.lat, ethnicity.coordinates.lng)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
                >
                  Abrir en Google Maps
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
