import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ColombiaMap from './components/ColombiaMap';
import Navigation from './components/Navigation';
import RegionView from './components/RegionView';
import EthnicityDetail from './components/EthnicityDetail';
import Library from './components/Library';

export default function App() {
  const [currentView, setCurrentView] = useState('map');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedEthnicity, setSelectedEthnicity] = useState(null);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleEthnicityClick = (ethnicity) => {
    setSelectedEthnicity(ethnicity);
  };

  const handleCloseRegion = () => {
    setSelectedRegion(null);
  };

  const handleCloseEthnicity = () => {
    setSelectedEthnicity(null);
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900 antialiased">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />

      <main className="mt-[70px] flex min-h-0 flex-1 flex-col">
        <AnimatePresence mode="wait">
          {currentView === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex flex-col overflow-x-hidden px-3 pb-10 pt-2 sm:px-4 sm:pb-12 sm:pt-3"
            >
              <div className="flex w-full flex-col items-center">
                <ColombiaMap
                  selectedRegion={selectedRegion}
                  onRegionClick={handleRegionClick}
                  onEthnicityClick={handleEthnicityClick}
                />
              </div>

              <div className="pointer-events-none fixed bottom-5 left-3 z-40 sm:bottom-6 sm:left-5">
                <div className="pointer-events-auto">
                  {!selectedRegion && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex max-w-[22rem] items-start gap-4 rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md"
                    >
                      <svg
                        className="h-6 w-6 shrink-0 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">Explora Colombia</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          Haz clic en una región o en los puntos de las etnias
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[calc(100vh-70px)] w-full flex-1 bg-gradient-to-b from-slate-50 to-slate-100 py-8"
            >
              <Library onEthnicityClick={handleEthnicityClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedRegion && (
          <RegionView
            region={selectedRegion}
            onClose={handleCloseRegion}
            onEthnicityClick={handleEthnicityClick}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedEthnicity && (
          <EthnicityDetail ethnicity={selectedEthnicity} onClose={handleCloseEthnicity} />
        )}
      </AnimatePresence>
    </div>
  );
}
