import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { ethnicities, regions } from '../src/data/ethnicities.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const readmePath = join(__dirname, '..', 'README.md');

const README_FOOTER = `

- [ONIC - Organización Nacional Indígena de Colombia](https://www.onic.org.co/pueblos)
- [Ministerio de Cultura - Lenguas Nativas de Colombia](http://www.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Paginas/default.aspx)
- [Ministerio del Interior - Pueblos Indígenas](https://www.mininterior.gov.co/)
- DANE - Censo Nacional de Población 2018

---

## Tecnologías

- React
- D3.js
- Vite
- Framer Motion

Para volver a generar la sección **Pueblos incluidos en la aplicación** y **Familias lingüísticas** a partir de \`src/data/ethnicities.js\`:

\`\`\`bash
node scripts/gen-readme-pueblos.mjs
\`\`\`
`;

const regionName = (id) => regions.find((r) => r.id === id)?.name ?? id;
const sorted = [...ethnicities].sort((a, b) =>
  a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
);

let blocks = '';
for (const e of sorted) {
  blocks += `### ${e.name}\n\n`;
  blocks += `- **ID en la app:** \`${e.id}\`\n`;
  blocks += `- **Región (macro en la app):** ${regionName(e.region)}\n`;
  blocks += `- **Departamentos:** ${e.departments.join(', ')}\n`;
  blocks += `- **Ubicación (resumen):** ${e.location}\n`;
  blocks += `- **Población (dato usado en la app):** ${e.population.toLocaleString('es-CO')} personas\n`;
  blocks += `- **Lengua:** ${e.language}\n`;
  blocks += `- **Familia lingüística:** ${e.languageFamily}\n`;
  blocks += `- **Estado lingüístico (en la app):** ${e.status}\n`;
  blocks += `- **Descripción breve:** ${e.description}\n\n`;
}

const intro = `# Culturas de Colombia - Pueblos Indígenas

Aplicación interactiva que muestra pueblos indígenas de Colombia en un mapa (React, D3, Vite).

## Contexto nacional

Según el DANE (Censo 2018), Colombia reconoce oficialmente **115 pueblos indígenas** (frente a 93 en el censo de 2005). La [ONIC](https://www.onic.org.co/) es la principal organización que representa a estos pueblos.

**Esta aplicación** incluye en \`src/data/ethnicities.js\` **${ethnicities.length} pueblos** modelados con datos de muestra (coordenadas, población, estado, descripción, etc.). La lista siguiente coincide exactamente con esos registros: no incluye pueblos que solo están en el README o que no existen en el código.

---

## Pueblos incluidos en la aplicación (${ethnicities.length})

Los textos descriptivos de la app son orientativos; para datos oficiales consulta ONIC, MinCultura y DANE.

`;

const familias = `---

## Familias lingüísticas (agrupación aproximada)

Resumen derivado de los campos \`languageFamily\` de la app (puede haber matices académicos):

`;

// Build family -> names from data
const byFamily = new Map();
for (const e of ethnicities) {
  const f = e.languageFamily || 'Sin clasificar';
  if (!byFamily.has(f)) byFamily.set(f, []);
  byFamily.get(f).push(e.name);
}
const familyLines = [...byFamily.entries()]
  .sort((a, b) => a[0].localeCompare(b[0], 'es'))
  .map(([fam, names], i) => {
    const uniq = [...new Set(names)].sort((a, b) => a.localeCompare(b, 'es'));
    return `${i + 1}. **${fam}** — ${uniq.join(', ')}`;
  })
  .join('\n');

const out =
  intro +
  blocks +
  familias +
  familyLines +
  '\n\n---\n\n## Fuentes' +
  README_FOOTER;

writeFileSync(readmePath, out, 'utf8');
console.log('README updated,', ethnicities.length, 'pueblos');
