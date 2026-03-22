import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ethnicities, regions } from '../data/ethnicities';
import EthnicityCard from './EthnicityCard';

const selectClass =
  'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20';

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
    const counts = {
      Vulnerable: 0,
      'En peligro': 0,
      'En peligro crítico': 0
    };
    ethnicities.forEach((e) => {
      if (counts[e.status] !== undefined) counts[e.status]++;
    });
    return counts;
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="inline-flex items-center justify-center gap-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            <svg
              className="h-8 w-8 text-emerald-600 sm:h-9 sm:w-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Biblioteca de Pueblos Indígenas
          </h1>
          <p className="mt-2 text-slate-600">
            Explora las {ethnicities.length} etnias indígenas de Colombia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-8 max-w-2xl"
        >
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
              placeholder="Buscar por nombre, idioma o ubicación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-slate-900 shadow-sm transition-shadow placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/15"
            />
            {searchTerm && (
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                onClick={() => setSearchTerm('')}
                aria-label="Limpiar búsqueda"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:gap-6 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium text-slate-600">Región:</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className={selectClass}
          >
            <option value="all">Todas las regiones</option>
            {regions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium text-slate-600">Estado:</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className={selectClass}
          >
            <option value="all">Todos los estados</option>
            <option value="Vulnerable">Vulnerable ({statusCounts.Vulnerable})</option>
            <option value="En peligro">En peligro ({statusCounts['En peligro']})</option>
            <option value="En peligro crítico">
              En peligro crítico ({statusCounts['En peligro crítico']})
            </option>
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium text-slate-600">Ordenar:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClass}>
            <option value="name">Nombre A-Z</option>
            <option value="population">Mayor población</option>
            <option value="status">Estado de conservación</option>
          </select>
        </div>

        <p className="w-full text-center text-sm text-slate-500 sm:ml-auto sm:w-auto sm:text-right">
          {filteredEthnicities.length} resultado{filteredEthnicities.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
          <span className="block text-2xl font-bold text-amber-500">{statusCounts.Vulnerable}</span>
          <span className="text-xs font-medium text-slate-600 sm:text-sm">Vulnerables</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
          <span className="block text-2xl font-bold text-red-400">{statusCounts['En peligro']}</span>
          <span className="text-xs font-medium text-slate-600 sm:text-sm">En peligro</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
          <span className="block text-2xl font-bold text-rose-500">{statusCounts['En peligro crítico']}</span>
          <span className="text-xs font-medium text-slate-600 sm:text-sm">En peligro crítico</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
          <span className="block text-2xl font-bold text-emerald-600">
            {ethnicities.reduce((acc, e) => acc + e.population, 0).toLocaleString()}
          </span>
          <span className="text-xs font-medium text-slate-600 sm:text-sm">Población total</span>
        </div>
      </div>

      {filteredEthnicities.length > 0 ? (
        <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" layout>
          {filteredEthnicities.map((ethnicity, index) => (
            <motion.div
              key={ethnicity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              layout
            >
              <EthnicityCard ethnicity={ethnicity} onClick={() => onEthnicityClick(ethnicity)} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-8 py-16 text-center shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg
            className="mx-auto mb-4 h-16 w-16 text-slate-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <h3 className="text-lg font-semibold text-slate-800">No se encontraron resultados</h3>
          <p className="mt-2 text-sm text-slate-600">Intenta con otros términos o ajusta los filtros</p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedRegion('all');
              setSelectedStatus('all');
            }}
            className="mt-6 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 transition-colors hover:bg-emerald-700"
          >
            Limpiar filtros
          </button>
        </motion.div>
      )}
    </div>
  );
}
