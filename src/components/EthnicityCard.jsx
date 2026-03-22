import { motion } from 'framer-motion';

const statusColors = {
  Vulnerable: '#fcd34d',
  'En peligro': '#fca5a5',
  'En peligro crítico': '#fb7185'
};

export default function EthnicityCard({ ethnicity, onClick, compact = false }) {
  const statusColor = statusColors[ethnicity.status] || '#5eead4';

  return (
    <motion.article
      layout
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 420, damping: 22 } }}
      whileTap={{ scale: 0.985 }}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-100/90 transition-shadow duration-300 hover:border-emerald-200/90 hover:shadow-xl hover:shadow-emerald-900/[0.08] ${compact ? 'p-4' : ''}`}
      style={{ borderTopWidth: '3px', borderTopColor: statusColor }}
      onClick={onClick}
    >
      {!compact && (
        <div className="relative h-44 overflow-hidden sm:h-48">
          <img
            src={ethnicity.image}
            alt={ethnicity.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-emerald-600/0 transition-colors duration-300 group-hover:bg-emerald-900/15" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-slate-900 shadow-md"
              style={{ background: statusColor }}
            >
              {ethnicity.status}
            </span>
            <span className="translate-y-1 text-xs font-bold uppercase tracking-wider text-white/0 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100">
              Ver ficha →
            </span>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5">
        <h4 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-900 sm:text-xl">
          {ethnicity.name}
        </h4>

        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-700">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <span className="font-medium text-slate-700">{ethnicity.language}</span>
          </span>
          <span className="inline-flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-700">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </span>
            <span className="font-medium tabular-nums text-slate-700">
              {ethnicity.population.toLocaleString('es-CO')} personas
            </span>
          </span>
        </div>

        {!compact && (
          <p className="mt-4 flex items-start gap-2.5 border-t border-slate-100 pt-4 text-sm font-medium leading-snug text-emerald-800/90">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {ethnicity.location}
          </p>
        )}

        {compact && (
          <span className="mt-2 inline-block text-sm font-semibold" style={{ color: statusColor }}>
            {ethnicity.status}
          </span>
        )}
      </div>
    </motion.article>
  );
}
