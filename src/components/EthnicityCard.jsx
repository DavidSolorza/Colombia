import { motion } from 'framer-motion';

const statusColors = {
  Vulnerable: '#fcd34d',
  'En peligro': '#fca5a5',
  'En peligro crítico': '#fb7185'
};

export default function EthnicityCard({ ethnicity, onClick, compact = false }) {
  const statusColor = statusColors[ethnicity.status] || '#5eead4';

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/5 ring-1 ring-slate-100 transition-shadow hover:border-emerald-300/80 hover:shadow-lg hover:shadow-emerald-900/5 ${compact ? 'p-4' : ''}`}
      style={{ borderTopWidth: '3px', borderTopColor: statusColor }}
      onClick={onClick}
    >
      {!compact && (
        <div className="relative h-40 overflow-hidden sm:h-44">
          <img
            src={ethnicity.image}
            alt={ethnicity.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-slate-900 shadow-sm"
              style={{ background: statusColor }}
            >
              {ethnicity.status}
            </span>
          </div>
        </div>
      )}

      <div className="p-4">
        <h4 className="text-lg font-bold text-slate-900">{ethnicity.name}</h4>

        <div className="mt-3 flex flex-col gap-1.5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {ethnicity.language}
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            {ethnicity.population.toLocaleString()}
          </span>
        </div>

        {!compact && (
          <p className="mt-3 inline-flex items-start gap-2 text-sm font-medium text-emerald-700">
            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    </motion.div>
  );
}
