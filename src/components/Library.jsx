import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ethnicities, regions } from '../data/ethnicities';
import EthnicityCard from './EthnicityCard';

const regionChipLabel = (r) => {
  if (r.id === 'amazonia-norte') return 'Amz. norte';
  if (r.id === 'amazonia-sur') return 'Amz. sur';
  if (r.id === 'andina-sur') return 'Andina sur';
  if (r.id === 'pacifica') return 'Pacífico';
  if (r.id === 'andina-norte-caribe') return 'Norte / Caribe';
  if (r.id === 'llanos-orientales') return 'Llanos';
  return r.name;
};

const statusMeta = {
  Vulnerable: { dot: 'bg-amber-400', bar: 'from-amber-400 to-orange-400', label: 'Vulnerable' },
  'En peligro': { dot: 'bg-red-400', bar: 'from-red-400 to-rose-500', label: 'En peligro' },
  'En peligro crítico': {
    dot: 'bg-rose-600',
    bar: 'from-rose-600 to-red-700',
    label: 'Peligro crítico'
  }
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.06 }
  }
};

const listItem = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 380, damping: 28 }
  }
};

export default function Library({ onEthnicityClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredEthnicities = useMemo(() => {
    let filtered = ethnicities;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.name.toLowerCase().includes(term) ||
          e.language.toLowerCase().includes(term) ||
          e.location.toLowerCase().includes(term) ||
          e.departments.some((d) => d.toLowerCase().includes(term))
      );
    }

    if (selectedRegion !== 'all') {
      filtered = filtered.filter((e) => e.region === selectedRegion);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter((e) => e.status === selectedStatus);
    }

    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'population') return b.population - a.population;
      if (sortBy === 'status') return a.status.localeCompare(b.status);
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedRegion, selectedStatus, sortBy]);

  const statusCounts = useMemo(() => {
    const counts = { Vulnerable: 0, 'En peligro': 0, 'En peligro crítico': 0 };
    ethnicities.forEach((e) => {
      if (counts[e.status] !== undefined) counts[e.status]++;
    });
    return counts;
  }, []);

  const totalPopulation = useMemo(
    () => ethnicities.reduce((acc, e) => acc + e.population, 0),
    []
  );

  const gridAnimKey = `${selectedRegion}-${selectedStatus}-${sortBy}`;

  const selectWrap =
    'group relative flex min-w-0 flex-1 flex-col gap-1 sm:min-w-[11rem]';

  const selectField =
    'w-full cursor-pointer appearance-none rounded-xl border border-slate-200/90 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:border-emerald-200 hover:shadow-md focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20';

  return (
    <div className="relative min-h-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-emerald-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-10">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, type: 'spring', stiffness: 400, damping: 22 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 shadow-sm shadow-emerald-900/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {ethnicities.length} pueblos catalogados
          </motion.div>

          <h1 className="bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-800 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
            Biblioteca de pueblos indígenas
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Consulta lenguas, territorios y población. Filtra por región natural, estado de la lengua u ordena el
            catálogo como prefieras.
          </p>
        </motion.header>

        <motion.div
          className="mx-auto mt-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, type: 'spring', stiffness: 280, damping: 26 }}
        >
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400/40 via-teal-400/30 to-cyan-400/40 opacity-0 blur transition duration-500 group-focus-within:opacity-100" />
            <div className="relative flex rounded-2xl border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/[0.04] backdrop-blur-md transition-shadow duration-300 focus-within:border-emerald-300/80 focus-within:shadow-emerald-900/10">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                placeholder="Buscar por pueblo, idioma, departamento o ubicación…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl bg-transparent py-4 pl-12 pr-12 text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-[0.95rem]"
              />
              <AnimatePresence>
                {searchTerm ? (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    onClick={() => setSearchTerm('')}
                    aria-label="Limpiar búsqueda"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </motion.button>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, type: 'spring', stiffness: 260, damping: 28 }}
        >
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 sm:text-left">
            Región natural
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedRegion('all')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                selectedRegion === 'all'
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25 ring-2 ring-slate-900 ring-offset-2'
                  : 'border border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:border-emerald-200 hover:text-emerald-800'
              }`}
            >
              Todas
            </motion.button>
            {regions.map((r, i) => {
              const active = selectedRegion === r.id;
              return (
                <motion.button
                  key={r.id}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.04, type: 'spring', stiffness: 320, damping: 24 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedRegion(active ? 'all' : r.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-slate-900 shadow-md ring-2 ring-white ring-offset-2'
                      : 'border border-slate-200/90 bg-white/90 text-slate-700 shadow-sm hover:shadow-md'
                  }`}
                  style={
                    active
                      ? { background: `${r.color}e6`, boxShadow: `0 8px 24px -4px ${r.color}55` }
                      : undefined
                  }
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white/50"
                    style={{ background: r.color }}
                    aria-hidden
                  />
                  {regionChipLabel(r)}
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        <motion.div
          className="mt-8 rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-xl shadow-slate-900/[0.04] backdrop-blur-md sm:p-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, type: 'spring', stiffness: 260, damping: 28 }}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:flex-1 lg:gap-5">
              <div className={selectWrap}>
                <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <svg className="h-3.5 w-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Estado lingüístico
                </label>
                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className={selectField}
                  >
                    <option value="all">Todos los estados</option>
                    <option value="Vulnerable">Vulnerable ({statusCounts.Vulnerable})</option>
                    <option value="En peligro">En peligro ({statusCounts['En peligro']})</option>
                    <option value="En peligro crítico">
                      En peligro crítico ({statusCounts['En peligro crítico']})
                    </option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div className={selectWrap}>
                <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <svg className="h-3.5 w-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M7 12h10M10 18h4" />
                  </svg>
                  Ordenar por
                </label>
                <div className="relative">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectField}>
                    <option value="name">Nombre (A-Z)</option>
                    <option value="population">Mayor población</option>
                    <option value="status">Estado de conservación</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            <motion.div
              key={filteredEthnicities.length}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 px-5 py-3 text-center shadow-lg shadow-emerald-900/20 sm:min-w-[10rem]"
            >
              <div>
                <span className="block text-2xl font-black tabular-nums text-white">
                  {filteredEthnicities.length}
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-100">
                  resultado{filteredEthnicities.length !== 1 ? 's' : ''}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.25 }
            }
          }}
        >
          {[
            { key: 'Vulnerable', count: statusCounts.Vulnerable, meta: statusMeta.Vulnerable },
            { key: 'En peligro', count: statusCounts['En peligro'], meta: statusMeta['En peligro'] },
            {
              key: 'crit',
              count: statusCounts['En peligro crítico'],
              meta: statusMeta['En peligro crítico']
            },
            {
              key: 'pop',
              count: null,
              meta: null,
              totalPop: totalPopulation
            }
          ].map((card) => (
            <motion.div
              key={card.key}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 320, damping: 24 }
                }
              }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 18 } }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-md shadow-slate-900/[0.04] ring-1 ring-slate-100/80 sm:p-5"
            >
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${card.meta ? card.meta.bar : 'from-emerald-500 to-teal-600'}`}
                aria-hidden
              />
              {card.totalPop != null ? (
                <>
                  <span className="block text-xl font-black tabular-nums text-emerald-700 sm:text-2xl">
                    {card.totalPop.toLocaleString('es-CO')}
                  </span>
                  <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
                    Población total (estimada)
                  </span>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className={`inline-block h-2 w-2 rounded-full ${card.meta.dot}`} aria-hidden />
                    <span className="text-xl font-black tabular-nums text-slate-900 sm:text-2xl">{card.count}</span>
                  </div>
                  <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
                    {card.meta.label}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Catálogo</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        {filteredEthnicities.length > 0 ? (
          <motion.div
            key={gridAnimKey}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            variants={listContainer}
            initial="hidden"
            animate="show"
          >
            {filteredEthnicities.map((ethnicity) => (
              <motion.div key={ethnicity.id} variants={listItem} layout>
                <EthnicityCard ethnicity={ethnicity} onClick={() => onEthnicityClick(ethnicity)} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="mt-10 overflow-hidden rounded-3xl border border-dashed border-slate-300/90 bg-gradient-to-b from-white to-slate-50 px-6 py-20 text-center shadow-inner sm:px-10"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-slate-400"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-slate-800">Sin resultados</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
              Prueba otras palabras en la búsqueda o relaja los filtros de región y estado.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedStatus('all');
              }}
              className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-shadow hover:shadow-xl hover:shadow-emerald-600/35"
            >
              Restablecer filtros
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
