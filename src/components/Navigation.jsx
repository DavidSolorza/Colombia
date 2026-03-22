import { motion } from 'framer-motion';

const linkBase =
  'flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200';
const linkIdle = 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';
const linkActive =
  'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-1 ring-emerald-500/20';

export default function Navigation({ currentView, onViewChange }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-0 right-0 top-0 z-[100] flex h-[70px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 shadow-sm backdrop-blur-xl sm:px-8"
    >
      <div className="flex items-center gap-3 text-emerald-700">
        <svg
          className="h-8 w-8 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
        <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:inline">
          Culturas de Colombia
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          className={`${linkBase} ${currentView === 'map' ? linkActive : linkIdle}`}
          onClick={() => onViewChange('map')}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" y1="2" x2="8" y2="18" />
            <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
          Mapa
        </button>

        <button
          type="button"
          className={`${linkBase} ${currentView === 'library' ? linkActive : linkIdle}`}
          onClick={() => onViewChange('library')}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Biblioteca
        </button>
      </div>

      <div className="hidden sm:flex">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
          <svg
            className="h-3.5 w-3.5 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          94 etnias indígenas
        </span>
      </div>
    </motion.nav>
  );
}
