import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ColombiaMap from './components/ColombiaMap';
import Navigation from './components/Navigation';
import RegionView from './components/RegionView';
import EthnicityDetail from './components/EthnicityDetail';
import Library from './components/Library';
import MapInfoPanel from './components/MapInfoPanel';

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
              <div className="mx-auto flex w-full max-w-[1600px] flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
                <div className="min-w-0 flex-1">
                  <ColombiaMap selectedRegion={selectedRegion} onRegionClick={handleRegionClick} />
                </div>
                <MapInfoPanel className="w-full shrink-0 lg:sticky lg:top-[88px] lg:max-w-[22rem] xl:max-w-[24rem]" />
              </div>

              <div className="pointer-events-none fixed bottom-5 left-3 z-40 sm:bottom-6 sm:left-5">
                <div className="pointer-events-auto">
                  {!selectedRegion && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="max-w-[22rem] rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md"
                    >
                      <h3 className="text-base font-semibold text-slate-900">Explora Colombia</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        Haz clic en una región del mapa para ver sus pueblos
                      </p>
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
