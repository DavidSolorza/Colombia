import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { motion } from 'framer-motion';
import { regions, departments, ethnicities } from '../data/ethnicities';

const regionColors = {
  'amazonia-norte': '#5eead4',
  'amazonia-sur': '#6ee7b7',
  'andina-sur': '#86efac',
  pacifica: '#93c5fd',
  'andina-norte-caribe': '#fde68a',
  'llanos-orientales': '#ddd6fe'
};

function normalizeDeptLabel(s) {
  return String(s)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function findDepartmentForMunicipio(feature) {
  const rawId = feature.id != null ? String(feature.id) : '';
  const code2 = rawId.length >= 2 ? rawId.slice(0, 2) : '';
  let lookup = code2.padStart(2, '0');
  if (lookup === '11') lookup = '25';

  let dept = departments.find((d) => String(d.id).padStart(2, '0') === lookup);
  if (!dept && feature.properties?.dpt) {
    const label = normalizeDeptLabel(feature.properties.dpt);
    dept = departments.find((d) => normalizeDeptLabel(d.name) === label);
  }
  return dept;
}

function regionTooltipStats(regionId) {
  const list = ethnicities.filter((e) => e.region === regionId);
  const people = list.reduce((s, e) => s + (Number(e.population) || 0), 0);
  const languageFamilies = new Set(list.map((e) => e.languageFamily).filter(Boolean)).size;
  return { count: list.length, people, languageFamilies };
}

function truncateRegionBlurb(text, max = 132) {
  const s = String(text || '').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max).trimEnd();
  const i = cut.lastIndexOf(' ');
  const base = i > 48 ? cut.slice(0, i) : cut;
  return `${base}…`;
}

const TOOLTIP_W = 292;
const TOOLTIP_H = 220;

function clampMapTooltipPosition(clientX, clientY) {
  if (typeof window === 'undefined') return { left: clientX + 14, top: clientY + 12 };
  const pad = 10;
  let left = clientX + 14;
  let top = clientY + 12;
  if (left + TOOLTIP_W > window.innerWidth - pad) {
    left = Math.max(pad, clientX - TOOLTIP_W - 14);
  }
  if (top + TOOLTIP_H > window.innerHeight - pad) {
    top = Math.max(pad, clientY - TOOLTIP_H - 8);
  }
  left = Math.max(pad, Math.min(left, window.innerWidth - TOOLTIP_W - pad));
  top = Math.max(pad, Math.min(top, window.innerHeight - TOOLTIP_H - pad));
  return { left, top };
}

function IconUsers({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconMap({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function IconChart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-6 4 3 4-8" />
    </svg>
  );
}

function IconLayers({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function mapJsonUrl() {
  const base = import.meta.env.BASE_URL || '/';
  return `${base.endsWith('/') ? base : `${base}/`}colombia-municipios.json`;
}

function MapRegionHoverTooltip({ tooltip }) {
  if (!tooltip?.show || !tooltip.regionId) return null;
  const region = regions.find((r) => r.id === tooltip.regionId);
  if (!region) return null;

  const accent = region.color || regionColors[region.id] || '#0f766e';
  const stats = regionTooltipStats(region.id);
  const deptCount = region.departments?.length ?? 0;
  const blurb = truncateRegionBlurb(region.description);
  const { left, top } = clampMapTooltipPosition(tooltip.x, tooltip.y);

  const statClass =
    'flex items-center gap-1.5 text-slate-400 [&_svg]:shrink-0 [&_svg]:opacity-85';
  const ddClass = 'text-right font-semibold tabular-nums text-white';

  return (
    <motion.div
      key={region.id}
      role="tooltip"
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="map-region-tooltip pointer-events-none fixed z-[1000] w-[min(92vw,18.25rem)] overflow-hidden rounded-xl border border-white/12 bg-slate-950/88 text-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md backdrop-saturate-150 ring-1 ring-white/8"
      style={{
        left,
        top,
        boxShadow: `0 18px 40px -14px rgb(0 0 0 / 0.5), inset 0 1px 0 0 rgb(255 255 255 / 0.06), 0 0 0 1px ${accent}33`
      }}
    >
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${accent} 0%, ${accent}99 45%, transparent 100%)`
        }}
      />
      <div className="px-3.5 pb-3 pt-2.5 sm:px-4 sm:pb-3.5 sm:pt-3">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">Región natural</p>
        <h3 className="mt-0.5 text-[0.95rem] font-bold leading-snug tracking-tight text-white sm:text-base">
          {region.name}
        </h3>
        {region.mapLabel && region.mapLabel !== region.name ? (
          <p className="mt-0.5 text-xs font-medium text-slate-400">En el mapa: {region.mapLabel}</p>
        ) : null}

        <dl className="mt-3 grid grid-cols-[1fr_auto] gap-x-3 gap-y-2 border-t border-white/10 pt-3 text-[0.72rem] leading-tight sm:text-[0.75rem]">
          <dt className={statClass}>
            <IconUsers className="h-3.5 w-3.5" />
            Pueblos indígenas
          </dt>
          <dd className={ddClass}>{stats.count}</dd>

          <dt className={statClass}>
            <IconMap className="h-3.5 w-3.5" />
            Departamentos
          </dt>
          <dd className={ddClass}>{deptCount}</dd>

          <dt className={statClass}>
            <IconChart className="h-3.5 w-3.5" />
            Población (estimada)
          </dt>
          <dd className={ddClass}>{stats.people.toLocaleString('es-CO')}</dd>

          <dt className={statClass}>
            <IconLayers className="h-3.5 w-3.5" />
            Familias lingüísticas
          </dt>
          <dd className={ddClass}>{stats.languageFamilies}</dd>
        </dl>

        {blurb ? (
          <p className="mt-3 line-clamp-3 border-t border-white/10 pt-3 text-[0.7rem] leading-relaxed text-slate-300 sm:text-[0.72rem]">
            {blurb}
          </p>
        ) : null}

        <p className="mt-2.5 flex items-center gap-1.5 text-[0.65rem] font-medium text-slate-500">
          <span
            className="inline-block h-1 w-1 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
          Clic en la región para ver pueblos y detalle
        </p>
      </div>
    </motion.div>
  );
}

/** SVG estable: al cambiar tooltip u otras props del padre, React no re-renderiza el lienzo y D3 conserva el dibujo. */
const MapSvgCanvas = memo(
  forwardRef(function MapSvgCanvas({ viewW, viewH }, ref) {
    return (
      <svg
        ref={ref}
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="xMidYMid meet"
        className="colombia-map block h-full w-full overflow-visible [shape-rendering:geometricPrecision]"
      />
    );
  }),
  (prev, next) => prev.viewW === next.viewW && prev.viewH === next.viewH
);

export default function ColombiaMap({ onRegionClick, selectedRegion }) {
  const svgRef = useRef();
  const containerRef = useRef();
  const onRegionClickRef = useRef(onRegionClick);
  onRegionClickRef.current = onRegionClick;

  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, regionId: null });
  const [dimensions, setDimensions] = useState({ width: 800, height: 900 });
  const [mapError, setMapError] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w < 64 || h < 64) return;
      setDimensions({
        width: Math.max(w, 320),
        height: Math.max(h, 260)
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width < 100) return;

    let cancelled = false;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    setMapError(null);

    const { width, height } = dimensions;

    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    const defs = svg.append('defs');

    const mapGradient = defs.append('linearGradient')
      .attr('id', 'mapBgGradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '100%').attr('y2', '100%');
    mapGradient.append('stop').attr('offset', '0%').attr('stop-color', '#f0f9ff');
    mapGradient.append('stop').attr('offset', '100%').attr('stop-color', '#e0f2fe');

    const oceanPattern = defs.append('pattern')
      .attr('id', 'oceanPattern')
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', 20).attr('height', 20);
    oceanPattern.append('rect')
      .attr('width', 20).attr('height', 20)
      .attr('fill', '#bae6fd');
    oceanPattern.append('path')
      .attr('d', 'M0 10 Q5 5, 10 10 T20 10')
      .attr('fill', 'none')
      .attr('stroke', '#7dd3fc')
      .attr('stroke-width', 0.5);

    const oceanRect = svg
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#oceanPattern)')
      .attr('rx', 12)
      .attr('opacity', 0);

    const innerRect = svg
      .append('rect')
      .attr('x', 10).attr('y', 10)
      .attr('width', width - 20)
      .attr('height', height - 20)
      .attr('fill', 'url(#mapBgGradient)')
      .attr('rx', 8)
      .attr('pointer-events', 'none')
      .attr('opacity', 0);

    oceanRect.transition().duration(480).ease(d3.easeCubicOut).attr('opacity', 1);
    innerRect.transition().duration(520).delay(80).ease(d3.easeCubicOut).attr('opacity', 1);

    d3.json(mapJsonUrl())
      .then((co) => {
      if (cancelled) return;

      const mpiosCollection = topojson.feature(co, co.objects.mpios);
      const mainlandForFit = {
        type: 'FeatureCollection',
        features: mpiosCollection.features.filter(
          (f) => !String(f.id).startsWith('88')
        )
      };
      const legendReserve = Math.min(Math.max(width * 0.22, 40), 188);
      const inset = { l: 12 + legendReserve, r: 18, t: 16, b: 18 };
      projection.fitExtent(
        [[inset.l, inset.t], [width - inset.r, height - inset.b]],
        mainlandForFit
      );

      const markerScale = Math.min(1.55, Math.max(0.95, width / 640));
      const regionR = 14 * markerScale;

      const geomsByRegion = {};
      const mpiosGeoms = co.objects.mpios.geometries;
      mpiosCollection.features.forEach((f, i) => {
        if (String(f.id).startsWith('88')) return;
        const dept = findDepartmentForMunicipio(f);
        if (!dept?.region) return;
        const geom = mpiosGeoms[i];
        if (!geom) return;
        if (!geomsByRegion[dept.region]) geomsByRegion[dept.region] = [];
        geomsByRegion[dept.region].push(geom);
      });

      const regionLayer = svg.append('g').attr('class', 'region-polygons-layer');

      const regionPaths = [];

      regions.forEach((region) => {
        const geoms = geomsByRegion[region.id];
        if (!geoms?.length) return;
        let merged;
        try {
          merged = topojson.merge(co, geoms);
        } catch {
          return;
        }
        if (!merged?.coordinates?.length) return;

        const pathSel = regionLayer
          .append('path')
          .attr('class', `region-polygon region-polygon-${region.id}`)
          .datum(merged)
          .attr('d', path)
          .attr('fill', regionColors[region.id] || '#e2e8f0')
          .attr('fill-opacity', 0)
          .attr('stroke', '#64748b')
          .attr('stroke-opacity', 0)
          .attr('stroke-width', 1.1)
          .attr('stroke-linejoin', 'round')
          .style('cursor', 'pointer')
          .on('click', () => {
            onRegionClickRef.current(region);
          })
          .on('mouseover', function (event) {
            d3.select(this)
              .interrupt()
              .transition()
              .duration(120)
              .attr('fill-opacity', 1)
              .attr('stroke', '#047857')
              .attr('stroke-width', 2);
            setTooltip({
              show: true,
              x: event.clientX,
              y: event.clientY,
              regionId: region.id
            });
          })
          .on('mousemove', (event) => {
            setTooltip((t) => (t.show ? { ...t, x: event.clientX, y: event.clientY } : t));
          })
          .on('mouseout', function () {
            d3.select(this)
              .interrupt()
              .transition()
              .duration(120)
              .attr('fill-opacity', 0.94)
              .attr('stroke', '#64748b')
              .attr('stroke-width', 1.1);
            setTooltip({ show: false, x: 0, y: 0, regionId: null });
          });

        regionPaths.push({ sel: pathSel, merged, idx: regionPaths.length });
      });

      const pathStagger = 135;
      const pathDuration = 680;

      regionPaths.forEach(({ sel, merged, idx }) => {
        let cx;
        let cy;
        try {
          [cx, cy] = path.centroid({ type: 'Feature', properties: {}, geometry: merged });
        } catch {
          cx = width / 2;
          cy = height / 2;
        }
        const ok = Number.isFinite(cx) && Number.isFinite(cy);
        const t0 = ok
          ? `translate(${cx},${cy}) scale(0.68) translate(${-cx},${-cy})`
          : 'translate(0,0) scale(1)';

        if (ok) sel.attr('transform', t0);

        sel
          .transition()
          .delay(120 + idx * pathStagger)
          .duration(pathDuration)
          .ease(d3.easeCubicOut)
          .attr('transform', null)
          .attr('fill-opacity', 0.94)
          .attr('stroke-opacity', 1);
      });

      const markerEntries = [];

      regions.forEach((region) => {
        const regionDepts = departments.filter((d) => d.region === region.id);
        if (regionDepts.length === 0) return;

        const regionCoords = regionDepts.map((d) => [d.coordinates.lng, d.coordinates.lat]);
        const centerLng = d3.mean(regionCoords, (d) => d[0]);
        const centerLat = d3.mean(regionCoords, (d) => d[1]);
        const [x, y] = projection([centerLng, centerLat]);

        if (!Number.isFinite(x) || !Number.isFinite(y)) return;
        if (x < 6 || x > width - 6 || y < 6 || y > height - 6) return;

        markerEntries.push({ region, x, y });
      });

      const markerBaseDelay =
        200 + Math.max(0, regionPaths.length - 1) * pathStagger + pathDuration * 0.35;

      markerEntries.forEach(({ region, x, y }, idx) => {
        const regionGroup = svg
          .append('g')
          .attr('class', `region-marker ${region.id}`)
          .style('pointer-events', 'none')
          .attr('opacity', 0);

        const circle = regionGroup
          .append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', 0)
          .attr('fill', d3.color(regionColors[region.id]).brighter(0.2))
          .attr('stroke', regionColors[region.id])
          .attr('stroke-width', 2.5)
          .style('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))');

        const label = regionGroup
          .append('text')
          .attr('x', x)
          .attr('y', y + 26 * markerScale)
          .attr('text-anchor', 'middle')
          .attr('fill', '#1e293b')
          .attr('font-size', `${9 * markerScale}px`)
          .attr('font-weight', '600')
          .attr('pointer-events', 'none')
          .attr('opacity', 0)
          .text(region.mapLabel || region.name);

        const md = markerBaseDelay + idx * 110;

        circle
          .transition()
          .delay(md)
          .duration(520)
          .ease(d3.easeBackOut.overshoot(1.15))
          .attr('r', regionR);

        regionGroup.transition().delay(md).duration(380).ease(d3.easeCubicOut).attr('opacity', 1);

        label.transition().delay(md + 200).duration(340).ease(d3.easeCubicOut).attr('opacity', 1);
      });
    })
      .catch((err) => {
        console.error('No se pudo cargar colombia-municipios.json', err);
        setMapError('No se pudo cargar el mapa. Comprueba que colombia-municipios.json esté en public/ y la consola del navegador por errores de red.');
      });

    return () => {
      cancelled = true;
    };
  }, [dimensions]);

  return (
    <div className="mx-auto flex w-full max-w-[42rem] flex-col gap-2 sm:gap-2.5 md:max-w-[46rem] lg:mx-0 lg:max-w-none">
      <header className="pointer-events-none flex w-full shrink-0 justify-center px-1">
        <div className="inline-flex flex-col rounded-2xl border border-slate-200/80 bg-white px-5 py-2.5 text-center shadow-md shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.03] sm:px-6 sm:py-3">
          <h2 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">Mapa de Colombia</h2>
          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">94 pueblos indígenas</p>
        </div>
      </header>

      <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-b from-sky-50 via-white to-sky-100/90 shadow-lg shadow-slate-900/[0.07] ring-1 ring-white/80">
      {mapError && (
        <div
          className="shrink-0 border-b border-red-200/80 bg-red-50 px-4 py-2.5 text-sm text-red-900"
          role="alert"
        >
          {mapError}
        </div>
      )}
      <div className="relative px-2 pb-3 pt-1.5 sm:px-3 sm:pb-4 sm:pt-2 md:px-4 md:pb-5">
        <div
          ref={containerRef}
          className="relative h-[480px] w-full sm:h-[600px] md:h-[720px] lg:h-[840px] xl:h-[920px] 2xl:h-[1000px]"
        >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 0.97, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <MapSvgCanvas ref={svgRef} viewW={dimensions.width} viewH={dimensions.height} />
        </motion.div>
        </div>
      </div>

      <MapRegionHoverTooltip tooltip={tooltip} />

      <aside
        className="pointer-events-auto fixed left-2 top-[5.25rem] z-40 max-h-[380px] w-[10.75rem] overflow-y-auto overscroll-contain rounded-xl border border-slate-200/70 bg-white/95 p-2 shadow-lg shadow-slate-900/10 backdrop-blur-sm sm:left-3 sm:top-[5.5rem] sm:max-h-[440px] sm:w-52 sm:rounded-2xl sm:p-2.5 md:left-4 md:max-h-[480px] md:p-3 lg:max-h-[520px]"
        aria-label="Leyenda del mapa"
      >
        <h4 className="mb-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500">
          Regiones
        </h4>
        <div className="flex flex-col gap-0.5">
          {regions.map((region) => {
            const active = selectedRegion?.id === region.id;
            return (
              <button
                key={region.id}
                type="button"
                className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2 py-2 text-left text-[0.8125rem] leading-snug transition-colors sm:text-sm ${
                  active
                    ? 'bg-slate-100 font-semibold text-emerald-800 ring-1 ring-slate-200/90'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                }`}
                onClick={() => onRegionClick(region)}
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-md shadow-sm ring-1 ring-black/[0.06]"
                  style={{ background: regionColors[region.id] }}
                  aria-hidden
                />
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>
      </aside>
      </div>
    </div>
  );
}
