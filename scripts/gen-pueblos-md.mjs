import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { ethnicities, regions, getStatusCounts, getTotalPopulation } from '../src/data/ethnicities.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'PUEBLOS.md');

const regionName = (id) => regions.find((r) => r.id === id)?.name ?? id;

const sorted = [...ethnicities].sort((a, b) =>
  a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
);

function anchorFromId(id) {
  return id;
}

let indexMd = '';
sorted.forEach((e, i) => {
  indexMd += `${i + 1}. [${e.name}](#${anchorFromId(e.id)})\n`;
});

let detailMd = '';
for (const e of sorted) {
  const coords =
    e.coordinates && Number.isFinite(e.coordinates.lat) && Number.isFinite(e.coordinates.lng)
      ? `${e.coordinates.lat}, ${e.coordinates.lng}`
      : '—';
  const trad = (e.traditions || []).map((t) => `- ${t}`).join('\n') || '—';
  const crafts = (e.crafts || []).map((c) => `- ${c}`).join('\n') || '—';

  detailMd += `## ${e.name}\n\n`;
  detailMd += `**ID (aplicación):** \`${e.id}\`\n\n`;
  detailMd += `**Región natural (macro en la app):** ${regionName(e.region)}\n\n`;
  detailMd += `**Departamentos:** ${e.departments.join(', ')}\n\n`;
  detailMd += `**Ubicación (resumen):** ${e.location}\n\n`;
  detailMd += `**Coordenadas aproximadas (punto en el mapa de la app):** ${coords}\n\n`;
  detailMd += `**Población (dato usado en la app):** ${e.population.toLocaleString('es-CO')} personas\n\n`;
  detailMd += `**Lengua:** ${e.language}\n\n`;
  detailMd += `**Familia lingüística:** ${e.languageFamily}\n\n`;
  detailMd += `**Estado lingüístico (categoría en la app):** ${e.status}\n\n`;
  detailMd += `**Descripción:** ${e.description}\n\n`;
  if (e.otherNames) detailMd += `**Otros nombres:** ${e.otherNames}\n\n`;
  if (e.locationDetail) detailMd += `**Ubicación (detalle):** ${e.locationDetail}\n\n`;
  if (e.populationSource) detailMd += `**Población (fuente):** ${e.populationSource}\n\n`;
  if (e.languageDetail) detailMd += `**Lengua (detalle):** ${e.languageDetail}\n\n`;
  if (e.culture) detailMd += `**Cultura:**\n\n${e.culture}\n\n`;
  if (e.economy) detailMd += `**Economía:** ${e.economy}\n\n`;
  detailMd += `**Tradiciones:**\n${trad}\n\n`;
  detailMd += `**Artesanías y oficios:**\n${crafts}\n\n`;
  detailMd += `---\n\n`;
}

const byFamily = new Map();
for (const e of ethnicities) {
  const f = e.languageFamily || 'Sin clasificar';
  if (!byFamily.has(f)) byFamily.set(f, []);
  byFamily.get(f).push(e.name);
}
const famLines = [...byFamily.entries()]
  .sort((a, b) => a[0].localeCompare(b[0], 'es'))
  .map(([fam, names], i) => {
    const uniq = [...new Set(names)].sort((a, b) => a.localeCompare(b, 'es'));
    return `${i + 1}. **${fam}** — ${uniq.join(', ')}`;
  })
  .join('\n\n');

const counts = getStatusCounts();
const totalPop = getTotalPopulation();

const statsTable = `| Categoría | Valor (según datos de la app) |
|-----------|-------------------------------|
| Pueblos en este documento | ${ethnicities.length} |
| Población total (suma de registros en app) | ${totalPop.toLocaleString('es-CO')} |
| Categoría «Vulnerable» | ${counts['Vulnerable'] ?? 0} |
| Categoría «En peligro» | ${counts['En peligro'] ?? 0} |
| Categoría «En peligro crítico» | ${counts['En peligro crítico'] ?? 0} |`;

const md = `# Pueblos Indígenas de Colombia — Información completa (app)

Referencias institucionales: [ONIC — Organización Nacional Indígena de Colombia](https://www.onic.org.co/pueblos).

**Fuente única:** \`src/data/ethnicities.js\`. Mapa, modales, tarjetas y este \`PUEBLOS.md\` leen los mismos campos (incl. coordenadas del punto en el mapa, departamentos, población, tradiciones y artesanías). Colombia reconoce alrededor de **115** pueblos (referencia DANE/ONIC); aquí hay **${ethnicities.length}** modelados en código. Para **añadir un pueblo**, crea un objeto en el arreglo \`ethnicities\` y ejecuta \`node scripts/gen-pueblos-md.mjs\` (y, si quieres, \`node scripts/gen-readme-pueblos.mjs\`). Los datos son **orientativos**; para censos oficiales consulta **DANE**, **MinInterior** y **ONIC**.

---

## Índice de pueblos (${ethnicities.length})

${indexMd}
---

## Información detallada por pueblo

${detailMd}

## Familias lingüísticas (según \`languageFamily\` en la app)

Agrupación derivada del código; la clasificación académica puede variar.

${famLines}

---

## Fuentes y referencias

### Fuentes institucionales

- [ONIC — Pueblos](https://www.onic.org.co/pueblos)
- [Ministerio de Cultura — Lenguas nativas](http://www.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Paginas/default.aspx)
- [Ministerio del Interior — Pueblos indígenas](https://www.mininterior.gov.co/)
- DANE — Censo Nacional de Población (2005, 2018)

### Fuentes académicas y compilaciones

- Arango, Raúl y Sánchez, Enrique. *Los pueblos indígenas de Colombia* (1997)
- Romero, María Victoria y otras obras de geografía humana de Colombia
- Reichel-Dolmatoff, Gerardo — estudios sobre cultura colombiana

### Enlaces útiles

- [Ethnologue](https://www.ethnologue.com)
- [UNESCO — Atlas de lenguas en peligro](https://www.unesco.org/languages-atlas/)
- [CRIC](http://www.cric-colombia.org/)

---

## Estadísticas (datos agregados de la app)

${statsTable}

Colombia reconoce oficialmente un número mayor de pueblos (p. ej. **115** según referencias al censo DANE 2018); esta tabla solo refleja el subconjunto implementado en el código.

---

## Nota importante

- Regenerar este archivo tras cambiar \`ethnicities.js\`:

\`\`\`bash
node scripts/gen-pueblos-md.mjs
\`\`\`

- Los textos largos tipo ONIC que había en versiones anteriores de \`PUEBLOS.md\` no se mezclan aquí automáticamente; si necesitas el relato institucional completo, combina esta ficha técnica con [onic.org.co/pueblos](https://www.onic.org.co/pueblos).

---

*Generado para el proyecto Culturas de Colombia — alinear con \`src/data/ethnicities.js\`.*
`;

writeFileSync(outPath, md, 'utf8');
console.log('PUEBLOS.md written,', ethnicities.length, 'pueblos');
