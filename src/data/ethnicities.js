export const regions = [
  {
    id: 'amazonia-norte',
    name: 'Región Amazónica Norte',
    mapLabel: 'Amazonía N.',
    color: '#0f766e',
    departments: ['Guainía', 'Guaviare', 'Vaupés'],
    coordinates: { lat: 1.2, lng: -70.5 },
    description:
      'Parte del río Amazonas: selva tropical sobre pocas elevaciones; los ríos son la principal vía de transporte y comunicación (el Vaupés es central). Predominan lenguas de la familia Tucano; es frecuente el matrimonio exógamo y hogares bilingües, donde la madre transmite su lengua a los hijos.'
  },
  {
    id: 'amazonia-sur',
    name: 'Región Amazónica Sur',
    mapLabel: 'Amazonía S.',
    color: '#15803d',
    departments: ['Amazonas', 'Caquetá', 'Putumayo'],
    coordinates: { lat: -0.3, lng: -73.5 },
    description:
      'Al sur del río Apaporis, con geografía afín a la Amazonía norte. Las vías fluviales principales son los ríos Caquetá, Putumayo y Amazonas. Concentra pueblos de lenguas como Huitoto, Ticuna, Bora y otras familias amazónicas.'
  },
  {
    id: 'andina-sur',
    name: 'Región Andina Sur',
    mapLabel: 'Andina sur',
    color: '#059669',
    departments: ['Cauca', 'Valle del Cauca', 'Nariño', 'Huila', 'Tolima', 'Cundinamarca', 'Caldas', 'Risaralda', 'Quindío'],
    coordinates: { lat: 2.8, lng: -76.5 },
    description:
      'Cordillera de los Andes: tierras frías donde muchas comunidades cultivan papa, cebolla, habas, oca y crían vacunos, cuyes, cerdos y aves. Incluye el eje caucana-nariñense y el valle alto del Magdalena.'
  },
  {
    id: 'pacifica',
    name: 'Región Pacífica',
    mapLabel: 'Pacífico',
    color: '#2563eb',
    departments: ['Chocó'],
    coordinates: { lat: 5.2, lng: -76.8 },
    description:
      'Limitada al occidente por el Pacífico y al oriente por la Cordillera Occidental: selva tropical húmeda y suelos frecuentemente pantanosos. Predominan pueblos de la familia lingüística chocó con fuertes vínculos culturales y lingüísticos entre sí.'
  },
  {
    id: 'andina-norte-caribe',
    name: 'Región Andina Norte y Caribe',
    mapLabel: 'Norte / Caribe',
    color: '#d97706',
    departments: [
      'La Guajira',
      'Magdalena',
      'Cesar',
      'Norte de Santander',
      'Santander',
      'Antioquia',
      'Córdoba',
      'Sucre',
      'Bolívar',
      'Atlántico',
      'Boyacá'
    ],
    coordinates: { lat: 8.5, lng: -73.5 },
    description:
      'No constituye una sola unidad geográfica: abarca cordillera, Sierra del Perijá, Sierra Nevada de Santa Marta y la costa Caribe. Hay afinidad lingüística y cultural en torno a la familia Chibcha y otras tradiciones del norte del país.'
  },
  {
    id: 'llanos-orientales',
    name: 'Región Llanos Orientales',
    mapLabel: 'Llanos',
    color: '#7c3aed',
    departments: ['Arauca', 'Vichada', 'Casanare', 'Meta'],
    coordinates: { lat: 5.0, lng: -71.0 },
    description:
      'Planicie de la cuenca del Orinoco, cubierta de sabana con selva en riberas de ríos y caños. El Meta la cruza de sureste a noreste. Las poblaciones suelen ubicarse donde hay buena pesca y caza; predominan lenguas de la familia Guahíbo y el pueblo guahibo es el más numeroso de la zona.'
  }
];

export const departments = [
  { id: '05', name: 'Antioquia', region: 'andina-norte-caribe', coordinates: { lat: 6.5, lng: -75.5 }, population: 6636000 },
  { id: '08', name: 'Atlántico', region: 'andina-norte-caribe', coordinates: { lat: 10.7, lng: -74.9 }, population: 2803283 },
  { id: '13', name: 'Bolívar', region: 'andina-norte-caribe', coordinates: { lat: 9.5, lng: -75.5 }, population: 2147000 },
  { id: '15', name: 'Boyacá', region: 'andina-norte-caribe', coordinates: { lat: 5.5, lng: -73.5 }, population: 1276000 },
  { id: '17', name: 'Caldas', region: 'andina-sur', coordinates: { lat: 5.2, lng: -75.2 }, population: 998000 },
  { id: '18', name: 'Caquetá', region: 'amazonia-sur', coordinates: { lat: 1.0, lng: -74.5 }, population: 490000 },
  { id: '19', name: 'Cauca', region: 'andina-sur', coordinates: { lat: 2.5, lng: -77.0 }, population: 1489000 },
  { id: '20', name: 'Cesar', region: 'andina-norte-caribe', coordinates: { lat: 9.5, lng: -73.5 }, population: 1098000 },
  { id: '27', name: 'Chocó', region: 'pacifica', coordinates: { lat: 5.5, lng: -76.8 }, population: 520000 },
  { id: '23', name: 'Córdoba', region: 'andina-norte-caribe', coordinates: { lat: 8.0, lng: -75.8 }, population: 1808000 },
  { id: '25', name: 'Cundinamarca', region: 'andina-sur', coordinates: { lat: 4.8, lng: -74.2 }, population: 3409000 },
  { id: '94', name: 'Guainía', region: 'amazonia-norte', coordinates: { lat: 2.5, lng: -68.5 }, population: 42000 },
  { id: '95', name: 'Guaviare', region: 'amazonia-norte', coordinates: { lat: 2.0, lng: -72.0 }, population: 115000 },
  { id: '41', name: 'Huila', region: 'andina-sur', coordinates: { lat: 2.5, lng: -75.5 }, population: 1150000 },
  { id: '44', name: 'La Guajira', region: 'andina-norte-caribe', coordinates: { lat: 11.5, lng: -72.5 }, population: 880000 },
  { id: '47', name: 'Magdalena', region: 'andina-norte-caribe', coordinates: { lat: 10.0, lng: -74.2 }, population: 1385000 },
  { id: '50', name: 'Meta', region: 'llanos-orientales', coordinates: { lat: 4.0, lng: -73.5 }, population: 1053000 },
  { id: '52', name: 'Nariño', region: 'andina-sur', coordinates: { lat: 1.5, lng: -78.0 }, population: 1608000 },
  { id: '54', name: 'Norte de Santander', region: 'andina-norte-caribe', coordinates: { lat: 7.8, lng: -72.5 }, population: 1608000 },
  { id: '86', name: 'Putumayo', region: 'amazonia-sur', coordinates: { lat: 0.5, lng: -76.0 }, population: 345000 },
  { id: '63', name: 'Quindío', region: 'andina-sur', coordinates: { lat: 4.5, lng: -75.7 }, population: 580000 },
  { id: '66', name: 'Risaralda', region: 'andina-sur', coordinates: { lat: 5.0, lng: -76.0 }, population: 945000 },
  { id: '68', name: 'Santander', region: 'andina-norte-caribe', coordinates: { lat: 7.0, lng: -73.0 }, population: 2084000 },
  { id: '70', name: 'Sucre', region: 'andina-norte-caribe', coordinates: { lat: 9.3, lng: -75.4 }, population: 870000 },
  { id: '81', name: 'Arauca', region: 'llanos-orientales', coordinates: { lat: 6.5, lng: -71.5 }, population: 262000 },
  { id: '85', name: 'Casanare', region: 'llanos-orientales', coordinates: { lat: 5.5, lng: -72.5 }, population: 420000 },
  { id: '97', name: 'Vaupés', region: 'amazonia-norte', coordinates: { lat: 1.0, lng: -70.5 }, population: 44000 },
  { id: '91', name: 'Amazonas', region: 'amazonia-sur', coordinates: { lat: -1.5, lng: -72.0 }, population: 79000 },
  { id: '99', name: 'Vichada', region: 'llanos-orientales', coordinates: { lat: 5.0, lng: -69.5 }, population: 115000 },
  { id: '73', name: 'Tolima', region: 'andina-sur', coordinates: { lat: 4.0, lng: -75.2 }, population: 1331000 },
  { id: '76', name: 'Valle del Cauca', region: 'andina-sur', coordinates: { lat: 3.8, lng: -76.5 }, population: 4576000 }
];

export const ethnicities = [
  {
    id: 'achagua',
    name: 'Achagua',
    region: 'llanos-orientales',
    departments: ['Meta', 'Casanare'],
    coordinates: { lat: 4.2, lng: -72.8 },
    population: 796,
    language: 'Achagua',
    languageFamily: 'Arawak',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description:
      'Pueblo indígena de la familia lingüística Arawak en los llanos orientales; habitan los resguardos de Umapo y El Turpial y mantienen vínculos lingüísticos con los piapoco.',
    otherNames: 'Achagua, ajagua, xagua, «gente del río».',
    locationDetail:
      'Resguardos de Umapo y El Turpial, en el municipio de Puerto López (Meta) y algunas familias en La Hermosa (Casanare).',
    populationSource: 'Su población se estima en 796 individuos (DANE 2005).',
    languageDetail:
      'Achagua. Pertenece a la familia lingüística Arawak. El uso de su idioma tiene prioridad sobre el español; por su continua relación con los piapoco hablan también esta lengua. La lengua fue clasificada por el programa de protección a la diversidad etnolingüística del Ministerio de Cultura entre las 19 lenguas que están en serio peligro de extinción.',
    culture:
      'A partir del siglo XVIII han sido fuertemente afectados por la actividad misionera evangélica y por la expansión de la colonización. A pesar del proceso de reelaboración cultural y apropiación de nuevos elementos, conservan sus rituales en donde se utiliza plantas psicotrópicas, esenciales para sus ceremonias.\n\nEn los grupos Achagua prevalece un tipo de organización familiar fundada en la autoridad del suegro. La unidad de producción y consumo y la unidad residencial están constituidas generalmente por una pareja adulta, los hijos e hijas jóvenes y las hijas casadas, con sus respectivas familias. Con el crecimiento del grupo, los yernos tienden a construir viviendas separadas.',
    economy:
      'Su actividad principal es la agricultura. Cultivan especialmente la yuca amarga (áliri), de la que extraen el almidón para fabricar casabe (beri, tortilla) y fariña (harina tostada). También producen maíz (kana). Durante el verano, la pesca y en menor escala la caza tienen importancia. La artesanía es otra actividad destacada.',
    traditions: ['Rituales con plantas psicotrópicas', 'Ceremonias de curación', 'Sistema de parentesco'],
    crafts: ['Canastos', 'Hamacas', 'Artesanía en fibra'],
    location: 'Puerto López (Meta); familias en La Hermosa (Casanare)'
  },
  {
    id: 'amobalo',
    name: 'Ambaló',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.8, lng: -76.5 },
    population: 2749,
    language: 'Namtrik',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Resguardo namtrik en el Cauca, en alturas sobre 3.800 m.',
    otherNames: 'Ambaló.',
    locationDetail:
      'La comunidad indígena de Ambaló se encuentra ubicada en cercanías de los cerros Crestegallo, Puzna y Gallinazo, cuyas alturas sobrepasan los 3.800 m de altitud. Asentados en nueve veredas.',
    populationSource:
      '825 familias, o 2.749 personas: 1.372 hombres (49,70%) y 1.377 mujeres (50,30%).',
    languageDetail:
      'Namtrik. Pertenece a la familia lingüística Chibcha. De toda la población, 401 personas hablan el castellano y el nativo; el resto (2.348 personas) habla únicamente el castellano.',
    culture:
      'Cuentan los mayores que el pueblo de Ambaló se origina a partir de la unión del Trueno y la Laguna Brava, espíritus mayores que, al unirse, fecundan y dan origen a un cacique. La autoridad tradicional ha reafirmado su pensamiento, identidad y cultura; ha construido caminos, mandatos y políticas de resistencia, autonomía y control territorial.',
    economy:
      'La actividad económica se basa principalmente en la ganadería y la agricultura.',
    traditions: ['Sistema de autoridad tradicional', 'Recuperación de lengua y cultura', 'Plan de Vida comunitario'],
    crafts: ['Tejidos', 'Cestería', 'Trabajos en lana'],
    location: 'Resguardo Ambaló, Cauca'
  },
  {
    id: 'amorua',
    name: 'Amorúa',
    region: 'llanos-orientales',
    departments: ['Casanare', 'Vichada'],
    coordinates: { lat: 5.5, lng: -70.5 },
    population: 178,
    language: 'Guahíbo',
    languageFamily: 'Guahíbo',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Wipiwe, Siripu, Mariposa. Grupo Guahíbo en los llanos orientales.',
    otherNames: 'Wipiwe, Siripu, Mariposa.',
    locationDetail:
      'Municipio de Paz de Ariporo, Casanare, en la localidad de El Merey-La Guagilla. También en La Esmeralda sobre el caño Aguaclara. Conviven con Guahibo-Sikuani en la reserva Guáripa-La Hormiga, en Vichada.',
    populationSource:
      'La población estimada es de 178 personas, repartidas en un perímetro de 94.670 hectáreas, que hacen parte del resguardo Caño Mochuelo.',
    languageDetail:
      'Pertenece a la familia lingüística Guahíbo.',
    culture:
      'El chamán es el principal personaje de la vida ritual y espiritual. El yopo es la principal planta psicotrópica. El "rezo del pescado" es una ceremonia de iniciación y bautizo. El Itomo es parte del ciclo de ceremonias del segundo enterramiento.',
    economy:
      'La yuca es el cultivo principal. Siembran plátanos, piña, fríjol, batata, ñame y frutales. La Yalaki es una bebida elaborada a partir de la yuca amarga.',
    traditions: ['Ritual del "rezo del pescado"', 'Ceremonia Itomo', 'Uso del Yopo'],
    crafts: ['Cestería', 'Elaboración de hamacas', 'Trabajos en fibra'],
    location: 'Casanare y Vichada'
  },
  {
    id: 'andoque',
    name: 'Andoque',
    region: 'amazonia-sur',
    departments: ['Caquetá', 'Amazonas'],
    coordinates: { lat: -0.5, lng: -72.5 },
    population: 597,
    language: 'Andoque',
    languageFamily: 'Andoque',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description:
      '«La gente del hacha» en la región de Araracuara y el medio Caquetá; historia marcada por la cauchería y un proceso de reconstrucción étnica en torno a la maloka y el ritual Yuruparí.',
    otherNames: 'Andoque «la gente del hacha» — andoque, cha\'oie, businka.',
    locationDetail:
      'Se localizan en la región del Araracuara, caño Aduche, muy cerca de la ribera del medio río Caquetá, al sur de la Amazonía colombiana. Existen algunos asentamientos en la región peruana del río Ampi-Yacu.',
    populationSource:
      'La población fue rápidamente diezmada por efectos de la explotación cauchera que se dio en décadas pasadas. De los casi 10 mil habitantes que existían, ahora solo se tienen registros de 597 personas.',
    languageDetail:
      'El andoque es una lengua indígena americana hablada por unos pocos centenares de indígenas Andoque en el curso del río Caquetá en Colombia, y actualmente en declive en cuanto a número de hablantes.\n\nEn 2000 se censó que había 610 hablantes en el área del río Anduche, aguas abajo de Araracuara (Amazonas, Colombia); 50 de ellos eran monolingües en dicha lengua. Anteriormente la lengua también se había hablado extendido por Perú. El 80% de los hablantes hablan fluidamente español.',
    culture:
      'Ocupaban tradicionalmente un amplio territorio que se extendía desde la quebrada Monochoa, arriba del caño del Araracuara hasta la quebrada Quinche, ambas afluentes del río Caquetá. Se dividían en linajes relativamente autónomos que comprendían más de 10.000 personas; cada linaje vivía en una maloka, epicentro de la vida social, espacial y ceremonial del grupo.\n\nEvidencias etnohistóricas hablan de extensas redes de intercambio entre los grupos de la región que habitaban distintos medios ambientes. Los andoque proveían hachas de piedra, excavadas en su territorio en el marco de rituales complejos que situaban esta actividad en un lugar importante dentro de su cosmovisión e identidad étnica. La escasez de la piedra en el área así como el acceso a estas herramientas otorgaba al grupo una posición privilegiada para el intercambio.\n\nSi bien las expediciones de conquista y colonia del territorio en el siglo XVII a cargo de españoles, portugueses y franciscanos produjeron grandes cambios en el territorio amazónico, el ciclo de «la cauchería» a principios del siglo XX se constituyó en el hito más significativo en su historia, generando profundas transformaciones y adaptaciones en su vida cultural. Como resultado de esta actividad no solo desapareció la mayor parte de la población, sino que también se introdujeron masivamente instrumentos de metal y mercancías, se adoptaron nuevos sistemas económicos y se promovieron modelos diferentes de autoridad.\n\nTras el etnocidio, los traslados forzosos de la población al río Ampi-Yacu y la desarticulación de la sociedad, los pocos sobrevivientes iniciaron un complejo proceso de reconstrucción étnica que actualmente continúa vigente. Bajo este marco, una vez finalizada la época de la casa Arana y el conflicto colombo-peruano, los miembros de cada linaje construyeron nuevas malokas, formaron unidades exógamas y patrilocales con su propio nombre y, como estrategia demográfica, integraron personas de otros grupos étnicos. Su actividad económica continuó siendo la extracción del caucho, incorporando la figura del patrón dentro de su organización sociopolítica y cosmológica.\n\nHistóricamente los andoque y otros grupos de la región se han visto afectados por los distintos procesos de colonización, expansión de la frontera agrícola y extracción de recursos naturales, entre ellos el cacao, la quina y el caucho. Asimismo, la inserción reciente de la región al sistema de economía de mercado ha configurado las dinámicas culturales de la etnia y de su territorio.\n\nPara la mayoría de pueblos que habitan la región del Amazonas, el uso de plantas sagradas se constituye en un elemento fundamental dentro de su vida cultural y social. El Yuruparí es el ritual más trascendental porque rememora los orígenes y revive los elementos esenciales de su cosmovisión.',
    economy:
      'Los andoque basan su sistema de producción en actividades como la agricultura, la pesca, la caza y recolección, así como la explotación maderera en menor escala. Los cultivos principales son la yuca brava, la yuca dulce, el plátano y la piña. En años recientes la colonización ha contribuido a que los andoque introduzcan cultivos semipermanentes como el banano, la caña y el maíz.\n\nEn su resguardo existen actualmente tres malokas donde viven las personas de más alto rango. Alrededor de ellas se agrupan las viviendas de las familias extensas pertenecientes a los respectivos clanes patrilineales. Gavilán, Venado, Sol, Hormiga Arriera y Cucarrón son los clanes consolidados hoy en día. Dentro de su cosmovisión, la maloka continúa siendo el espacio de confluencia de las estructuras sociales, económicas, culturales y rituales de la comunidad. En lo social la autoridad recae sobre el «maloquero», quien tiene a su cargo la dirección de la vida ritual.',
    traditions: ['Ritual Yuruparí', 'Maloka como centro ceremonial', 'Sistema de clanes'],
    crafts: ['Canastos', 'Cucharas talladas', 'Trabajos en madera'],
    location: 'Araracuara, medio Caquetá; Ampi-Yacu (Perú)'
  },
  {
    id: 'andakies',
    name: 'Andakies',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.6, lng: -76.6 },
    population: 500,
    language: 'Paez',
    languageFamily: 'Paez',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Pueblo indígena de la familia lingüística Paez en el departamento del Cauca.',
    otherNames: 'Andakies, Andakí.',
    locationDetail:
      'Ubicados en el departamento del Cauca, en la región andina sur.',
    populationSource:
      'Su población se estima aproximadamente en 500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Paez (Nasa Yuwe). La lengua se transmite principalmente en el ámbito familiar, aunque su uso está en decline entre las nuevas generaciones.',
    culture:
      'El pueblo Andakies ha mantenido tradiciones culturales vinculadas a la agricultura de subsistencia en las tierras frías del Cauca. Practican la medicina ancestral y mantienen danzas tradicionales que hacen parte de sus rituales comunitarios.',
    economy:
      'Su actividad económica principal es la agricultura de subsistencia, cultivando productos de clima frío como papa, cebolla, habas y otros alimentos tradicionales de la región andina.',
    traditions: ['Danza tradicional', 'Medicina ancestral', 'Agricultura de subsistencia'],
    crafts: ['Tejidos', 'Cestería', 'Artesanía en bambú'],
    location: 'Cauca'
  },
  {
    id: 'awa',
    name: 'Awá',
    region: 'andina-sur',
    departments: ['Nariño', 'Putumayo'],
    coordinates: { lat: 1.2, lng: -77.5 },
    population: 25813,
    language: 'Awapít',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description:
      'Pueblo binacional en el suroccidente colombiano (Nariño y Putumayo); lengua awapít, familia chibcha; asentamientos dispersos a lo largo de ríos entre terrazas de cultivo y áreas de caza.',
    otherNames: 'Awá «la gente de la montaña», «la gente de la selva» — Awá, cuaiquer, kwaiker.',
    locationDetail:
      'Los Awá tienen una presencia binacional; se encuentran en Colombia y Ecuador. En Colombia se ubican en el suroccidente en los municipios de Cumbal, Santa Cruz de Guachavez, Mallama, Ricaurte, Barbacoas, Roberto Payán, Tumaco e Ipiales, en el departamento de Nariño, y en los municipios de Mocoa, Puerto Asís, Valle del Guamuez, San Miguel, La Dorada, Orito, Puerto Caicedo, Villa Garzón en el departamento del Putumayo.',
    populationSource:
      'Con una extensión aproximada de 3000 kilómetros cuadrados, la etnia se caracteriza por asentamientos dispersos que siguen la corriente de los ríos. Su población está estimada en 25.813 personas (DANE, 2005, Censo Nacional de Población).\n\nLas condiciones climáticas hacen que las mayores concentraciones de población se ubiquen en la parte altitudinal de los 500 a 1.500 metros sobre el nivel del mar, pues los indígenas buscan las terrazas bajas para cultivar y construir sus viviendas, mientras la parte alta del macizo es área reservada para la caza.',
    languageDetail:
      'De la lengua Awapít, que pertenece a la familia lingüística Chibcha. Forma parte del dialecto Malla de los Sindaguas; emparentada con el Chá palaa (idioma de la Nacionalidad Chachi) y con el Tsa\'fíqui (idioma de la Nacionalidad Tsa\'chila).',
    culture:
      'Historia y origen\n\nEl origen de la etnia es incierto y confuso, pues los estudios arqueológicos demuestran que el litoral, tanto colombiano como ecuatoriano, estaba habitado por la cultura Tumaco. A la llegada de los españoles en 1525, las crónicas dan cuenta de grupos indígenas seminómadas con un grado de desarrollo muy bajo en relación a las otras etnias halladas en la región andina.\n\nDurante la colonia, los grupos de la región, denominados genéricamente como «Barbacoas», fueron agrupados en «pueblos de indios», de acuerdo al modelo hispánico de poblamiento. La presión colonizadora de la región aumentó significativamente al convertirse esta zona en uno de los principales yacimientos auríferos y centros portuarios —en el caso de Barbacoas—, situación que obligó a los indígenas a desplazarse fuera de su territorio tradicional.\n\nSu localización en uno de los ejes de comunicación entre el litoral y la meseta andina ha influido significativamente en la conformación de su territorio, el cual se ha visto afectado por los auges mineros, las guerras civiles, los procesos de colonización ganadera, maderera y de cultivos ilícitos, además de las grandes obras de infraestructura como la carretera hacia el mar. A partir de los años sesenta, cuando se intensificó la llegada de colonos, mineros y extractores de aceites de palma, muchos indígenas tuvieron que reiniciar los procesos migratorios.\n\nLa mayor concentración indígena se encuentra en el municipio de Ricaurte, debido en parte a las condiciones climáticas que permiten una mayor actividad agrícola. Estos mismos factores han favorecido la colonización de estas tierras y otras áreas en detrimento de los asentamientos indígenas, principalmente en las zonas cercanas a la carretera y centros de mercadeo, como es el caso de Talambí, Numbí, Puente Piedra, Pialapí, San Pablo, Cuayquer Viejo, Vegas y El Diviso.\n\nSobre la cultura Awá\n\nLa dinámica cultural en el pueblo Awá es primordialmente promovida por los mayores (hombres y mujeres) en su condición de custodios del conocimiento tradicional heredado y a su vez los puentes para la conexión espiritual de la comunidad. Su papel lo cumplen en forma de sabios, médicos tradicionales y guías espirituales.\n\nLos Awá tienen una gran influencia de los pueblos campesinos que habitan la región, la que afecta especialmente a las nuevas generaciones. Aspectos tradicionales, como el vestido, han ido desapareciendo con el correr de los tiempos. En la mayoría de asentamientos se conservan prácticas como la cestería, cuya elaboración sigue siendo a mano. En las regiones más pobres y apartadas todavía se fabrican utensilios en barro y madera, pero es muy común que ya no usen objetos de índole ancestral, pues han sido reemplazados por objetos occidentales como encendedores, vasijas plásticas, termos, molinos, etc. Dentro de su cosmovisión el mundo está poblado de seres sobrenaturales. La magia cumple un papel importante al igual que la práctica de los rituales católicos.',
    economy:
      'Aunque la caza fue su actividad de subsistencia tradicional, las condiciones desfavorables de su entorno los han obligado a desarrollar otras actividades económicas como la agricultura, la pesca y la crianza de animales domésticos. Su sistema agrícola se centra en la técnica de «tala y pudre». El principal producto es el maíz, el cual se combina con la siembra de yuca, fríjol, caña de azúcar y plátano. En las tierras no aptas para la agricultura, se recogen productos comestibles, plantas medicinales y madera para la construcción. La extracción de oro de aluvión ocupa un renglón complementario dentro de su economía.\n\nVivienda\n\nLa vivienda de los Awá sigue la línea de construcción que caracteriza a la región del Pacífico, es decir, viviendas aéreas. Su estructura consta de una alcoba, una cocina y un corredor muy amplio. Son viviendas hechas en hoja de palma de chonta y gualte, las cuales se machacan para formar una estera. El piso es hecho en madera y el techo tiene una amplia pendiente para evacuar el agua cuando llueve. En el espacio que queda debajo de la casa se recogen los animales domésticos.\n\nSu patrón de residencia se caracteriza por la dispersión de sus asentamientos a lo largo de los ríos. Viven en casas separadas entre sí, por varias horas de camino. Los asentamientos tienen un núcleo de casas perteneciente a las personas con lazos directos de consanguinidad, quienes a su vez ejercen funciones de dirección del asentamiento.',
    traditions: ['Cestería tradicional', 'Mayordomía', 'Sistema de conocimiento ancestral'],
    crafts: ['Canastas', 'Trabajos en palma', 'Artefactos de madera'],
    location: 'Suroccidente: Nariño y Putumayo (presencia también en Ecuador)'
  },
  {
    id: 'bara',
    name: 'Bará',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.8, lng: -70.5 },
    population: 208,
    language: 'Bará',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    description:
      '«Gente de paz» en el nordeste del Vaupés; lengua bará (waimaja y variantes), familia tucano oriental; cosmovisión centrada en la maloka y ceremonias como el Dabucurí.',
    otherNames: '«Gente de paz» — waimaja, posanga-mira. Barasana del Norte.',
    locationDetail:
      'El pueblo indígena Bará se ubica en la parte nordeste del Amazonas, exactamente en el departamento de Vaupés, ríos Colorado, Papuyurí, Yapú, Inambú, Macucú y Tiquié.',
    populationSource:
      'Su población se estima en 208 personas (DANE 2005). Están divididos en los siguientes clanes: Waimasa, Wamutañara, Pamoa, Bara, Wañaco y Bupua-Bara.',
    languageDetail:
      'Bará (waimaja, waimasa, waymasa, waimaha, barasano del norte). Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'En los últimos años no se han realizado estudios suficientes sobre la trayectoria de este grupo o sobre su situación actual. Sin embargo han sido clasificados en la etnografía como parte del llamado complejo cultural del Vaupés, característica que los asemeja a otros grupos cercanos, pertenecientes a la familia lingüística Tucano Oriental como los tatuyo, desano y wanano.\n\nDentro de su cosmovisión, cada especie de animales posee su maloka y su dueño. Después de la muerte, el alma se va para la maloka de los antepasados. La maloka es de uso exclusivo para la gente; por esta razón quienes no se consideran totalmente humanos, como es el caso de los recién nacidos o picados por las culebras, no pueden entrar hasta tanto el Chamán, figura de gran importancia en la comunidad, no les otorgue esta condición. De acuerdo a la etnografía, una de las ceremonias más destacadas era la del «Dabucurí» o ceremonia de intercambio, donde los visitantes traían carne y pescado y los anfitriones ofrecían cerveza de yuca.\n\nOrganización\n\nLa estructura sociopolítica del pueblo Bará responde a un complejo sistema de organización jerárquico, repartido en linajes patrilineales. Sin embargo, dicha estructura se viene modificando paulatinamente, debido a la presión de los colonos en la zona, que los han obligado a adoptar formas de organización totalmente opuestas a las tradicionales. Por ejemplo, en la antigüedad el poder recaía sobre el chamán o curaca, quien no solo regía los destinos espirituales de la etnia, sino que también tomaba todo tipo de decisiones de trascendencia. Su forma de organización política está sustentada en el cabildo, cuyos miembros son elegidos por un período de un año.',
    economy:
      'La economía de este grupo se basa en la horticultura de tala y quema, caza, pesca y recolección. Su principal cultivo es la yuca brava seguido del plátano, banano, ñame, batata, caña de azúcar, colorantes y plantas medicinales. También crían gallinas para el comercio y algunas aves silvestres de las que utilizan sus plumas para decoraciones en los rituales. Para la pesca utilizan el anzuelo, arcos, flechas y trampas. Cultivar las plantas alucinógenas es siempre oficio masculino, mientras la cestería y todo lo relacionado con la madera, y la alfarería es exclusividad de las mujeres.\n\nVivienda\n\nPara mediados de los ochenta, este grupo vivía aún en malokas y en aldeas nucleares de 12 a 60 personas. Es posible que en la actualidad, al igual que otros pueblos de la región, hayan adoptado el modelo del poblado donde las viviendas se agrupan alrededor de una maloka, una escuela y una cancha de fútbol.',
    traditions: ['Ceremonia Dabucurí', 'Sistema de linajes', 'Maloka ceremonial'],
    crafts: ['Cestería', 'Alfarería', 'Trabajos en madera'],
    location: 'Vaupés: ríos Colorado, Papuyurí, Yapú, Inambú, Macucú y Tiquié'
  },
  {
    id: 'barasana',
    name: 'Barasana',
    region: 'amazonia-norte',
    departments: ['Vaupés', 'Amazonas'],
    coordinates: { lat: 0.5, lng: -70.8 },
    population: 350,
    language: 'Barasana-taiwano',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800',
    description:
      'Barasano del sur (Janera, Panera) en el Pirá-Paraná y resguardo Parte Oriental del Vaupés; lengua barasana-taiwano, familia tucano oriental; economía de chagra, yajé y alianza con los makuna.',
    otherNames:
      'Barasano del sur, eduria, yebá-masã, yepa-mahsã, yepá-matsó, hanerã (o janena), paneroa, komea, teiuana (o taiwano), banera yae, hanera oka.',
    locationDetail:
      'Amazonía: Colombia y Brasil. Su territorio está comprendido en el resguardo Parte Oriental del Vaupés; viven en el caño Colorado y el río Pirá-Paraná. Este pueblo también es conocido como barasana del sur, Janera o Panera.',
    populationSource:
      'Su población se estima en 350 individuos. Se encuentran dispersos en varios departamentos del país. La mayor concentración la encontramos en el municipio de Mitú (Vaupés), con un total de 162 indígenas, seguido del municipio de Leticia (Amazonas), con 40 personas. La distribución por género corresponde a 177 hombres y 173 mujeres. Es uno de los pueblos que se distingue por su baja densidad de población. Hay población barasana en otras regiones del país (Valle, Guaviare, Meta), aunque en cantidad muy reducida en comparación con los principales asentamientos.',
    languageDetail:
      'Barasana-taiwano.\n\nSu lengua pertenece a la familia Tucano Oriental, característica que los agrupa en el llamado complejo de la región del resguardo Parte Oriental del Vaupés (caño Colorado, río Pirá-Paraná). Es una de las 15 lenguas de la familia tucano oriental; entre ellas se encuentran bara, barasana-taiwano, carapana, desano, kubeo, makuna, tatuyo, tukano, tuyuka, wanano, yurutí y pisamira.',
    culture:
      'El vestido tradicional, la música y los instrumentos como la marimba, los bombos, las flautas y cununos, la medicina tradicional, las técnicas de producción en la agricultura, la pesca, la caza y la cría de especies animales, hacen parte de su identidad.\n\nCuentan los ancianos que, en el principio de la humanidad, la culebra anaconda subió por el río y fue dejando los distintos grupos que hoy viven en la selva del Vaupés. Desde entonces, los Barasana del Pirá-Paraná han vivido en la selva, descubriendo poco a poco sus secretos, sin destruir la vida de las especies vegetales y animales. Por la selva surcan muchos ríos. Son gente de canoas, arpones, trampas y anzuelos. Entre los árboles de la selva aprenden a escoger aquel que transformarán en canoa.\n\nEl mito entre los barasana relaciona su vida cotidiana con el mundo de los héroes y de los seres de la naturaleza, ordenando el mundo de manera inteligible. La simbología es altamente sexualizada. En las fiestas se baila, se recitan mitos y se toman alucinógenos. Las flautas secretas «Yuruparí» se destacan por su importancia dentro de las festividades y ceremonias.\n\nVivienda\n\nLos barasana viven en asentamientos multiétnicos. Sin embargo, como es el caso de Piedra Ñi, éstos muchas veces se reubican en función de las tensiones interétnicas y las ofertas del territorio. Tradicionalmente, la maloka rectangular era el centro de la organización social, económica y ceremonial. En los últimos años se ha adoptado el patrón de viviendas nucleadas alrededor de una maloka.\n\nOrganización\n\nTradicionalmente la autoridad principal es el jefe de la maloka; sin embargo, existen otros personajes que cumplen funciones religiosas como el Payé, el kumu, el especialista en cantos y danzas y el maestro de recitación de mitos. Se consideran aliados de los makuna.',
    economy:
      'Combinan la agricultura itinerante con la caza, pesca, recolección y artesanía. El terreno para sembrar se abre tumbando los hombres un pequeño sector de selva al comienzo del verano y quemando antes de empezar las lluvias. El cultivo principal es la yuca amarga kî, sembrada por las mujeres, quienes también plantan batata, chonque, ñame, calabazas, caña de azúcar, plátanos, piña, marañón y otros frutales. Los hombres siembran maíz, chontaduro, aguacate, wamü, tabaco, coca y yajé.\n\nLas mujeres son alfareras y fabrican diferentes clases de ollas de arcilla y la sartén grande o «budare» para hacer el casabe de yuca. Los hombres se encargan de la cestería y la carpintería.\n\nCazan con cerbatana, arco y flecha, jabalina o escopeta. Entre las presas están la danta, el pecarí, monos, armadillo, chacures y diferentes aves. Recolectan frutos silvestres, hormigas meca jia, saltamontes, larvas de abeja y «mojojoy» (wadoa) y coleópteros comestibles. Generalmente pescan con anzuelo y tienen canoas fabricadas por ellos mismos.\n\nEl kûmû (chamán) sabe usar el yajé, la coca y el tabaco para relacionarse con el mundo espiritual y propiciar el éxito de la economía, la alimentación y la salud.\n\nSe presenta la división de trabajo por sexo y edad. El trabajo de los hombres consiste en preparar el terreno, la pesca, la caza y la fabricación de artesanías, mientras que las mujeres se encargan de mantener la chagra limpia, de cosechar y de preparar los alimentos. La horticultura es la base de su economía con el sistema tradicional de tala y quema.\n\nEl cultivo central es la yuca amarga y sus derivados constituyen la fuente de la alimentación diaria. En menor escala cultivan maíz, calabaza, plátano, caña de azúcar; actividades que complementan con la caza, la pesca y la recolección de gusanos, hormigas y frutos silvestres. Recientemente han incursionado en la pesca comercial.',
    traditions: ['Flautas secretas Yuruparí', 'Mitos de la anaconda', 'Cacería sostenible'],
    crafts: ['Canastos para casabe', 'Cestería', 'Trabajos en arcilla'],
    location: 'Resguardo Parte Oriental del Vaupés; caño Colorado; río Pirá-Paraná (Mitú, Leticia)'
  },
  {
    id: 'bari',
    name: 'Barí',
    region: 'andina-norte-caribe',
    departments: ['Norte de Santander'],
    coordinates: { lat: 8.5, lng: -72.8 },
    population: 5923,
    language: 'Barí Ara',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description:
      'Motilone barí en la Serranía de los Motilones y la hoya del Catatumbo; lengua Barí Ara; historia marcada por petróleo, misiones y resistencia; bohíos cíclicos y transición a caseríos.',
    otherNames: 'Motilone barí, motilón, Barís, barira, dobocubi, cunausaya.',
    locationDetail:
      'Viven en la frontera con Venezuela en la Serranía de los Motilones, departamento de Norte de Santander; se ubican sobre la hoya del río Catatumbo, región boscosa húmeda tropical compuesta por tierras bajas que descienden desde el nudo de Santurbán, en la cordillera oriental. Las distintas corrientes de agua que corren en dirección sur-norte y atraviesan el departamento de Norte de Santander confluyen en la macroregión del lago de Maracaibo.\n\nEl principal accidente geográfico que cobija a los Barí es la Serranía de los Motilones, comprendida entre el cerro de Mina (sur), las fuentes del río Catatumbo y la sierra del Perijá (norte), en jurisdicción de los municipios de El Carmen, Convención y Teorema. Es una región con temperatura promedio de 24 °C y precipitación estimada en 2.500 mm, donde los inviernos se presentan en abril-mayo y octubre-noviembre y los veranos en diciembre, enero y febrero.',
    populationSource:
      'Este pueblo indígena tiene una población de 5.923 personas, de los cuales 4.897 se encuentran en las cabeceras municipales. Los municipios con mayor concentración de esta población son Cúcuta y Tibú.',
    languageDetail:
      'Esta lengua se denomina Barí Ara; el dios Sabaseba fue quien organizó el mundo y sus vidas y el más temido de los espíritus es Dabiddu, dueño de la noche, espíritu que causa el mal y que, con su fatalidad, trae al Barí la enfermedad y la muerte. La lengua Barí Ara designa a los ríos con palabras que significan seres vivos porque se mueven. Por estas razones existe un dolor enorme en el pueblo Barí, porque con ocasión de la explotación del petróleo nos están haciendo daño y el espíritu lo siente.',
    culture:
      'Historia\n\nDesde tiempos prehispánicos la zona se caracterizó por el permanente contacto intercultural entre los grupos de las regiones circundantes. Para el momento de la conquista, ocupaban un extenso territorio desde los Andes venezolanos hasta la Serranía del Perijá. El grupo mantuvo su resistencia a la «pacificación» durante casi cinco siglos, desarrollando mecanismos de adaptación, como su patrón de residencia múltiple que permitió el relativo aislamiento de las poblaciones. Sin embargo, las misiones capuchinas lograron establecerse en su territorio desde épocas tempranas, permitiendo el contacto con la sociedad mayoritaria.\n\nA partir de la primera década del siglo XX se hicieron concesiones para explotaciones petroleras en el territorio Barí, incentivando la apertura de carreteras y la colonización masiva de la región; ante lo cual, la reacción de los indígenas fue violenta, provocando el inicio de un largo proceso bélico contra las petroleras que se prolongó hasta los años sesenta. La acción misionera se intensificó en la zona y continúa hasta el presente, desarrollando una política de «integración y desarrollo» de las comunidades barí y yuko.\n\nCultura\n\nCreen en un ser supremo, lo invocan en las enfermedades, cuando van a la pesca, en la cacería y en las cosechas. Pero esta religión no tiene «autoridades» constituidas que puedan transmitir ya que se deforman de generación en generación. El ser supremo o «Saymaydódjira» es el Dios desde el principio anterior a la existencia del motilón y por consiguiente el Creador. Cuando se considera que un niño ya ha adquirido las habilidades necesarias para subsistir de forma autónoma, el padre reúne en un lugar aislado a unos pocos allegados suyos, y allí, en aquella reunión, confieren el estatus de adulto al muchacho mediante la entrega del guayuco.',
    economy:
      'Practican la horticultura de tala y quema, la pesca y la cacería. Su cultivo tradicional es la yuca dulce, aunque se han adoptado otras especies como el plátano, el maíz, la caña y el cacao. Es frecuente la cría de cerdos y aves de corral para su venta en el mercado. Complementan estas actividades con el jornaleo. Algunos grupos intercalan prácticas comerciales y tradicionales de subsistencia.\n\nVivienda\n\nSu patrón de residencia tradicional se caracteriza por la posesión de tres bohíos dispuestos en forma cíclica, habitados periódicamente por cada grupo local. El bohío o casa comunal —rectangular u ovalada— es el centro de la cultura y de la actividad Barí, rodeado por un conuco principal y otros secundarios.\n\nActualmente se presenta una tendencia —impulsada por los misioneros— hacia la adopción de un patrón fijo de residencia mediante la construcción de caseríos, en parte como estrategia de defensa del territorio. Sin embargo, en algunos lugares aún se mantienen los bohíos estacionales, a pesar de la introducción de la ganadería y de los cultivos comerciales. Dos de sus asentamientos principales reciben el nombre de Hitayosara e Ikiakarora.\n\nOrganización sociopolítica\n\nSocialmente se organizan en comunidades locales cuyas relaciones de parentesco están definidas en función del grupo de residencia. Estas comunidades se dividen en hermanos consanguíneos y hermanos políticos. La unidad mínima de trabajo es el «hogar», constituida por un grupo de hombres «hermanos» y sus esposas afines. Su sistema político es igualitario y se basa en el reconocimiento de diversos roles transferidos de generación en generación.',
    traditions: ['Ceremonias de paso', 'Cultivo de yuca dulce', 'Bohíos cíclicos'],
    crafts: ['Tejidos', 'Cestería', 'Trabajos en palma'],
    location: 'Serranía de los Motilones; hoya del Catatumbo (El Carmen, Convención, Teorema)'
  },
  {
    id: 'betoye',
    name: 'Betoye',
    region: 'llanos-orientales',
    departments: ['Arauca'],
    coordinates: { lat: 6.5, lng: -71.2 },
    population: 394,
    language: 'Español betoye',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description:
      'Comunidades a orillas del río Cravo y en Tame (Arauca); lengua originaria no conservada; español con sustrato betoye; fiesta de la chicha majule y autoridad del capitán.',
    otherNames: 'Jirarre, Betoi, Jirara, Guahibos, Betoyes.',
    locationDetail:
      'Viven a orillas del río Cravo y en el municipio de Tame, departamento de Arauca, en un conjunto de comunidades en las inspecciones de Betoyes y Corocito. Las principales comunidades son: Roqueros, Parreros, Iguanitos, Macarieros, Puyeros, Cocuisas, Genareros, Velazqueros, Julieros, Cajaros, Bayoneros, El Refugio, Zamuro y Matacandela.',
    populationSource:
      'El censo DANE 2005 reportó 394 personas autoreconocidas como pertenecientes al pueblo Betoye, de las cuales el 48,0% son hombres (189 personas) y el 52,0% mujeres (205 personas). El pueblo Betoye se concentra en el departamento de Arauca, donde habita el 83,50% de la población. Le sigue Valle del Cauca con el 2,3% (9 personas) y Bogotá con el 1,5% (6 personas). Estos dos departamentos y la capital concentran el 87,3% poblacional de este pueblo. Los Betoye representan el 0,03% de la población indígena de Colombia. La población Betoye que habita en zonas urbanas corresponde al 12,2% (48 personas), cifra inferior al promedio nacional de población indígena urbana, que es del 21,4% (298.499 personas).',
    languageDetail:
      'Su lengua proviene de la familia lingüística Chibcha. Aunque no conservan su lenguaje original, hablan un español particular considerado como español betoye, en el que permanecen ciertas estructuras gramaticales del sustrato betoye.',
    culture:
      'Historia\n\nA pesar de que en la actualidad no hay estudios recientes sobre este grupo, en la etnografía se describen entre sus ritos y creencias la fiesta de la chicha «majule» preparada con plátano. En esta fiesta, que podía durar varios días, se invitaba a los parientes que vivían en las otras comunidades y la chicha se repartía primero a los ancianos, después a las mujeres y luego al resto de las personas.\n\nCultura\n\nEntre sus celebraciones culturales propias se encuentra la fiesta de la chicha preparada con plátano o «majule», una de las principales festividades de este pueblo. A ella invitan a otras comunidades y celebran durante varios días. Las fiestas, así como la actividad de la casa, poseen un gran valor para el pueblo, por lo que son dirigidas por los capitanes. En sus festividades toman vinete; además reconocen el matrimonio exógeno y neolocal. Cada comunidad se compone de dos o más familias extensas dirigidas por un capitán. Tradicionalmente esta autoridad era un hombre mayor, reconocido como sabio; sin embargo, desde los años ochenta el cargo de capitán ha sido ocupado por líderes jóvenes.',
    economy:
      'Son hortícolas por tradición; utilizan para sus cultivos el sistema de roza y quema. También practicaban la caza, la pesca y la recolección. Los cultivos básicos son el maíz, plátano y yuca, para su propio consumo, y el cacao, café y arroz, introducidos con fines comerciales. Debido a la reducción de la caza mayor, producto del deterioro de los bosques, las presas son en su mayoría ratones, araguatos (monos), ardillas y picuares. La pesca se practica exclusivamente en verano, cuando los ríos y caños son menos caudalosos y profundos.\n\nOrganización sociopolítica\n\nDentro de su organización social tradicional el matrimonio es exógeno y la residencia neolocal. Cada comunidad está compuesta por dos o más familias extensas. La autoridad la tiene el capitán, generalmente el hombre más anciano del grupo. Sin embargo, para mediados de los ochenta se observaban cambios en este modelo con el surgimiento de líderes jóvenes que representaban su grupo frente a la sociedad mayoritaria y organizaban la caza y las fiestas.\n\nExistía la división de trabajo según sexo: las mujeres desempeñaban labores como la limpieza de los cultivos, recolección de cosechas y trabajos domésticos, mientras que el oficio de los hombres se relacionaba con la construcción de la casa, tumba, quema del bosque y el comercio con los blancos.',
    traditions: ['Fiesta de la chicha "majule"', 'Sistema de capitanes', 'Caza y pesca'],
    crafts: ['Canastas', 'Hamacas', 'Trabajos en fibra'],
    location: 'Río Cravo; Tame, inspecciones Betoyes y Corocito (Arauca)'
  },
  {
    id: 'bora',
    name: 'Bora',
    region: 'amazonia-sur',
    departments: ['Amazonas', 'Putumayo'],
    coordinates: { lat: -0.5, lng: -74.0 },
    population: 933,
    language: 'Bora',
    languageFamily: 'Bora',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description:
      'Pueblo de la familia lingüística Bora en La Chorrera y el Putumayo amazónico; cosmovisión de los hijos del tabaco, la coca y la yuca dulce; malokas octogonales, clanes y proceso de recuperación cultural tras la cauchería.',
    otherNames: 'Meamuyna.',
    locationDetail:
      'El pueblo Bora está localizado en La Chorrera, en el departamento del Amazonas. También se encuentra en riberas del río Putumayo, en el bajo Igará-Paraná, y en el río Ampiyacú en el Perú. Según su cosmovisión son gente de centro, pertenecientes a la cultura de los hijos del tabaco, la coca y la yuca dulce. Muchas de sus tradiciones las comparte con los pueblos indígenas uitoto, muinane y ocaina.',
    populationSource:
      'Su población se estima en 933 individuos. Se encuentran dispersos en varios departamentos del país. La mayor concentración la encontramos en el municipio de La Chorrera (Amazonas), con un total de 285 indígenas, seguido del municipio de Puerto Arica (Amazonas), con 206 personas. La distribución por género corresponde a 486 hombres y 447 mujeres. Este pueblo habita principalmente el departamento del Amazonas, aunque también se encuentra localizado en Valle, Antioquia, Tolima, entre otros, aunque con una clara disminución poblacional respecto del Amazonas.',
    languageDetail: 'Pertenece a la familia lingüística Bora.',
    culture:
      'Historia\n\nEl pueblo indígena Bora que habita en el territorio de Tarapacá, según los abuelos (ASOAINTAM, 2008), fue el resultado de la huída de algunos miembros de este pueblo de la esclavización de la explotación cauchera de la Casa Arana (1915 y 1931), que migraron hacia Brasil para luego retornar a Colombia, apoyados por el cañonero Pichincha, que los dejó en el territorio del actual corregimiento de Tarapacá, donde se posesionaron como pueblo Bora, nombraron a José Antonio Silva como capitán y construyeron su primera maloca. En estos territorios ya habitaban los uitoto y practicaban todas sus tradiciones. Luego llegaron otros uitoto que se posicionaron como pueblo Nonuya y desarrollaron ampliamente su cultura hasta que sus abuelos murieron (ASOAINTAM, 2008). Los Bora están dispersos por causa del impacto negativo de las caucheras de principios del siglo XX y están en un intenso proceso de recuperación de sus cosmovisiones y prácticas ancestrales.\n\nCultura\n\nEste grupo habitaba en malokas de forma octogonal dispersas en el territorio. Estas casas comunales funcionaban como vivienda de varias familias nucleares unidas por lazos de parentesco y, a la vez, como espacios rituales que representaban su microcosmos. Actualmente los asentamientos, en algunos casos multiétnicos, agrupan segmentos de clanes distribuidos en su mayoría en poblaciones nucleadas. La maloka cumple la función de sitio ceremonial y en ella reside tan solo el capitán con su familia. Alrededor se construyen viviendas individuales.\n\nLos Bora practican tradicionalmente el ritual del nacimiento, en el cual se prescriben prohibiciones alimenticias. El padre simula el rol de la mujer y permanece en reposo varios días después del parto; esto se conoce como covada. Como resultado de las condiciones históricas de la región que han determinado múltiples adaptaciones culturales, existen pocos chamanes en la actualidad. Una de sus principales funciones es dirigir la construcción de tambores masculinos y femeninos llamados «maguare». Los tambores son accionados por un especialista que sigue una carrera ritual para hacerlo.',
    economy:
      'La producción se basa en la horticultura y el cultivo principal lo constituye la yuca amarga, seguido de los cacahuetes, banano, plátano y algunas frutas como el chontaduro y milpelo. El maní se cultiva con fines rituales, razón por la cual su siembra se acompaña de rezos y dietas especiales.\n\nVivienda\n\nEste grupo habitaba en malokas de forma octogonal dispersas en el territorio. Estas casas comunales funcionaban como vivienda de varias familias nucleares unidas por lazos de parentesco y, a la vez, como espacios rituales que representaban su microcosmos. Actualmente los asentamientos, en algunos casos multiétnicos, agrupan segmentos de clanes distribuidos en su mayoría en poblaciones nucleadas. La maloka cumple la función de sitio ceremonial y en ella reside tan solo el capitán con su familia. Alrededor se construyen viviendas individuales.\n\nOrganización sociopolítica\n\nEl grupo está dividido en clanes patrilineales y exógamos. De acuerdo con esto, los Bora prohíben el matrimonio entre hermanos y buscan preferiblemente aliarse con mujeres miraña. Su descendencia clásica es patrilineal y su residencia patrilocal. Los clanes Bora que han predominado desde el siglo XIX han sido los Zogui-Zogui, Guacamayo Rojo y Canangucho.\n\nPolíticamente el capitán es la figura en la que recae la autoridad desde las primeras décadas del siglo XX. A partir de la Constitución de 1991 se ha adoptado el cabildo, conformado por una familia extensa y por uno o varios capitanes de acuerdo con la comunidad.',
    traditions: ['Agricultura itinerante', 'Pesca tradicional', 'Rituales chamánicos'],
    crafts: ['Canastos', 'Brazaletes', 'Artesanía en semillas'],
    location: 'La Chorrera, Putumayo e Igará-Paraná (Amazonas); Ampiyacú (Perú)'
  },
  {
    id: 'canamomo',
    name: 'Cañamomo',
    region: 'andina-sur',
    departments: ['Risaralda'],
    coordinates: { lat: 5.3, lng: -75.8 },
    population: 8500,
    language: 'Embera',
    languageFamily: 'Embera',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Pueblo Embera ubicado en Risaralda, heredero de tradiciones ancestrales.',
    otherNames: 'Cañamomo-Lomaprieta.',
    locationDetail:
      'Se localizan en el departamento de Risaralda, en los municipios de Pueblo Rico, Mistrató y otros asentamientos tradicionales Embera.',
    populationSource:
      'Su población se estima aproximadamente en 8.500 individuos distribuidos en varios resguardos.',
    languageDetail:
      'Los Embera Cañamomo conservan su lengua nativa Embera, perteneciente a la familia lingüística Embera-Chocó.',
    culture:
      'Comparten la cosmovisión Embera caracterizada por el Jaibanismo, donde el Jaibaná es el especialista en el manejo de las relaciones entre el mundo espiritual y físico. Su sistema de creencias se estructura en torno a los espíritus de la naturaleza y la importancia del territorio ancestral.',
    economy:
      'Basada en agricultura de selva tropical, cultivando café, cacao, plátano, maíz y frutales. Complementan con caza, pesca y recolección. Las artesanías representan una fuente importante de ingresos.',
    traditions: ['Jaibanismo', 'Danza del agua', 'Chagra tradicional', 'Medicina ancestral'],
    crafts: ['Canastos', 'Mochilas', 'Brazaletes de chaquira', 'Tambos ceremoniales'],
    location: 'Risaralda'
  },
  {
    id: 'carapana',
    name: 'Carapana',
    region: 'amazonia-norte',
    departments: ['Vaupés', 'Guaviare'],
    coordinates: { lat: 0.8, lng: -70.3 },
    population: 482,
    language: 'Karapanã',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Ucomaja ("Los médicos"). Pueblo Tukano Oriental del Vaupés.',
    otherNames: 'Ucomaja, Karapana, Moxdoa, Muxtea.',
    locationDetail:
      'El pueblo Ucomaja está ubicado en el Vaupés, en asentamientos dispersos por los ríos Ti, Pirá Paraná, comunidad de San Antonio (Papurí), y en el Gran Resguardo Oriental del Vaupés. También hay presencia en el Guaviare en el Resguardo Vuelta del Alivio (Miraflores) y en el Resguardo El Itilla (Calamar).',
    populationSource:
      'Esta población se compone de 482 personas según el censo de 2005, entre ellos 244 hombres y 238 mujeres. Del total, 231 personas hablan la lengua de su pueblo. La distribución está en dos resguardos: El Itilla y Cachivera de Nare.',
    languageDetail:
      'La lengua karapanã-tapúya pertenece a la subfamilia lingüística tucano oriental. Constituye un elemento importante de identidad e intercambio matrimonial. Cada pueblo tiene su lenguaje que le permite conservar su base cultural.',
    culture:
      'Para los pueblos amazónicos, el uso de plantas sagradas es fundamental. El Yuruparí es el ritual más trascendental porque rememora los orígenes. Viven en malokas como espacios de vivienda colectiva y rituales. Una autoridad vertical era detentada por el jefe y apoyada por el payé.',
    economy:
      'La economía se basa en la horticultura de roza, quema y siembra de yuca, ñame, chontaduro, banano, ají, aguacate, piña, papaya, calabaza. Complementa con caza, pesca y recolección de frutos silvestres.',
    traditions: ['Ceremonia Yuruparí', 'Danza tradicional', 'Pesca con barbasco', 'Payé'],
    crafts: ['Bebederos', 'Flautas', 'Brazaletes', 'Malokas'],
    location: 'Vaupés y Guaviare'
  },
  {
    id: 'chimila',
    name: 'Chimila',
    region: 'andina-norte-caribe',
    departments: ['Cesar', 'Magdalena', 'Bolívar', 'La Guajira'],
    coordinates: { lat: 9.5, lng: -74.0 },
    population: 1614,
    language: 'Ette Taara',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1531299204812-e6d0d4b7b02c?w=800',
    description: 'Ette Ennaka ("gente propia" "gente verdadera"). Pueblo Chibcha que habita en la región del Magdalena y Cesar.',
    otherNames: 'Ette Ennaka, simiza, chimile, shimizya.',
    locationDetail:
      'A la llegada de los españoles, el pueblo Chimila ocupaba grandes extensiones desde Río Frío y las estribaciones noroccidentales de la Sierra Nevada de Santa Marta hasta las inmediaciones de Mompox y la Ciénaga de Zapatosa. Hoy se localizan en torno a la población de San Angel, en las llanuras centrales de los departamentos del Magdalena y el Cesar.',
    populationSource:
      'El Censo DANE 2005 reportó 1.614 personas autoreconocidas como pertenecientes al pueblo Ette Ennaka, de las cuales el 52% son hombres (840 personas) y el 48% mujeres (774 personas). El pueblo se concentra en Magdalena (63,9%), La Guajira (20,0%) y Cesar (2,9%).',
    languageDetail:
      'La lengua nativa se denomina Ette Taara y pertenece al complejo lingüístico Chibcha. De acuerdo al autodiagnóstico realizado con el Ministerio de Cultura, su lengua se encuentra en riesgo de extinción pues solamente el 23,5% de la población la habla y entiende, de los cuales la mayoría son ancianos y líderes de la comunidad.',
    culture:
      'En la cosmología del pueblo Ette Ennaka el Cosmos está conformado por diferentes estratos, los cuales van disminuyendo a través de ciclos destructivos marcados por cataclismos. Los sueños y el acto mismo de soñar tienen una importante función social y cultural. A partir de los conocimientos cosmológicos interpretan y analizan colectivamente los sueños; y a través del acto de recordar, narrar e interpretar sus ensoñaciones diariamente, transmiten sus saberes y reproducen su cultura.',
    economy:
      'La producción económica está sustentada en la horticultura, la cacería y la pesca, complementadas con la cría de animales y aves domésticas. Es común que los indígenas se conviertan en jornaleros de las grandes haciendas. El trabajo agrícola es compartido entre hombres y mujeres. Complementan con la elaboración de productos artesanales como mochilas y hamacas.',
    traditions: ['Danza del caretcio', 'Caza tradicional', 'Medicina ancestral', 'Interpretación de sueños'],
    crafts: ['Canastas', 'Hamacas', 'Arcos ceremoniales', 'Mochilas'],
    location: 'Cesar y Magdalena'
  },
  {
    id: 'chiricoa',
    name: 'Chiricoa',
    region: 'llanos-orientales',
    departments: ['Meta', 'Vichada', 'Antioquia'],
    coordinates: { lat: 4.5, lng: -71.0 },
    population: 46,
    language: 'Guahibo',
    languageFamily: 'Guahibo',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Pueblo de la familia Guahibo, uno de los más reducidos y vulnerables de Colombia.',
    otherNames: 'Chiricoa Guahibo.',
    locationDetail:
      'Originariamente se ubicaban en el alto río Ele (Arauca). También existe información sobre asentamientos en Arauquita. Actualmente no poseen un territorio geográficamente definido.',
    populationSource:
      'Su población se estima en 46 individuos, una de las más reducidas comunidades indígenas de Colombia. Se encuentran en Antioquia, Bolívar y Bogotá. La mayor concentración está en Medellín (8 personas) y Bogotá (7 personas).',
    languageDetail:
      'Pertenece a la familia lingüística Guahibo. La lengua ha sido poco estudiada y está en grave peligro de desaparición.',
    culture:
      'Descritos como un grupo nómada que se desplazaba por los actuales departamentos de Arauca y Casanare. Al comienzo de la colonización de los Llanos Orientales, constituían un gran pueblo que fue diezmado por las reducciones misioneras y las enfermedades. Se conservan rituales donde se utilizan plantas psicotrópicas. El "rezo del pescado" es una ceremonia de iniciación y bautizo, y el Itomo hace parte del ciclo de ceremonias del segundo enterramiento.',
    economy:
      'La economía está sustentada en la horticultura de roza, quema y siembra, con cultivos de yuca, ñame, chontaduro, banano, ají, caimo, aguacate, piña, papaya, calabaza, lulo y marañón. Se complementa con caza, pesca y recolección de frutos silvestres.',
    traditions: ['Caza tradicional', 'Pesca', 'Agricultura itinerante', 'Ritual del "rezo del pescado"', 'Ceremonia Itomo'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en palma'],
    location: 'Meta, Vichada y dispersos en otros departamentos'
  },
  {
    id: 'coconuco',
    name: 'Coconuco',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.6, lng: -76.5 },
    population: 6141,
    language: 'Coconuco',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    description: 'Kokonuko. Herederos de la cultura Paez en las tierras frías del Cauca.',
    otherNames: 'Kokonuko, Puracé.',
    locationDetail:
      'El Pueblo Kokonuko está asentado en tres Municipios del Departamento del Cauca: en el Municipio de Puracé (Resguardos de Paletará, Kokonuko y Puracé), en el Municipio de Popayán (Resguardos de Poblazón, Quintana y Pueblo Kokonuko), y en el Municipio del Tambo (Resguardo de Alto del Rey y Cabildo de Guarapamba).',
    populationSource:
      'Se estima una población de 6.141 personas distribuidas en un perímetro de 24.462 hectáreas.',
    languageDetail:
      'Ya no quedan hablantes de coconuco, lengua perteneciente a la familia Chibcha, pero conservan elementos lingüísticos como toponímicos, nombres de plantas y de animales.',
    culture:
      'La cosmogonía Coconuco se estructura en un sistema dual: lo masculino y lo femenino, lo caliente y lo frío, el sol y la luna. El universo está habitado por seres sobrenaturales. Ure es uno de los principales espíritus malignos que habita debajo de la tierra. Nuguwaymasig mora en el volcán Puracé. Yash, Kway-Mantsik y Kalyim pueden arrebatar el alma a las personas, producir enfermedades y muerte.',
    economy:
      'Cada familia posee una o dos parcelas para cultivar maíz y papa. Actualmente practican la ganadería y en menor escala otros productos para autoconsumo como el ulluco, repollo y habas. Complementan con actividades laborales en cultivos de flores y explotación de azufre. Para la realización de cultivos se utiliza la minga como sistema de cooperación colectiva.',
    traditions: ['Baños termales ceremoniales', 'Tejido de ruanas', 'Danza del oso', 'Minga comunitaria'],
    crafts: ['Ruanas de lana', 'Mochilas', 'Chales bordados'],
    location: 'Cauca'
  },
  {
    id: 'coreguaje',
    name: 'Coreguaje',
    region: 'amazonia-sur',
    departments: ['Caquetá', 'Putumayo'],
    coordinates: { lat: 1.0, lng: -75.5 },
    population: 1767,
    language: 'Korewahe',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Koreguaje ("la gente de tierra"). Pueblo Tukano Oriental en las cuencas del Caquetá y Putumayo.',
    otherNames: 'Koreguaje, korebaju, coreguaxe, Koré pâín.',
    locationDetail:
      'Se encuentran ubicados en varios caseríos a lo largo del río Orteguaza y sus afluentes, al sudeste de Florencia en el departamento del Caquetá, y en el río Caquetá y sus afluentes al este de Puerto Solano.',
    populationSource:
      'Su población se estima en 1.767 individuos. La mayor concentración está en Solano - Caquetá (534 indígenas) y Milán - Caquetá (771 personas).',
    languageDetail:
      'La lengua korewahe se habla en el departamento del Caquetá, en 27 asentamientos a lo largo de los ríos Orteguazo, Peneya y Caquetá. Los hablantes presentan una fusión de varios grupos étnicos ya que también la hablan inga, witoto, carijona y Tama.',
    culture:
      'Para la cultura Koreguaje el mundo se conforma por tres niveles: Cheja buebú (tierra de abajo), Cheja sanaba jopo (tierra del centro) y Cheja sesebú (tierra de encima donde habitan las personas). El mundo está controlado por espíritus o fuerzas que determinan los acontecimientos. El chaman o curaca establece comunicación con las fuerzas sobrenaturales. El cacique es la autoridad tradicional conocedor del pensamiento de los ancestros.',
    economy:
      'La economía se encuentra en proceso de integración con la agricultura comercial. Los principales cultivos para autoconsumo son la yuca, plátano y frutales. Utilizan la yuca amarga para elaborar casabe y fariña. También practican pesca, caza, cría de animales, explotación maderera y fabricación de artesanías.',
    traditions: ['Caza sostenible', 'Pesca con barbasco', 'Danza del caimán', 'Toma de yagé'],
    crafts: ['Bebederos', 'Cucharas talladas', 'Brazaletes'],
    location: 'Caquetá y Putumayo'
  },
  {
    id: 'coyaima',
    name: 'Coyaima-Natagaima',
    region: 'andina-sur',
    departments: ['Tolima'],
    coordinates: { lat: 3.8, lng: -75.0 },
    population: 24663,
    language: 'Castellano (sin lengua aborigen)',
    languageFamily: 'Arawak',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    description: 'Pijao del sur del Tolima. Pueblo de la familia Arawak ubicados en Tolima.',
    otherNames: 'Pijao, Coyaima, Natagaima.',
    locationDetail:
      'Se autodenominan Pijao del sur del departamento del Tolima. Se ubican en pequeñas parcialidades en los municipios de Coyaima, Natagaima, Ortega, Chaparral y San Antonio. Los Coyaima estaban asentados en los valles de los ríos Saldaña y Magdalena, y los Natagaima en la serranía de los Órganos.',
    populationSource:
      'Su población comprende 24.663 personas repartidas en varias comunidades.',
    languageDetail:
      'No hablan lengua aborigen en la actualidad. Pertenecen a la familia lingüística Arawak.',
    culture:
      'Formaron parte de los Pijao, una sociedad con afinidades lingüísticas y culturales cuyo territorio abarcaba la actual ciudad de Ibagué, el valle del Magdalena y parte de las cordilleras Oriental y Central. Después de su reducción en el siglo XVII, establecieron dos resguardos. Han apropiado elementos de la tradición cultural hispánica como la ganadería y los ritos católicos. El sistema de creencias se caracteriza por el sincretismo religioso. La patasola y la madremonte hacen parte de los protagonistas míticos de su tradición oral.',
    economy:
      'Mantienen una economía de subsistencia complementada con productos comerciales de consumo básico. Generalmente existe un terreno comunitario para cultivos comerciales y de autoconsumo. Sus cultivos principales son la yuca, el maíz y el plátano. Complementan con ganadería y cría de animales de corral. Han logrado dotación de tierras en 64 resguardos a través del Consejo Nacional Indígena del Tolima (CRIT).',
    traditions: ['Pesca tradicional', 'Agricultura', 'Medicina ancestral', 'Sincretismo religioso'],
    crafts: ['Canastas', 'Hamacas', 'Trabajos en barro'],
    location: 'Tolima'
  },
  {
    id: 'cubeo',
    name: 'Cubeo',
    region: 'amazonia-norte',
    departments: ['Vaupés', 'Guaviare', 'Guainía'],
    coordinates: { lat: 1.2, lng: -70.5 },
    population: 3926,
    language: 'Kubeo',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Pamíva ("hijos de la Anaconda Ancestral"). Pueblo Tukano Oriental conocido por sus máscaras ceremoniales.',
    otherNames: 'Kubeo, Paniwa, Cobewa, Hipnwa, Kaniwa, Pamíva.',
    locationDetail:
      'El pueblo Cubeo se encuentra ubicado en el departamento del Vaupés, en las fronteras con Venezuela y Brasil. Se calcula que aproximadamente el 70% de su territorio tiene figura legal de Resguardo Indígena.',
    populationSource:
      'Su población se estima en 3.926 individuos. La mayor concentración está en Mitú - Vaupés (2.439 indígenas) y Mira Flores - Guaviare (546 personas).',
    languageDetail:
      'La lengua Kubeo (Cubeo, Cobewa, Kubéwa, Pamíwa) se habla en el noroeste del Amazonas brasileiro y en Colombia en la zona noroccidental de los ríos Vaupés, Cuduyari y Querarí. Aunque han estado en contacto con occidentales desde el siglo XVI, su lengua y cultura han permanecido casi intactas.',
    culture:
      'Su origen está asociado al ciclo mítico de la Anaconda Ancestral. Kuwai es el principal héroe cultural y el ritual del "Yuruparí" se destaca entre sus celebraciones. Su patrón de asentamiento se caracteriza por aldeas dispersas estructuradas alrededor de una escuela o centro de salud. Viven en casas rectangulares divididas en dos espacios para una familia nuclear. En algunas aldeas se construyen malokas rectangulares con función de sitio de reunión.',
    economy:
      'Trabajan la cerámica, la talla de madera y la cestería. El balay (tejido redondo y cóncavo usado para servir el casabe) es uno de los objetos más representativos. El comercializar sus artesanías tiene un valor importante para recuperar y valorar sus conocimientos.',
    traditions: ['Mascarada ritual', 'Danza tradicional', 'Ceremonia de iniciación', 'Ritual del Yuruparí'],
    crafts: ['Máscaras talladas', 'Bebederos (balay)', 'Canastos', 'Cerámica'],
    location: 'Vaupés, Guaviare y Guainía'
  },
  {
    id: 'desano',
    name: 'Desano',
    region: 'amazonia-norte',
    departments: ['Vaupés', 'Guaviare', 'Guainía'],
    coordinates: { lat: 0.8, lng: -70.2 },
    population: 2179,
    language: 'Desano',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Desana, Winá, Wirá. Pueblo Tukano Oriental con cosmogonía basada en los astros.',
    otherNames: 'Desana, Uina, Winá, Uira, Wirá boleka, Oregua, Kusibi, Wirá, Kotedia, Dessana.',
    locationDetail:
      'Se encuentran ubicados al noroeste del departamento del Amazonas. La comunidad se encuentra en los departamentos de Vaupés, Guaviare y Guainía, especialmente en los caños Abiyú, Macú-Paraná, Viña, y en Piracuara o caño Viarí. Ocupan el Gran Resguardo del Vaupés, Arará-Bacati, El Venado, Lagos del Dorado, El Remanso, La Palma y Asunción.',
    populationSource:
      'Según el censo general del DANE 2005 está constituido por 2.179 habitantes. Solo entre el 30 y 50% de la comunidad conoce y usa su lengua.',
    languageDetail:
      'La lengua desano hace parte de la subfamilia lingüística tucano oriental, constituida por quince lenguas que comparten características lingüísticas y culturales.',
    culture:
      'Comparten ceremonias especiales con otros pueblos tucano oriental. La más conocida es el intercambio matrimonial entre miembros de comunidades indígenas diferentes. Las uniones matrimoniales han propiciado el multilingüismo. El ritual del "Yuruparí" es el eje primordial para recordar orígenes y reafirmar vínculos con la cosmovisión. El Payé oficia las ceremonias del ciclo vital y cura enfermedades. El kumu (representante del sol) es la persona con mayor rango dentro de la sociedad.',
    economy:
      'Su economía se fundamenta en la horticultura incipiente, caza, pesca y recolección de frutos. Cultivan yuca amarga, yuca dulce, maíz, caña de azúcar, ñame, chontaduro, banano y frutales. Son hábiles artesanos en la fabricación de canastos de carrizo y ollas de arcilla.',
    traditions: ['Cosmología astral', 'Danza tradicional', 'Ceremonias del Yuruparí', 'Intercambio matrimonial'],
    crafts: ['Bebederos', 'Canastos de carrizo', 'Brazaletes', 'Ollas de arcilla'],
    location: 'Vaupés, Guaviare y Guainía'
  },
  {
    id: 'dujo',
    name: 'Dujo',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.5, lng: -70.8 },
    population: 300,
    language: 'Tucano',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Dujo. Pueblo Tukano Oriental pequeño ubicado en el Vaupés.',
    otherNames: 'Duxo.',
    locationDetail:
      'Se encuentran en el departamento del Vaupés, formando parte del complejo cultural del Vaupés junto con otros pueblos de la familia lingüística Tucano Oriental.',
    populationSource:
      'Su población se estima aproximadamente en 300 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental. La lengua se encuentra en situación crítica de extinción.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés. El sistema de organización social se basa en linajes patrilineales. El ritual del Yuruparí es central en su cosmovisión.',
    economy:
      'La economía se basa en la horticultura de tala y quema, caza, pesca y recolección. Cultivan yuca amarga, plátano, maíz y otros productos de subsistencia.',
    traditions: ['Ritual del Yuruparí', 'Caza', 'Pesca', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas ceremoniales', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'embera',
    name: 'Embera',
    region: 'pacifica',
    departments: ['Chocó', 'Córdoba', 'Antioquia', 'Risaralda'],
    coordinates: { lat: 5.5, lng: -76.5 },
    population: 45000,
    language: 'Embera',
    languageFamily: 'Embera-Chocó',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Embera Dobida. Pueblo que habita las selvas del Chocó biogeográfico.',
    otherNames: 'Embera Dobida, "gente del río".',
    locationDetail:
      'Los Embera Dobida se encuentran principalmente en el departamento del Chocó, distribuidos a lo largo de los ríos Baudó, Docordó, Sipí y sus afluentes. También hay asentamientos en Córdoba y Antioquia.',
    populationSource:
      'Su población se estima aproximadamente en 45.000 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Embera-Chocó. La lengua Embera tiene dos grandes bloques dialectales: el Bajo Baudó y el de Antioquia/Córdoba.',
    culture:
      'Los Embera están constituidos en dos grandes grupos: Dobida (gente del río) y Eyabida. Los Dobida son la gente cuyo modo de vida gira en torno al río: sus casas y huertos están a orillas del río, la pesca es una actividad permanente. El Jaibaná tiene una función de gran importancia en el manejo de la vida mágico-religiosa del grupo.',
    economy:
      'Practican agricultura de selva tropical con cultivos de café, cacao, plátano, maíz, arroz, yuca y frutales. Complementan con caza, pesca y recolección. Los tambos se ubican en las riberas de los ríos.',
    traditions: ['Piru (baño ceremonial)', 'Danza del agua', 'Jaibanismo', 'Rituales de curación'],
    crafts: ['Canastos finamente tejidos', 'Bebederos', 'Máscaras talladas', 'Brazaletes de chaquira'],
    location: 'Chocó, Córdoba y Antioquia'
  },
  {
    id: 'embera-katio',
    name: 'Embera Katío',
    region: 'pacifica',
    departments: ['Córdoba', 'Chocó', 'Antioquia', 'Caldas', 'Putumayo'],
    coordinates: { lat: 7.0, lng: -76.0 },
    population: 38259,
    language: 'Embera',
    languageFamily: 'Chocó',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    description: 'Embera Eyabida. Habitan las cuencas de los ríos Sinú y alto Magdalena.',
    otherNames: 'Embera Eyabida.',
    locationDetail:
      'Los Embera Katío se encuentran en el departamento del Chocó en los municipios de Unguía, Acandí, Riosucio, Bojayá, Bagadó, Carmen de Atrato y Quibdó; en Córdoba sobre los ríos Sinú, Esmeralda y Río Verde; en Antioquia. Parte de su territorio coincide con el Parque Nacional Natural de Paramillo.',
    populationSource:
      'El Censo DANE 2005 reportó 38.259 personas autoreconocidas. El 50,7% son hombres (19.383) y 49,3% mujeres (18.876). Se concentran en Antioquia (33,5%), Chocó (26,5%) y Córdoba (13,4%). Representan el 2,7% de la población indígena de Colombia.',
    languageDetail:
      'Los embera katío conservan su lengua nativa perteneciente a la familia lingüística Chocó, emparentada con la waunan. Hay dos grandes bloques dialectales: del Bajo Baudó y de Antioquia/Córdoba.',
    culture:
      'En la cosmovisión embera hay tres mundos: el de arriba (bajía) donde están Karagabí y Ba (trueno); el de los humanos (egoró); y el de abajo. El Jaibaná es el personaje que traduce y hace la relación entre los tres mundos. Es uno de los pueblos más influenciados por la iglesia católica. Conserved importance of water and rivers in culture.',
    economy:
      'Practican agricultura de selva tropical con cultivos de café, cacao, plátano, maíz, arroz, yuca y frutales. Complementan con caza, pesca y recolección. Los tambos se ubican en las riberas de los ríos.',
    traditions: ['Toma de chirrapa', 'Danza del duende', 'Ritual de la luna nueva', 'Jaibanismo'],
    crafts: ['Voladores de madera', 'Bebederos tallados', 'Brazaletes de chaquira', 'Tambos'],
    location: 'Córdoba, Chocó y Antioquia'
  },
  {
    id: 'embera-chami',
    name: 'Embera Chamí',
    region: 'pacifica',
    departments: ['Risaralda', 'Caldas', 'Valle del Cauca', 'Antioquia'],
    coordinates: { lat: 5.2, lng: -76.0 },
    population: 29094,
    language: 'Embera',
    languageFamily: 'Chocó',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Embera Chamí ("Habitante de Montaña"). Habitan las selvas de Risaralda y Chocó.',
    otherNames: 'Embera Chamí.',
    locationDetail:
      'La mayor parte de la población chamí se encuentra sobre el Río San Juan y en los municipios de Pueblo Rico y Mistrató (Risaralda). Un segundo núcleo se encuentra en los ríos Garrapatas y San Quiníni (Valle del Cauca) y en el Resguardo de Cristiana (Antioquia). También hay asentamientos en Quindío, Caldas, Valle del Cauca y Caquetá.',
    populationSource:
      'El Censo DANE 2005 reportó 29.094 personas autoreconocidas. El 50,2% son hombres (14.609) y 49,8% mujeres (14.485). Se concentran en Risaralda (55,1%), Caldas (24,8%) y Antioquia (7,3%). Representan el 2,1% de la población indígena de Colombia.',
    languageDetail:
      'Los embera chamí conservan su lengua nativa perteneciente a la familia lingüística Chocó, que tiene relación con las familias arawak, karib y chibcha. Consta de un complejo conjunto de variedades dialectales que pueden ser inteligibles entre sí.',
    culture:
      'Los Embera están constituidos en dos grandes grupos: Dobida (gente del río) y Eyabida. Los Embera Chamí comparten la historia prehispánica y colonial caracterizada por su continua resistencia a las incursiones conquistadoras. Se destacan por la dispersión de sus asentamientos sobre las cuencas de los ríos. El Jaibaná tiene gran importancia en el manejo de la vida mágico-religiosa del grupo.',
    economy:
      'El sistema de producción se basa en la agricultura de selva tropical, cultivando café, cacao, chontaduro, maíz, fríjol y caña de azúcar. Además practican caza, pesca, recolección y en menor medida extracción de madera y oro.',
    traditions: ['Medicina tradicional', 'Danza ceremonial', 'Cestería medicinal', 'Jaibanismo'],
    crafts: ['Canastos medicinales', 'Brazaletes', 'Bebederos', 'Tambos'],
    location: 'Risaralda, Caldas, Valle del Cauca y Antioquia'
  },
  {
    id: 'eperara',
    name: 'Eperara-Siapidara',
    region: 'pacifica',
    departments: ['Cauca', 'Nariño', 'Valle del Cauca'],
    coordinates: { lat: 3.0, lng: -77.5 },
    population: 3853,
    language: 'Epérã Pedée',
    languageFamily: 'Chocó',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Eperara síapidara ("la gente de la lengua"). Pueblo del Pacífico sur.',
    otherNames: 'Eperara, saija, epená saija, epea pedée, cholo.',
    locationDetail:
      'Se encuentran en el departamento del Cauca, en la ribera del Saija (López de Micay), y en el río Naya (Buenaventura, Valle del Cauca). También hay asentamientos en El Charco y Olaya Herrera (Nariño).',
    populationSource:
      'El Censo DANE 2005 reportó 3.853 personas autoreconocidas. El 50% son hombres (1.926) y 50% mujeres (1.927). Se concentran en Cauca (49,2%), Nariño (44,8%) y Valle del Cauca (2%). Representan el 0,3% de la población indígena de Colombia.',
    languageDetail:
      'Su lengua nativa es la epérã pedée, perteneciente a la familia lingüística de los Chocó. Epera significa "gente", ra indica "plural", sía es "nombre de la lengua" y pidara es "reportativo".',
    culture:
      'Todo conocimiento se expresa en dos mundos: el etéreo (del Jai, espíritus) y el físico (ecosistema). La estructura social se basa en organización familiar de trabajo agrícola. La máxima autoridad espiritual es la Tachi nawe ("nuestra madre"). El Jaipana tiene la autoridad de la salud. Su vivienda tradicional es el tambo.',
    economy:
      'Tradicionalmente han practicado agricultura de selva tropical húmeda itinerante, cultivando plátano, maíz, caña de azúcar, arroz, yuca y fríjol. Complementan con caza, pesca y recolección de frutos.',
    traditions: ['Tejido tradicional', 'Danza', 'Agricultura de tala y quema', 'Jaipana'],
    crafts: ['Tejidos', 'Canastos', 'Brazaletes', 'Tambos'],
    location: 'Cauca, Nariño y Valle del Cauca'
  },
  {
    id: 'arhuaco',
    name: 'Arhuaco (Ika)',
    region: 'andina-norte-caribe',
    departments: ['Cesar', 'La Guajira', 'Magdalena'],
    coordinates: { lat: 10.5, lng: -73.2 },
    population: 22134,
    language: 'Ika',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1518182170546-0766dd6f7a56?w=800',
    description: 'Iku ("gente"). Guardianes de la Sierra Nevada de Santa Marta.',
    otherNames: 'Ika, iku, Ijku.',
    locationDetail:
      'Los Ika habitan las cuencas altas de los ríos Aracataca, Fundación y Ariguaní en la vertiente occidental de la Sierra Nevada de Santa Marta. Ocupan zonas en Cesar, La Guajira y Magdalena. Comparten territorio con los kogui y los wiwa. Están favorecidos por los tres pisos térmicos.',
    populationSource:
      'Son un grupo homogéneo de 14.799 personas en un área de 195.900 hectáreas. El Censo DANE 2005 reportó 22.134 personas autoreconocidas. Se concentran en Magdalena (97,1%), La Guajira (1,9%) y Bogotá (0,42%). Representan el 1,59% de la población indígena de Colombia.',
    languageDetail:
      'Lengua Ika (chibchense). Hay aproximadamente 8.000 a 10.000 hablantes. Otros nombres son ika, bíntukwa.',
    culture:
      'Son un pueblo profundamente espiritual con su propia filosofía globalizante. Consideran la Sierra como el corazón del mundo desde el cual se originó. Son dinámicos y combativos con organización política desarrollada. El mundo se concibe como dos pirámides sostenidas sobre una misma base con nueve mundos. La Sierra es considerada como un cuerpo humano.',
    economy:
      'La agricultura es la principal actividad económica. Practican tumba y quema de bosque para sus cultivos.',
    traditions: ['La Kolla (bebida sagrada)', 'Ceremonias en los picos nevados', 'Sistema de gobierno propio', 'Mamos'],
    crafts: ['Mochilas ceremoniales', 'Sombreros de caña', 'Collares de semillas'],
    location: 'Sierra Nevada de Santa Marta'
  },
  {
    id: 'guambiano',
    name: 'Guambiano',
    region: 'andina-sur',
    departments: ['Cauca', 'Huila', 'Valle del Cauca'],
    coordinates: { lat: 2.5, lng: -76.7 },
    population: 21085,
    language: 'Namtrik',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Misak ("gente del agua"). Habitan el resguardo de Guambía en el Cauca.',
    otherNames: 'Misak, "gente del agua".',
    locationDetail:
      'La mayor parte de su población vive en la vertiente occidental de la Cordillera Central, en las inmediaciones de los Páramos de Las Delicias y el Pisno, en el centro-oriente del Cauca, en los municipios de Silvia y Piendamo. En menor número en Totoró, Jambaló, Caldono, Inzá y Morales. También en La Plata y La Argentina (Huila).',
    populationSource:
      'El Censo DANE 2005 reportó 21.085 personas autoreconocidas. El 50,4% son hombres (10.620) y 49,6% mujeres (10.465). Se concentran en Cauca (91,3%), Valle del Cauca (3,5%) y Huila (3,3%). Representan el 1,5% de la población indígena de Colombia.',
    languageDetail:
      'Nam trik. Pertenece a la familia lingüística Chibcha. Aunque la mayoría hablan español y el bilingüismo es generalizado, se resisten a perder su lengua. La población hablante del namtrik está dispersa en varias zonas.',
    culture:
      'La cosmogonía se estructura en un sistema dual: lo masculino y lo femenino, lo caliente y lo frío, el sol y la luna. Las plantas, árboles y la "madretierra" guardan espíritus. El Murbik es el curandero que conoce las plantas medicinales y actúa como intermediario. El mito de origen los describe como "la gente del agua".',
    economy:
      'La base de su economía es la agricultura. En zonas bajas cultivan maíz, en partes altas papa y cebolla. La ganadería se ha desarrollado complementariamente. El trabajo colectivo está estrechamente ligado a la tierra.',
    traditions: ['La Guambia (reunión comunitaria)', 'Danza del indio', 'Pishimaruk', 'Cultivo de papa nativa'],
    crafts: ['Mochilas guambianas', 'Bordados coloridos', 'Sombreros de paja'],
    location: 'Cauca y Huila'
  },
  {
    id: 'guanaca',
    name: 'Guanaca',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.6, lng: -76.6 },
    population: 723,
    language: 'Wambiano-mogés',
    languageFamily: 'Paez',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Pueblo Nasa emparentado con los Paeces en Tierradentro, Cauca.',
    otherNames: 'Guanaco.',
    locationDetail:
      'Los Guanaca se localizan en la región de Tierradentro, al oriente del departamento del Cauca. No cuentan con un resguardo definido y las tierras que poseen son de propiedad individual.',
    populationSource:
      'Su población se estima en 723 personas, distribuidas en un perímetro de 1.000 hectáreas.',
    languageDetail:
      'La lengua wambiano-mogés (coconuco, guanaca, totoró) se habla en el Cauca. No está claro el número de hablantes del grupo étnico.',
    culture:
      'Se suelen considerar como pertenecientes a los Nasa. Conservan un sistema de símbolos y creencias cuyas bases están en la cosmogonía Páez. K\'pish (el Trueno) es la deidad que ocupa el lugar más privilegiado. Habita en el fondo de las lagunas del páramo. Guequián es posiblemente el emisario precolombino de K\'pish.',
    economy:
      'La agricultura es la base de su economía y en menor proporción la ganadería. Cultivan papa, cebolla, calabaza, caña de azúcar, fríjol y café. Como complemento se ocupan como jornaleros en fincas vecinas.',
    traditions: ['Danza tradicional', 'Agricultura', 'Tejido', 'Ritual de K\'pish'],
    crafts: ['Mochilas', 'Ruanas', 'Bordados'],
    location: 'Cauca'
  },
  {
    id: 'guane',
    name: 'Guane',
    region: 'andina-norte-caribe',
    departments: ['Santander'],
    coordinates: { lat: 6.5, lng: -73.0 },
    population: 812,
    language: 'Castellano (lengua extinta)',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Pueblo Chibcha de Santander con rica tradición cultural.',
    otherNames: 'Guane.',
    locationDetail:
      'Los Guane habitaron la región que actualmente ocupa gran parte de las provincias de Soto, Guanentá y Comuneros, en el Departamento de Santander. Actualmente ubicado a 20 minutos de Barichara, Santander.',
    populationSource:
      'La etnia no aparece en los listados del Dane 2005. Se estima aproximadamente 812 personas. El mayor índice está en Bucaramanga (412 personas) y Barichara (86 personas). Distribución: 409 hombres y 403 mujeres.',
    languageDetail:
      'No hablan su lengua tradicional. Pertenecen a la familia lingüística Chibcha.',
    culture:
      'Los Guanes dejaron muestras de una cultura superior. La única propiedad individual reconocida era la de viviendas, labranzas, animales domésticos y bienes muebles. La tierra era propiedad común de cada tribu. Se destaca la agricultura, el tejido de mantas de algodón y la fabricación de utensilios de barro.',
    economy:
      'La economía tuvo como base principal la agricultura, el tejido de mantas de algodón y la fabricación de utensilios de barro. Carecían de herramientas de hierro y usaban macana y piedras de sílice.',
    traditions: ['Tradiciones Chibchas', 'Agricultura', 'Tejido de algodón'],
    crafts: ['Cestería', 'Tejidos', 'Trabajos en barro', 'Mantas de algodón'],
    location: 'Santander'
  },
  {
    id: 'guayabero',
    name: 'Guayabero',
    region: 'llanos-orientales',
    departments: ['Meta', 'Casanare'],
    coordinates: { lat: 3.5, lng: -73.0 },
    population: 1500,
    language: 'Guayabero',
    languageFamily: 'Guahiboan',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Pueblo indígena de la familia Guahiboan ubicado en los llanos del Meta.',
    otherNames: 'Jirara.',
    locationDetail:
      'Se localizan en el departamento del Meta, en las riveras del río Guayabero y sus alrededores. También hay presencia en Casanare.',
    populationSource:
      'Su población se estima aproximadamente en 1.500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Guahiboan.',
    culture:
      'Los Guayabero comparten tradiciones con otros grupos de la familia Guahiboan. Su cultura está vinculada a los llanos orientales y la vida cerca de los ríos.',
    economy:
      'La economía se basa en la horticultura, caza y pesca. Cultivan yuca, plátano, maíz y otros productos de subsistencia.',
    traditions: ['Caza tradicional', 'Pesca', 'Agricultura itinerante', 'Rituales comunitarios'],
    crafts: ['Canastos', 'Brazaletes', 'Artesanía en palma', 'Hamacas'],
    location: 'Meta y Casanare'
  },
  {
    id: 'hitnu',
    name: 'Hitnu (Macú)',
    region: 'llanos-orientales',
    departments: ['Arauca', 'Meta'],
    coordinates: { lat: 6.0, lng: -71.0 },
    population: 2000,
    language: 'Hitnu',
    languageFamily: 'Arawak',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800',
    description: 'Hitnu, también llamados Macú. Pueblo de la familia Arawak en los llanos orientales.',
    otherNames: 'Macú, Hitnú.',
    locationDetail:
      'Se localizan en el departamento de Arauca, especialmente en la zona del río Ele y sus afluentes, así como en partes del Meta.',
    populationSource:
      'Su población se estima aproximadamente en 2.000 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Los Hitnu tienen tradiciones culturales vinculadas a los llanos orientales. Son expertos cazadores y pescadores. Comparten características culturales con otros grupos de la región.',
    economy:
      'La economía se basa en la horticultura, caza y pesca. Cultivan yuca, plátano, maíz y otros productos de subsistencia.',
    traditions: ['Caza tradicional', 'Pesca', 'Agricultura itinerante', 'Rituales de paso'],
    crafts: ['Canastos', 'Brazaletes', 'Bolsas de fibra', 'Arcos y flechas'],
    location: 'Arauca y Meta'
  },
  {
    id: 'hupdu',
    name: 'Hupdu (Hup)',
    region: 'amazonia-norte',
    departments: ['Vaupés', 'Guainía'],
    coordinates: { lat: 1.2, lng: -70.0 },
    population: 4000,
    language: 'Hupda',
    languageFamily: 'Nadëb',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Pueblo Nadëb ubicado en el Vaupés y Guainía.',
    otherNames: 'Hup, Juhupdu.',
    locationDetail:
      'Tradicionalmente se desplazaban en las áreas cercanas a las cabeceras de los afluentes del río Apaporis. Se ubican en el río Apaporis, Caño Jotabeya y La Libertad, departamento del Amazonas y Vaupés. Forman parte de los llamados "makú".',
    populationSource:
      'El término Hupdu significa "gente". En la base de datos del Dane este grupo se encuentra agregado a los nukak. El DANE 2005 reportó 1.080 personas.',
    languageDetail:
      'Parte de la rama lingüística de las etnias engendradas en el término Makú. Comparte afinidades lingüísticas con los nukak y kakua.',
    culture:
      'Su mito de origen cuenta como Kuteh, uno de los cuatro seres mitológicos que ordenaron el territorio, hizo mediante una bola de barro el primer ser viviente. Dentro de su cosmovisión conciben el mundo como estructurado en niveles interrelacionados.',
    economy:
      'Los grupos makú son reconocidos como expertos cazadores. Intercambian con otros grupos veneno para la cacería por canoas. Actualmente la pesca y la horticultura ocupan los primeros renglones.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Intercambio ceremonial'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos y flechas'],
    location: 'Vaupés, Guainía y Amazonas'
  },
  {
    id: 'inga',
    name: 'Inga',
    region: 'andina-sur',
    departments: ['Putumayo', 'Cauca', 'Nariño'],
    coordinates: { lat: 1.0, lng: -76.5 },
    population: 15450,
    language: 'Inga',
    languageFamily: 'Quechua',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Ingano ("pueblo viajero"). Descendientes del imperio Inca en el sur de Colombia.',
    otherNames: 'Ingano, "pueblo viajero".',
    locationDetail:
      'El pueblo Inga se localiza principalmente en el Valle del Sibundoy, a 2.200 metros sobre el nivel del mar, en el departamento del Putumayo. Son descendientes de los Incas y arribaron a la región como avanzadas militares en el proceso de expansión del imperio.',
    populationSource:
      'El Censo DANE 2005 reportó 15.450 personas autoreconocidas. El 50% son hombres (7.725) y 50% mujeres (7.725). Se concentran en Putumayo (62,4%), Nariño (16,6%) y Cauca (4,4%). Representan el 1,1% de la población indígena de Colombia.',
    languageDetail:
      'Pertenece a la familia lingüística Quechua. La lengua quechua inga (ingano) se habla en el Valle de Sibundoy, Yunguillo y Condagua (Putumayo), y en los ríos alto Caquetá y Putumayo. Una característica del grupo Inga es su dispersión por varias regiones de Colombia, habiendo adoptado el comercio para sobrevivir.',
    culture:
      'Esta comunidad comparte rasgos culturales y organizativos con el pueblo Camëntsá. Mientras este se dedica principalmente a actividades agrícolas, el pueblo Inga tiene una tradición viajera y un espíritu comerciante. Los Inga son médicos tradicionales por excelencia y poseedores de un gran conocimiento de las plantas. El yagé es considerado como el medio a través del cual se revela el mundo terrenal y espiritual. La familia es de carácter nuclear y el espacio familiar gira alrededor del fogón.',
    economy:
      'Su economía se sustenta en la agricultura, especialmente cultivos de maíz, fríjol, papa, hortalizas y frutales. Practican la ganadería y el comercio de leche para el aprovisionamiento de otros sectores. Se sitúan en centros urbanos del país, logrando consolidar bases comerciales sin abandonar su territorio ancestral.',
    traditions: ['Taitas (médicos tradicionales)', 'Yagé (ayahuasca)', 'Cantos ancestrales', 'Comercio tradicional'],
    crafts: ['Bebederos', 'Mochilas', 'Collares de chaquira'],
    location: 'Putumayo, Nariño y Cauca'
  },
  {
    id: 'juhup',
    name: 'Juhup (Yuhup)',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 1.0, lng: -70.3 },
    population: 1080,
    language: 'Juhupda',
    languageFamily: 'Makú-Puinave',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Juhup. Pueblo Makú del Vaupés.',
    otherNames: 'Juhup, Yuju.',
    locationDetail:
      'Tradicionalmente se desplazaban en las áreas cercanas a las cabeceras de los afluentes del río Apaporis. Se ubican en el río Apaporis, Caño Jotabeya y La Libertad, departamento del Amazonas.',
    populationSource:
      'En la base de datos del Dane este grupo se encuentra agregado a los nukak. El término Juhup significa "gente".',
    languageDetail:
      'Parte de la rama lingüística de las etnias engendradas en el término Makú. Comparte el 90% del vocabulario con la lengua de los Yuhup que habitan entre los ríos Tiquié, Taraira y Apaporis.',
    culture:
      'Su mito de origen cuenta como Kuteh, uno de los cuatro seres mitológicos que ordenaron el territorio, hizo mediante una bola de barro el primer ser viviente. Conciben el mundo estructurado en niveles interrelacionados.',
    economy:
      'Los grupos makú son reconocidos como expertos cazadores. Intercambian con otros grupos veneno para la cacería por canoas. Actualmente la pesca y la horticultura ocupan los primeros renglones.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Intercambio ceremonial'],
    crafts: ['Canastos', 'Brazaletes', 'Bebederos'],
    location: 'Vaupés y Amazonas'
  },
  {
    id: 'kakua',
    name: 'Kakua',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.7, lng: -70.8 },
    population: 150,
    language: 'Kakua',
    languageFamily: 'Maku-Puinave',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    description: 'Pueblo Maku-Puinave del Vaupés, tradicionalmente cazador-recolector.',
    otherNames: 'Kakwa, Cacua.',
    locationDetail:
      'El grupo indígena Kakua se encuentra localizedo en el departamento del Vaupés, en el interfluvio de los ríos Querarí y Vaupés. Comparten territorio con grupos kubeo en Wacará. También se encuentran en el río Macú-Paraná junto a población hupdu. La mayoría vive dentro del Resguardo Indígena Parte Oriental del Vaupés.',
    populationSource:
      'No existen muchas fuentes de información. Los datos poblacionales según el censo de 2005 incluyen esta comunidad. Cuenta con aproximadamente 150 hablantes sobre un grupo étnico del mismo tamaño. La lengua está seriamente amenazada.',
    languageDetail:
      'Pertenece a la familia Maku-Puinave. Ha sido asociado con los nukak por su afinidad lingüística, cultural y geográfica. Comparte el noventa por ciento del léxico con la lengua nukak. Es una de las lenguas más amenazadas del Vaupés.',
    culture:
      'En su cosmovisión, su mito de origen habla de un incendio que exterminó a la gente del mundo entonces. Idn Kamni, héroe cultural, dio vida a los kakua juntando tierra y saliva.',
    economy:
      'Sus actividades económicas respondían al modelo nómada de subsistencia, similares a otros grupos denominados makú: caza, pesca, recolección y horticultura itinerante.',
    traditions: ['Maloca y organización comunitaria', 'Caza y pesca', 'Rituales propios'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos'],
    location: 'Vaupés'
  },
  {
    id: 'kamentsa',
    name: 'Kamëntsá',
    region: 'andina-sur',
    departments: ['Putumayo'],
    coordinates: { lat: 1.8, lng: -76.6 },
    population: 3500,
    language: 'Kamëntsá',
    languageFamily: 'Barbacoana',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Kamëntzá. "Gente de la nieve" o "gente del agua". Habitan el Valle de Sibundoy en Putumayo.',
    otherNames: 'Camëntsá, Sibundoy.',
    locationDetail:
      'Se localizan en el Valle del Sibundoy, municipio de Sibundoy, departamento del Putumayo, a una altitud aproximada de 2.200 metros sobre el nivel del mar.',
    populationSource:
      'El Censo DANE 2005 reportó 3.500 personas autoreconocidas como pertenecientes al pueblo Kamëntsá.',
    languageDetail:
      'La lengua kamëntsá pertenece a la familia lingüística Barbacoana. Es una de las lenguas más habladas de esta familia.',
    culture:
      'Comparten el Valle de Sibundoy con el pueblo Inga. Mientras el pueblo Inga tiene una tradición viajera y comercial, los Kamëntsá se dedican principalmente a actividades agrícolas. El Carnaval es la festividad más importante donde se realiza el "Borrachera", un trance chamánico ritual.',
    economy:
      'Su economía se basa en la agricultura de clima frío, cultivando papa, oca, melloco, fríjol, maíz y hortalizas. También crían ganado vacuno y practican el comercio.',
    traditions: ['Carnaval del pueblo', 'Borrachera (trance chamánico)', 'Danza de los indios', 'Minga comunitaria'],
    crafts: ['Flautas traversas', 'Mochilas', 'Instrumentos musicales', 'Tejidos'],
    location: 'Putumayo (Valle de Sibundoy)'
  },
  {
    id: 'kankuamo',
    name: 'Kankuamo',
    region: 'andina-norte-caribe',
    departments: ['Cesar', 'La Guajira', 'Magdalena'],
    coordinates: { lat: 10.4, lng: -73.2 },
    population: 12242,
    language: 'Kankuamo',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Kankankuamos ("Guardianes del equilibrio del mundo"). Uno de los cuatro pueblos de la Sierra Nevada.',
    otherNames: 'Kankankuamos, "guardianes del equilibrio del mundo".',
    locationDetail:
      'Los Kankuamos viven al norte de Colombia y comparten la cultura y tradición con los pueblos de la Sierra Nevada de Santa Marta: Kággabba (Kogui), Iku (Arhuaco) y Wiwa. Según su cosmogonía, cada pueblo representa "una pata de la mesa" y los Kankuamos son los guardianes del equilibrio del mundo.',
    populationSource:
      'El Censo DANE 2005 reportó 12.242 personas autoreconocidas. El 48,62% son hombres (6.182) y 51,38% mujeres (6.532). Se concentran en Cesar (96,29%), La Guajira (1,30%) y Bogotá (0,87%). Representan el 0,91% de la población indígena de Colombia.',
    languageDetail:
      'El idioma kankuamo hace parte del grupo de lenguas de la Sierra Nevada. El 5,46% de la población (7.739 personas) habla la lengua native, evidenciando su alto grado de riesgo de extinción. Las mujeres representan el 51,87% de los hablantes.',
    culture:
      'Los descendientes han hecho un ejercicio colectivo de memoria. El acto ritual de pagamento se ha convertido en un baluarte para la reconstitución de las tradiciones. La celebración del Corpus Christi reafirma el mito fundador del pueblo. La música tradicional de Gaita y Chicote son prácticas importantes.',
    economy:
      'Su sistema económico se sustenta en la posesión individual de cultivos y animales. Los hombres trabajan en las "rozas" donde siembran plátano, banano y frutales en tierras bajas, y papa y cebolla en tierras altas. Las mujeres tejen mochilas.',
    traditions: ['Vallenato tradicional', 'Ceremonia del Yas', 'Pagamento', 'Corpus Christi'],
    crafts: ['Cajas (instrumentos musicales)', 'Gaitas', 'Mochilas'],
    location: 'Sierra Nevada de Santa Marta (Cesar)'
  },
  {
    id: 'karijona',
    name: 'Karijona',
    region: 'amazonia-sur',
    departments: ['Guaviare', 'Amazonas', 'Vaupés'],
    coordinates: { lat: 0.5, lng: -70.5 },
    population: 425,
    language: 'Karijona',
    languageFamily: 'Caribe',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Carijona. Pueblo Caribe del Vaupés y Amazonas.',
    otherNames: 'Carijona, Carifuna, Hianacoto-umaua, Kaliohona.',
    locationDetail:
      'Se ubican en el Bajo río Vaupés, Puerto Nare y río Caquetá. Antiguamente vivían a orillas del río Yarí. Desde los años cuarenta se trasladaron al área del río Apaporis y en épocas recientes al resguardo de Komefayú en el Mirití Paraná (Amazonas). Algunos viven en Puerto Córdoba y La Pedrera.',
    populationSource:
      'Su población se estima en 425 individuos. Se encuentran dispersos en Guaviare, Amazonas y Valle. La mayor concentración está en Mira Flores-Guaviare (128 indígenas) y Leticia-Amazonas (120 personas). Distribución: 191 hombres y 234 mujeres.',
    languageDetail:
      'La lengua karijona pertenece a la familia Caribe. Según estudios de Sergio Meira, pertenece a la rama proto-taranoa de la familia lingüística caribe.',
    culture:
      'Practican el ritual del "Yuruparí" y el "Dabucurí" (ceremonia de intercambio). La estructura sociopolítica responde a un sistema jerárquico con linajes patrilineales. En la antigüedad el poder recaía sobre el chamán o curaca.',
    economy:
      'La horticultura itinerante de roza y quema con cultivo principal de yuca amarga es la base de su economía. Complementan con pesca, caza, recolección y fabricación de artesanías.',
    traditions: ['Cosmovisión y relatos de origen Caribe', 'Ritual Yuruparí', 'Ceremonia Dabucurí', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos'],
    location: 'Guaviare y Amazonas'
  },
  {
    id: 'kawiyari',
    name: 'Kawiyarí',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.6, lng: -70.4 },
    population: 233,
    language: 'Kawiyarí',
    languageFamily: 'Arawak',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Kawiyarí. Pueblo Arawak del Vaupés.',
    otherNames: 'Kawiarí, Kabiyarí, Cabiyari.',
    locationDetail:
      'Viven a orillas del río Apaporis medio y su afluente el caño Cananarí, en el Departamento del Vaupés. Su territorio está comprendido en el Resguardo Parte Oriental del Vaupés. Son afines con los barasana, con quienes han desarrollado fuertes vínculos de reciprocidad.',
    populationSource:
      'Su población se estima en 233 individuos. La mayor concentración está en Bogotá (48 indígenas) y Cali (21 personas). Distribución: 134 hombres y 99 mujeres.',
    languageDetail:
      'Su lengua pertenece a la familia lingüística Arawak. Mantienen relaciones principalmente con los barasana, taiwano y tatuyo. Adquieren la lengua de sus agnados. En el caso de un clan tatuyo, han adquirido la kawiyarí.',
    culture:
      'Su territorio está delimitado según la tradición mítica. Se celebra el "Yuruparí" centrado en el reconocimiento de la anaconda como núcleo de su cultura. Están divididos en dos grupos: los "Paamari" (gente del colibrí grande) y los "Pimiari" (gente del colibrí pequeño), estos últimos encargados de conservar las tradiciones.',
    economy:
      'La economía se fundamenta en la horticultura con prácticas tradicionales de tala y quema, sembrando yuca, ñame, chontaduro, banano, ají, piña, lulo y marañón. Complementan con caza, pesca y recolección.',
    traditions: ['Ritual Yuruparí', 'Chamanismo', 'Sistema de clanes'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas'],
    location: 'Vaupés'
  },
  {
    id: 'cofan',
    name: 'Kofán',
    region: 'andina-sur',
    departments: ['Putumayo', 'Nariño'],
    coordinates: { lat: 0.8, lng: -77.3 },
    population: 1657,
    language: "A'ingae",
    languageFamily: 'Kofan',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Kofán ("Sabios y maestros del mundo espiritual"). Guardianes de la biodiversidad.',
    otherNames: 'Cofan, Kofane.',
    locationDetail:
      'El Pueblo Kofán está ubicado en la frontera entre Colombia y Ecuador. Cerca de 1.200 kofanes habitan once comunidades en las márgenes de los ríos Guamuez y San Miguel: Santa Rosa de Sucumbíos-El Diviso, Jardines de Sucumbíos, San José, Rancherías, Santa Rosa del Guamuez, Yarinal, Afilador, Campoalegre, Nueva Isla, Villa Nueva, Bocana de Luzón, Tshenene, organizados como cabildos territoriales en Putumayo.',
    populationSource:
      'El Censo DANE 2005 reportó 1.657 personas autoreconocidas. El 54,4% son hombres (901) y el 45,6% mujeres (756). Se concentran en Putumayo (88,7%), Nariño (8,1%) y Valle del Cauca (1,3%). Representan el 0,1% de la población indígena de Colombia.',
    languageDetail:
      'Su lengua se denomina A\'ingae. No ha podido ser clasificada dentro de ninguna de las grandes familias lingüísticas, aunque algunos expertos la consideran parte del Macro-Chibcha. Es una lengua aborigen única que se mantiene viva en la mayoría de las comunidades.',
    culture:
      'El pueblo Kofán en tiempos prehispánicos contaba con unos 15 mil habitantes. Fueron afectados por la explotación de quina y caucho. Desde los sesenta, con la llegada de la petrolera Texas, se reconfiguró la dinámica social. Los taitas kofanes gozan de gran reconocimiento por su amplio conocimiento sobre el yagé. El yagé se utiliza en contextos rituales para la adivinación, la toma de decisiones, resolución de conflictos y tratamiento médico.',
    economy:
      'Son horticultores itinerantes, pescadores y cazadores-recolectores. Cultivan maíz, yuca, plátano, fríjol, ají, café, arroz y frutales. Las mujeres se dedican a la elaboración y comercialización de artesanías en semilla, fibras naturales y barro.',
    traditions: ['Conservación del bosque', 'Yagé', 'Danza ceremonial', 'Taitas (chamanes)'],
    crafts: ['Bebederos ceremoniales', 'Canastos', 'Brazaletes', 'Artesanías en semillas'],
    location: 'Putumayo y Nariño'
  },
  {
    id: 'kogui',
    name: 'Kogui (Kágaba)',
    region: 'andina-norte-caribe',
    departments: ['Cesar', 'Magdalena', 'La Guajira'],
    coordinates: { lat: 10.8, lng: -73.8 },
    population: 4500,
    language: 'Kogui',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Kággabba. "Hermanos mayores". Guardianes de las altas cumbres de la Sierra Nevada de Santa Marta.',
    otherNames: 'Kágabba, Cogui, "hermanos mayores".',
    locationDetail:
      'Los Kogui habitan las partes más altas de la Sierra Nevada de Santa Marta, en los departamentos de Cesar, Magdalena y La Guajira. Consideran la Sierra como el corazón del mundo desde el cual se originó todo.',
    populationSource:
      'Su población se estima aproximadamente en 4.500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha. Hay aproximadamente 1.000 a 1.500 hablantes.',
    culture:
      'Son un pueblo profundamente espiritual con su propia filosofía globalizante. Consideran la Sierra como el corazón del mundo. Los Mamos son los sacerdotes espirituales que mantienen el equilibrio universal. El concepto de Aluna (madre naturaleza) es central en su cosmovisión.',
    economy:
      'La agricultura es la principal actividad económica. Practican tumba y quema de bosque para sus cultivos en diferentes pisos térmicos.',
    traditions: ['Aluna (concepto de madre naturaleza)', 'Mamos (sacerdotes espirituales)', 'Ceremonias en los picos nevados', 'Reflexión sobre el equilibrio universal'],
    crafts: ['Alpargatas', 'Canastos tejidos', 'Mochilas ceremoniales', 'Sombreros tradicionales'],
    location: 'Sierra Nevada de Santa Marta (Cesar, Magdalena, La Guajira)'
  },
  {
    id: 'kuiba',
    name: 'Kuiba (Wámac)',
    region: 'llanos-orientales',
    departments: ['Vichada', 'Meta'],
    coordinates: { lat: 5.0, lng: -69.5 },
    population: 4000,
    language: 'Kuiba',
    languageFamily: 'Arawak',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Wámac. Pueblo Arawak que habita los llanos del Vichada y Meta.',
    otherNames: 'Wámac, Huica.',
    locationDetail:
      'Se localizan en los departamentos de Vichada y Meta, en las riveras de los ríos Meta, Vichada y sus afluentes.',
    populationSource:
      'Su población se estima aproximadamente en 4.000 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la familia Arawak de los llanos orientales.',
    economy:
      'La economía se basa en la horticultura, caza y pesca. Cultivan yuca, plátano, maíz y otros productos de subsistencia.',
    traditions: ['Caza', 'Pesca', 'Agricultura', 'Rituales comunitarios'],
    crafts: ['Canastos', 'Brazaletes', 'Bebederos', 'Hamacas'],
    location: 'Vichada y Meta'
  },
  {
    id: 'kurripaco',
    name: 'Kurripaco',
    region: 'amazonia-norte',
    departments: ['Guainía', 'Vaupés', 'Amazonas'],
    coordinates: { lat: 2.8, lng: -69.0 },
    population: 6000,
    language: 'Kurripaco',
    languageFamily: 'Arawak',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Curripaco. Habitan la zona del Inírida en Guainía y el Vaupés.',
    otherNames: 'Curripaco, Koripaco, Curripako.',
    locationDetail:
      'Se localizan principalmente en el departamento de Guainía, en la cuenca del río Inírida y sus afluentes. También hay presencia en Vaupés y Amazonas.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 6.000 personas autoreconocidas como Kurripaco.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak. La lengua curripaco es hablada por aproximadamente 2.000 personas.',
    culture:
      'Los Kurripaco tienen tradiciones culturales propias de la Amazonía colombiana. Son conocidos por su arte plumario y sus danzas ceremoniales.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección. Cultivan yuca, plátano, maíz, frutas y otros productos.',
    traditions: ['Arte plumario', 'Danza ceremonial', 'Pesca ritual', 'Rituales de curación'],
    crafts: ['Brazaletes de plumas', 'Canastos', 'Bebederos', 'Collares de semillas'],
    location: 'Guainía, Vaupés y Amazonas'
  },
  {
    id: 'letuama',
    name: 'Letuama',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.4, lng: -70.4 },
    population: 600,
    language: 'Letuama',
    languageFamily: 'Tanimuka-Letuama',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Pueblo de la familia Tanimuka-Letuama ubicado en el Vaupés.',
    otherNames: 'Letuama.',
    locationDetail:
      'Se localizan en el departamento del Vaupés, en el interfluvio de los ríos Vaupés y Tiquié.',
    populationSource:
      'Su población se estima aproximadamente en 600 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Tanimuka-Letuama.',
    culture:
      'Comparten características culturales con otros grupos de la región amazónica. El chamanismo tiene un papel importante en su cosmovisión.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales ceremoniales'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas'],
    location: 'Vaupés'
  },
  {
    id: 'makaguaje',
    name: 'Makaguaje',
    region: 'amazonia-sur',
    departments: ['Amazonas'],
    coordinates: { lat: -0.5, lng: -72.0 },
    population: 1500,
    language: 'Makaguaje',
    languageFamily: 'Arawak',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Makaguaje. Pueblo Arawak amazónico.',
    otherNames: 'Macaguaje.',
    locationDetail:
      'Se localizan en el departamento del Amazonas, en las riveras de los ríos Caquetá, Putumayo y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la Amazonía colombiana.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Agricultura', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra'],
    location: 'Amazonas'
  },
  {
    id: 'kakuva',
    name: 'Kakuva',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.8, lng: -70.2 },
    population: 1500,
    language: 'Kakuva',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Pueblo Tukano Oriental ubicado en el Vaupés.',
    otherNames: 'Cacua, Kakwa.',
    locationDetail:
      'Se encuentran ubicados en el departamento del Vaupés, formando parte del complejo cultural del Vaupés junto con otros pueblos de la familia lingüística Tucano Oriental.',
    populationSource:
      'Su población se estima aproximadamente en 1.500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental. La lengua se encuentra en situación de vulnerabilidad.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés, incluyendo el sistema de organización social, las prácticas rituales y la cosmovisión del Yuruparí. Su patrón de asentamiento tradicional incluye la maloka como centro de la vida social y ceremonial.',
    economy:
      'La economía se basa en la horticultura de tala y quema, caza, pesca y recolección. Cultivan yuca amarga, plátano, maíz y otros productos de subsistencia.',
    traditions: ['Danza ceremonial', 'Ceremonia del Yuruparí', 'Pesca'],
    crafts: ['Bebederos', 'Canastos', 'Brazaletes'],
    location: 'Vaupés'
  },
  {
    id: 'masiguare',
    name: 'Masiguare',
    region: 'llanos-orientales',
    departments: ['Meta'],
    coordinates: { lat: 3.8, lng: -72.5 },
    population: 1500,
    language: 'Masiguare',
    languageFamily: 'Guahiboan',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Pueblo de la familia Guahiboan ubicado en los llanos del Meta.',
    otherNames: 'Masiguare.',
    locationDetail:
      'Se localizan en el departamento del Meta, en las riveras de los ríos Meta y sus afluentes.',
    populationSource:
      'Su población se estima aproximadamente en 1.500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Guahiboan.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la familia Guahiboan de los llanos orientales.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Danza', 'Rituales comunitarios'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos y flechas'],
    location: 'Meta'
  },
  {
    id: 'matapi',
    name: 'Matapí',
    region: 'amazonia-norte',
    departments: ['Amazonas', 'Vaupés'],
    coordinates: { lat: -0.3, lng: -71.5 },
    population: 800,
    language: 'Matapí',
    languageFamily: 'Arawak',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Pueblo Arawak amazónico en riesgo crítico.',
    otherNames: 'Matapí.',
    locationDetail:
      'Se localizan en el departamento del Amazonas y Vaupés, en las riveras de los ríos Apaporis y sus afluentes.',
    populationSource:
      'Su población se estima aproximadamente en 800 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la Amazonía. La chagra y los recursos del río son fundamentales para su subsistencia.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Chagra', 'Caza y pesca', 'Vínculos de parentesco', 'Territorio'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos y flechas'],
    location: 'Amazonas y Vaupés'
  },
  {
    id: 'mirana',
    name: 'Miraña',
    region: 'amazonia-sur',
    departments: ['Amazonas', 'Putumayo'],
    coordinates: { lat: -0.5, lng: -73.5 },
    population: 1500,
    language: 'Miraña',
    languageFamily: 'Arawak',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Miraña. Pueblo Arawak que habita la región amazónica.',
    otherNames: 'Miraña, Míranha.',
    locationDetail:
      'Se localizan en el departamento del Amazonas y Putumayo, en las riveras de los ríos Caquetá, Putumayo y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la Amazonía colombiana.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Agricultura tradicional'],
    crafts: ['Canastos', 'Brazaletes', 'Bebederos', 'Trabajos en fibra'],
    location: 'Amazonas y Putumayo'
  },
  {
    id: 'mokana',
    name: 'Mokaná',
    region: 'andina-norte-caribe',
    departments: ['Atlántico', 'Bolívar'],
    coordinates: { lat: 10.5, lng: -75.0 },
    population: 8000,
    language: 'Mokaná',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Herederos de la tradición Tairona en el departamento del Atlántico y Bolívar.',
    otherNames: 'Mocaná.',
    locationDetail:
      'Se localizan en los departamentos de Atlántico y Bolívar, en la región de los Montes de María y áreas circundantes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 8.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha. La lengua está en proceso de desaparición.',
    culture:
      'Herederos de la tradición Tairona, comparten elementos culturales con otros grupos de la región Caribe.',
    economy:
      'La economía se basa en la agricultura, pesca y cría de animales.',
    traditions: ['Danza ceremonial', 'Tejido', 'Agricultura', 'Rituales tradicionales'],
    crafts: ['Mochilas', 'Canastos', 'Bordados', 'Trabajos en barro'],
    location: 'Atlántico y Bolívar'
  },
  {
    id: 'muinane',
    name: 'Muinane',
    region: 'amazonia-sur',
    departments: ['Putumayo'],
    coordinates: { lat: 0.5, lng: -75.5 },
    population: 1200,
    language: 'Muinane',
    languageFamily: 'Witoto',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Muinane. Reconocidos por sus profundos conocimientos de la selva amazónica.',
    otherNames: 'Muinane.',
    locationDetail:
      'Se localizan en el departamento del Putumayo, en las riveras de los ríos Putumayo, Cotuhé y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.200 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Los Muinane comparten tradiciones con otros grupos Witoto de la Amazonía. Son reconocidos por sus profundos conocimientos de la selva y la medicina tradicional.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Danza del agua', 'Medicina tradicional', 'Leyendas de la creación', 'Rituales chamánicos'],
    crafts: ['Canastos', 'Brazaletes de semillas', 'Pinturas corporales', 'Trabajos en fibra'],
    location: 'Putumayo'
  },
  {
    id: 'muisca',
    name: 'Muisca',
    region: 'andina-sur',
    departments: ['Cundinamarca', 'Boyacá', 'Santander'],
    coordinates: { lat: 4.8, lng: -74.2 },
    population: 6000,
    language: 'Muisca',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Herederos de una de las civilizaciones más avanzadas de América prehispánica.',
    otherNames: 'Muisca, Mosca, Muzo.',
    locationDetail:
      'Los Muisca habitaron la región que actualmente ocupa los departamentos de Cundinamarca, Boyacá y Santander. Su territorio ancestral se centraba en el altiplano cundiboyacense.',
    populationSource:
      'El número de personas que se autoreconocen como Muisca ha aumentado significativamente. Se estiman aproximadamente 6.000 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha. La lengua muisca está extinta, aunque se están realizando esfuerzos de revitalización.',
    culture:
      'Los Muisca fueron conocidos por su organización política sofisticada, el comercio, la agricultura avanzada y la orfebrería. Su territorio fue uno de los más densamente poblados de América prehispánica.',
    economy:
      'La economía se basaba en la agricultura avanzada, el comercio y la artesanía (orfebrería, tejidos, cerámica).',
    traditions: ['Tradiciones Muiscas', 'Danza', 'Agricultura ancestral', 'Ceremonias tradicionales'],
    crafts: ['Tejidos', 'Cerámica', 'Orfebrería', 'Trabajos en oro'],
    location: 'Cundinamarca, Boyacá y Santander'
  },
  {
    id: 'nasa',
    name: 'Nasa (Páez)',
    region: 'andina-sur',
    departments: ['Cauca', 'Huila', 'Tolima'],
    coordinates: { lat: 2.5, lng: -76.5 },
    population: 180000,
    language: 'Nasa yuwe',
    languageFamily: 'Paez',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Nasa Yuwe. Uno de los pueblos indígenas más grandes y organizados de Colombia.',
    otherNames: 'Páez, "gente".',
    locationDetail:
      'Los Nasa se localizan principalmente en el departamento del Cauca, especialmente en la zona de Tierradentro y el norte del Cauca. También hay presencia en Huila y Tolima.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 180.000 personas autoreconocidas como Nasa o Páez.',
    languageDetail:
      'Pertenece a la familia lingüística Paez. La lengua Nasa Yuwe es hablada por una porción significativa de la población.',
    culture:
      'Los Nasa son conocidos por su fuerte organización política y territorial. El Consejo Regional Indígena del Cauca (CRIC) fue fundado por los Nasa en 1971. El concepto de "Plan de Vida" es central en su cosmovisión.',
    economy:
      'La economía se basa en la agricultura, especialmente el cultivo de papa, maíz, cebolla y otros productos de clima frío. La ganadería también es importante.',
    traditions: ['Cabildo Nasa', 'Danza tradicional', 'Sistema de gobernanza propio', 'Plan de Vida'],
    crafts: ['Mochilas Nasa', 'Tejidos con diseños geométricos', 'Cestería tradicional', 'Ruanas'],
    location: 'Cauca, Huila y Tolima'
  },
  {
    id: 'nonuya',
    name: 'Nonuya',
    region: 'amazonia-sur',
    departments: ['Putumayo'],
    coordinates: { lat: 0.2, lng: -74.8 },
    population: 300,
    language: 'Nonuya',
    languageFamily: 'Witoto',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Nonuya. Pueblo Witoto en riesgo crítico en el Putumayo.',
    otherNames: 'Nonuya.',
    locationDetail:
      'Se localizan en el departamento del Putumayo, en la región del bajo Putumayo.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 300 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Comparten tradiciones con otros grupos Witoto. La maloka es el espacio social y ceremonial central.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Maloca', 'Chamanismo witoto', 'Caza, pesca y chagra', 'Rituales ceremoniales'],
    crafts: ['Canastos', 'Brazaletes', 'Bebederos', 'Trabajos en fibra'],
    location: 'Putumayo'
  },
  {
    id: 'nukak',
    name: 'Nukak',
    region: 'amazonia-norte',
    departments: ['Guainía', 'Vaupés', 'Guaviare'],
    coordinates: { lat: 2.5, lng: -69.0 },
    population: 400,
    language: 'Nukak',
    languageFamily: 'Maku-Puinave',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Nukak Makú. Uno de los últimos pueblos nómadas de Colombia.',
    otherNames: 'Nukak Makú.',
    locationDetail:
      'Se localizan en los departamentos de Guainía, Vaupés y Guaviare, en el interfluvio de los ríos Guaviare, Inírida y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 400 personas autoreconocidas como Nukak. Algunos datos los agregan con los Juhup.',
    languageDetail:
      'Pertenece a la familia lingüística Maku-Puinave.',
    culture:
      'Los Nukak son uno de los últimos pueblos seminómadas de Colombia. Tradicionalmente eran nómadas cazadores-recolectores de la selva amazónica.',
    economy:
      'La economía se basa en la caza, pesca y recolección. Han ido incorporando gradualmente la horticultura.',
    traditions: ['Nomadismo', 'Caza y recolección', 'Vida seminómada', 'Conocimientos ancestrales de la selva'],
    crafts: ['Brazaletes', 'Bolsas', 'Arcos y flechas', 'Canastos'],
    location: 'Guainía, Vaupés y Guaviare'
  },
  {
    id: 'ocaina',
    name: 'Ocaina',
    region: 'amazonia-sur',
    departments: ['Putumayo'],
    coordinates: { lat: 0.5, lng: -75.0 },
    population: 500,
    language: 'Ocaina',
    languageFamily: 'Witoto',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Ocaina. Pueblo Witoto en riesgo crítico en el Putumayo.',
    otherNames: 'Ocaina.',
    locationDetail:
      'Se localizan en el departamento del Putumayo, en la región del bajo Putumayo.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Comparten tradiciones con otros grupos Witoto. El chamanismo es central en su cosmovisión.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales ceremoniales'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Trabajos en fibra'],
    location: 'Putumayo'
  },
  {
    id: 'pasto',
    name: 'Pastos',
    region: 'andina-sur',
    departments: ['Nariño'],
    coordinates: { lat: 1.0, lng: -77.5 },
    population: 45000,
    language: 'Pastos',
    languageFamily: 'Barbacoana',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Pastos. Habitan la zona alta de Nariño cerca de la frontera con Ecuador.',
    otherNames: 'Pasto.',
    locationDetail:
      'Se localizan en el departamento de Nariño, en la zona alta andina cerca de la frontera con Ecuador. Los municipios de mayor concentración son Túquerres, Ipiales y Pasto.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 45.000 personas autoreconocidas como Pastos.',
    languageDetail:
      'Pertenece a la familia lingüística Barbacoana.',
    culture:
      'Comparten tradiciones con otros grupos de la región andina. Son conocidos por sus tejidos de ruanas y el cultivo de papa.',
    economy:
      'La economía se basa en la agricultura de clima frío, especialmente el cultivo de papa, cebolla, habas y otros productos.',
    traditions: ['Danza de los indios', 'Tejido de ruanas', 'Cultivo de papa', 'Fiestas tradicionales'],
    crafts: ['Ruanas de lana', 'Mochilas', 'Sombreros', 'Tejidos tradicionales'],
    location: 'Nariño (Túquerres, Ipiales, Pasto)'
  },
  {
    id: 'piapoco',
    name: 'Piapoco',
    region: 'llanos-orientales',
    departments: ['Casanare', 'Meta', 'Arauca'],
    coordinates: { lat: 5.0, lng: -72.0 },
    population: 8000,
    language: 'Piapoco',
    languageFamily: 'Arawak',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Piapoco. Pueblo Arawak de los llanos orientales.',
    otherNames: 'Piapoco, Piapoko.',
    locationDetail:
      'Se localizan en los departamentos de Casanare, Meta y Arauca, en las riveras de los ríos Meta, Casanare y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 8.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones culturales con otros grupos de los llanos orientales.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Agricultura', 'Rituales comunitarios'],
    crafts: ['Canastos', 'Brazaletes', 'Hamacas', 'Trabajos en fibra'],
    location: 'Casanare, Meta y Arauca'
  },
  {
    id: 'piaroa',
    name: 'Piaroa',
    region: 'llanos-orientales',
    departments: ['Vichada', 'Meta', 'Guainía', 'Arauca'],
    coordinates: { lat: 4.5, lng: -68.5 },
    population: 15000,
    language: 'Piaroa',
    languageFamily: 'Piaroa',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Piaroa. Conocidos por su pacifismo y profundos conocimientos sobre fauna y flora.',
    otherNames: 'Piaroa, Piaroa.',
    locationDetail:
      'Se localizan en los departamentos de Vichada, Meta, Guainía y Arauca, en las riveras de los ríos Orinoco, Meta, Vichada y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 15.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Piaroa (aislada).',
    culture:
      'Los Piaroa son conocidos por su pacifismo y sus profundos conocimientos sobre la fauna y flora de los llanos y la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Pacifismo', 'Caza sostenible', 'Chamanismo', 'Conocimientos de fauna y flora'],
    crafts: ['Bebederos', 'Canastos', 'Brazaletes', 'Trabajos en madera'],
    location: 'Vichada, Meta, Guainía y Arauca'
  },
  {
    id: 'piratapuyo',
    name: 'Piratapuyo',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.5, lng: -70.3 },
    population: 1500,
    language: 'Piratapuyo',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Piratapuyo. Pueblo Tukano Oriental ubicado en el Vaupés.',
    otherNames: 'Piratapuyo.',
    locationDetail:
      'Se localizan en el departamento del Vaupés, en el río Piratapopo y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Danza ceremonial', 'Ritual del Yuruparí'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'pisamira',
    name: 'Pisamira',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.6, lng: -70.5 },
    population: 500,
    language: 'Pisamira',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    description: 'Pisamira. Pueblo Tukano Oriental pequeño en riesgo crítico.',
    otherNames: 'Pisamira.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'Su población se estima aproximadamente en 500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Rituales ligados al Yuruparí', 'Caza y pesca', 'Música y danza ritual'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'puinave',
    name: 'Puinave',
    region: 'amazonia-norte',
    departments: ['Guainía', 'Vichada'],
    coordinates: { lat: 3.5, lng: -68.0 },
    population: 6000,
    language: 'Puinave',
    languageFamily: 'Puinave',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Puinave. Habitan la zona del río Inírida en Guainía y Vichada.',
    otherNames: 'Puinave.',
    locationDetail:
      'Se localizan en los departamentos de Guainía y Vichada, en la cuenca del río Inírida y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 6.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Puinave.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la región amazónica y de los llanos.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Danza ceremonial', 'Caza', 'Pesca', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Trabajos en fibra'],
    location: 'Guainía y Vichada'
  },
  {
    id: 'saliba',
    name: 'Sáliba',
    region: 'llanos-orientales',
    departments: ['Casanare', 'Meta'],
    coordinates: { lat: 4.5, lng: -72.0 },
    population: 5000,
    language: 'Saliba',
    languageFamily: 'Sáliva',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Sáliba. Pueblo de la familia Sáliva que habita el norte del Meta y Casanare.',
    otherNames: 'Sáliba.',
    locationDetail:
      'Se localizan en los departamentos de Casanare y Meta, en las riveras de los ríos Meta, Casanare y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 5.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Sáliva.',
    culture:
      'Comparten tradiciones culturales con otros grupos de los llanos orientales.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Ceremonias', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Trabajos en fibra'],
    location: 'Casanare y Meta'
  },
  {
    id: 'senu',
    name: 'Senú',
    region: 'andina-norte-caribe',
    departments: ['Córdoba', 'Sucre', 'Bolívar'],
    coordinates: { lat: 8.0, lng: -75.5 },
    population: 15000,
    language: 'Senú',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Senú. Habitan la región de los Montes de María y Córdoba.',
    otherNames: 'Senú, Zenú.',
    locationDetail:
      'Se localizan en los departamentos de Córdoba, Sucre y Bolívar, en la región de los Montes de María.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 15.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha.',
    culture:
      'Comparten tradiciones culturales con otros grupos de la región Caribe.',
    economy:
      'La economía se basa en la agricultura, pesca y cría de animales.',
    traditions: ['Danza tradicional', 'Agricultura', 'Pesca', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Hamacas', 'Bordados', 'Trabajos en barro'],
    location: 'Córdoba, Sucre y Bolívar'
  },
  {
    id: 'sikuani',
    name: 'Sikuani (Cuiva)',
    region: 'llanos-orientales',
    departments: ['Meta', 'Casanare', 'Vichada', 'Arauca'],
    coordinates: { lat: 4.0, lng: -72.5 },
    population: 12000,
    language: 'Sikuani',
    languageFamily: 'Guahiboan',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Sikuani. Uno de los pueblos más grandes de los llanos orientales.',
    otherNames: 'Cuiva, "gente".',
    locationDetail:
      'Se localizan en los departamentos de Meta, Casanare, Vichada y Arauca, en las sabanas y riveras de los ríos de los llanos orientales.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 12.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Guahiboan.',
    culture:
      'Los Sikuani son uno de los pueblos más grandes de los llanos orientales. Mantienen tradiciones de caza, pesca y agricultura.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Danza ceremonial', 'Caza', 'Pesca', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Trabajos en palma'],
    location: 'Meta, Casanare, Vichada y Arauca'
  },
  {
    id: 'siona',
    name: 'Siona',
    region: 'amazonia-sur',
    departments: ['Putumayo', 'Nariño'],
    coordinates: { lat: 0.5, lng: -77.0 },
    population: 1500,
    language: 'Siona',
    languageFamily: 'Arawak',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Siona. Habitan la zona de transición entre los Andes y la Amazonía.',
    otherNames: 'Siona.',
    locationDetail:
      'Se localizan en los departamentos de Putumayo y Nariño, en la zona de transición entre los Andes y la Amazonía.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones con otros grupos de la región. El Yagé es central en su cosmovisión.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Yagé ceremonial', 'Danza ceremonial', 'Caza sostenible', 'Chamanismo'],
    crafts: ['Bebederos', 'Mochilas', 'Collares de semillas', 'Canastos'],
    location: 'Putumayo y Nariño'
  },
  {
    id: 'siriano',
    name: 'Siriano',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 1.0, lng: -70.0 },
    population: 500,
    language: 'Siriano',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Siriano. Pueblo Tukano Oriental pequeño en riesgo crítico.',
    otherNames: 'Siriano.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'Su población se estima aproximadamente en 500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Ritual del Yuruparí'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'taiwano',
    name: 'Taiwano',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.7, lng: -70.5 },
    population: 1200,
    language: 'Taiwano',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Taiwano. Pueblo Tukano Oriental ubicado en el Vaupés.',
    otherNames: 'Taiwano.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.200 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Danza', 'Caza', 'Pesca', 'Ritual del Yuruparí'],
    crafts: ['Canastos', 'Brazaletes', 'Bebederos', 'Flautas'],
    location: 'Vaupés'
  },
  {
    id: 'tanimuka',
    name: 'Tanimuka',
    region: 'amazonia-norte',
    departments: ['Vaupés', 'Amazonas'],
    coordinates: { lat: 0.5, lng: -70.5 },
    population: 2000,
    language: 'Tanimuka',
    languageFamily: 'Tanimuka-Letuama',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Tanimuka. Pueblo amazónico ubicado en el Vaupés y Amazonas.',
    otherNames: 'Tanimuka.',
    locationDetail:
      'Se localizan en los departamentos del Vaupés y Amazonas, en la cuenca de los ríos Vaupés y Apaporis.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 2.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tanimuka-Letuama.',
    culture:
      'Comparten tradiciones con otros grupos de la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Ceremonia del Yuruparí', 'Danza', 'Pesca', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Bebederos'],
    location: 'Vaupés y Amazonas'
  },
  {
    id: 'tariano',
    name: 'Tariano',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 1.0, lng: -69.8 },
    population: 4000,
    language: 'Tariano',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800',
    description: 'Tariano. Conocidos por su música tradicional.',
    otherNames: 'Tariano.',
    locationDetail:
      'Se localizan en el departamento del Vaupés, en la cuenca del río Vaupés.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 4.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Música tradicional', 'Danza ceremonial', 'Pesca', 'Ritual del Yuruparí'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'tatuyo',
    name: 'Tatuyo',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.8, lng: -70.3 },
    population: 1500,
    language: 'Tatuyo',
    languageFamily: 'Tucano Oriental',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Tatuyo. Pueblo Tukano Oriental ubicado en el Vaupés.',
    otherNames: 'Tatuyo.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Ceremonia del Yuruparí', 'Danza', 'Pesca', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'ticuna',
    name: 'Ticuna (Tikuna)',
    region: 'amazonia-sur',
    departments: ['Amazonas', 'Putumayo'],
    coordinates: { lat: -1.5, lng: -73.0 },
    population: 30000,
    language: 'Ticuna',
    languageFamily: 'Ticuna',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Ticuna. Uno de los pueblos más numerosos de la Amazonía.',
    otherNames: 'Tikuna, Tucuna.',
    locationDetail:
      'Se localizan en el departamento del Amazonas, especialmente en la zona de Leticia, Puerto Nariño y a lo largo del río Putumayo.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 30.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Ticuna.',
    culture:
      'Los Ticuna son uno de los pueblos más numerosos de la Amazonía colombiana. Son conocidos por sus danzas como el Charachi.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Danza del Charachi', 'Pesca', 'Agricultura', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en palma', 'Tejidos'],
    location: 'Amazonas y Putumayo'
  },
  {
    id: 'totoro',
    name: 'Totoró',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.5, lng: -76.8 },
    population: 8000,
    language: 'Totoró',
    languageFamily: 'Paez',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Totoró. Habitan el municipio de Totoró en Cauca.',
    otherNames: 'Totoró.',
    locationDetail:
      'Se localizan en el departamento del Cauca, especialmente en el municipio de Totoró.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 8.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Paez.',
    culture:
      'Comparten tradiciones con otros grupos Nasa del Cauca.',
    economy:
      'La economía se basa en la agricultura de clima frío.',
    traditions: ['Ceremonia del agua', 'Danza del venado', 'Cultivo de yuca', 'Rituales tradicionales'],
    crafts: ['Tejidos tradicionales', 'Cestería', 'Mochilas', 'Trabajos en lana'],
    location: 'Cauca (Totoró)'
  },
  {
    id: 'tshiripu',
    name: 'Tsiripu',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.4, lng: -76.7 },
    population: 500,
    language: 'Paez',
    languageFamily: 'Paez',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Tsiripu. Pueblo Nasa ubicado en el Cauca.',
    otherNames: 'Tsiripu.',
    locationDetail:
      'Se localizan en el departamento del Cauca.',
    populationSource:
      'Su población se estima aproximadamente en 500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Paez.',
    culture:
      'Comparten tradiciones con otros grupos Nasa del Cauca.',
    economy:
      'La economía se basa en la agricultura de clima frío.',
    traditions: ['Danza tradicional', 'Agricultura', 'Tejido', 'Rituales tradicionales'],
    crafts: ['Mochilas', 'Tejidos', 'Bordados', 'Trabajos en lana'],
    location: 'Cauca'
  },
  {
    id: 'tukano',
    name: 'Tukano',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 1.0, lng: -70.0 },
    population: 15000,
    language: 'Tukano',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Tukano. El pueblo más numeroso del Vaupés.',
    otherNames: 'Tukano.',
    locationDetail:
      'Se localizan en el departamento del Vaupés, en la cuenca del río Vaupés y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 15.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Los Tukano son el pueblo más numeroso del Vaupés. Comparten las características culturales del complejo Tukano Oriental.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Yuruparí', 'Danza ceremonial', 'Ceremonia de la coca', 'Chamanismo'],
    crafts: ['Bebederos', 'Flautas', 'Máscaras', 'Canastos'],
    location: 'Vaupés'
  },
  {
    id: 'tule',
    name: 'Tule (Guna)',
    region: 'pacifica',
    departments: ['Córdoba', 'Chocó', 'Antioquia', 'Atlántico'],
    coordinates: { lat: 7.5, lng: -76.0 },
    population: 2383,
    language: 'Cuna',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Guanadule ("La gente"). Conocidos mundialmente por sus molas.',
    otherNames: 'Guanadule, Tula, Cuna, Kuna, Tacarcuna, Darienes.',
    locationDetail:
      'La mayor parte del pueblo Tule se encuentra en Panamá (Comarcas Kuna Yala, Madungandí, Wargantí y Wala). En Colombia se encuentra en el resguardo Caimán Nuevo (Antioquia) y en el resguardo Arquía (Chocó), bordeando el golfo de Urabá.',
    populationSource:
      'El Censo DANE 2005 reportó 2.383 personas autoreconocidas. El 50,3% son hombres (1.198) y el 49,7% mujeres (1.185). Se concentran en Antioquia (51,6%), Chocó (14,6%) y Atlántico (11,2%). El 32,5% habita en zonas urbanas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha. Los Cuna manejan dos variedades: la diaria (para labores cotidianas) y la ceremonial (para onmaket o congresos, rituales de curación y ceremonias de pubertad femenina).',
    culture:
      'Han mantenido sus manifestaciones culturales, cosmovisión, organización social y especialmente su lengua. En su sistema de creencias, Paptumat es el creador del mundo y de las doce capas en que se divide. Sus especialistas mágico-religiosos son tres chamanes. El Monte Takarkuna es el espacio sagrado ubicado en la cumbre que divide Panamá y Colombia. Durante la colonia desempeñaron un papel importante como comerciantes de cacao, quina y pieles.',
    economy:
      'Las actividades económicas básicas son la horticultura, caza y pesca, y últimamente ganadería en pequeña escala. Cultivan maíz, yuca, plátano, arroz, cacao y caña. En la actualidad cultivan grandes extensiones de plátano para exportación.',
    traditions: ['Mola (arte textil)', 'Danza del lujo', 'Toma de na', 'Ceremonias de pubertad femenina'],
    crafts: ['Molas', 'Tashtek (brazaletes de oro)', 'Hamacas decoradas'],
    location: 'Región del Darién, Córdoba, Chocó y Antioquia'
  },
  {
    id: 'tuyuka',
    name: 'Tuyuka',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.3, lng: -70.8 },
    population: 1800,
    language: 'Tuyuka',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Tuyuka. Conocidos por sus conocimientos astronómicos.',
    otherNames: 'Tuyuka.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 1.800 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Astronomía tradicional', 'Danza ceremonial', 'Ceremonias', 'Ritual del Yuruparí'],
    crafts: ['Bebederos', 'Canastos', 'Brazaletes', 'Flautas'],
    location: 'Vaupés'
  },
  {
    id: 'uitoto',
    name: 'Uitoto (Huitoto)',
    region: 'amazonia-sur',
    departments: ['Putumayo', 'Amazonas', 'Caquetá'],
    coordinates: { lat: 0.3, lng: -74.5 },
    population: 10000,
    language: 'Huitoto',
    languageFamily: 'Witoto',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Uitoto. Uno de los pueblos más conocidos de la Amazonía colombiana.',
    otherNames: 'Huitoto, Witoto.',
    locationDetail:
      'Se localizan en los departamentos de Putumayo, Amazonas y Caquetá, en la región del bajo Putumayo y sus afluentes.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 10.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Los Uitoto son uno de los pueblos más conocidos de la Amazonía colombiana. Son conocidos por su sistema de clanes y la Fuma Deijena.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Fuma deijena', 'Danza tradicional', 'Sistema de clanes', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes de chaquira', 'Bebederos', 'Trabajos en fibra'],
    location: 'Putumayo, Amazonas y Caquetá'
  },
  {
    id: 'uwa',
    name: "U'wa",
    region: 'andina-norte-caribe',
    departments: ['Santander', 'Boyacá', 'Norte de Santander'],
    coordinates: { lat: 6.5, lng: -72.8 },
    population: 6000,
    language: "U'wa",
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: "U'wa. 'Gente del agua'. Guardianes de fuentes de agua sagradas.",
    otherNames: "U'wa, Uwa.",
    locationDetail:
      'Se localizan en los departamentos de Santander, Boyacá y Norte de Santander, en la región oriental de la Cordillera Oriental.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 6.000 personas autoreconocidas.',
    languageDetail:
      "Pertenece a la familia lingüística Chibcha.",
    culture:
      "Los U'wa son guardianes de fuentes de agua sagradas. Son conocidos por su resistencia a la explotación petrolera en su territorio.",
    economy:
      'La economía se basa en la agricultura y la minería tradicional.',
    traditions: ['Ceremonias del agua', 'Danza', 'Agricultura ancestral', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Tejidos', 'Trabajos en madera', 'Trabajos en barro'],
    location: 'Santander, Boyacá y Norte de Santander'
  },
  {
    id: 'wanano',
    name: 'Wanano',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 1.2, lng: -69.8 },
    population: 5000,
    language: 'Wanano',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Wanano. Pueblo del complejo Tukano Oriental en el Vaupés.',
    otherNames: 'Wanano, Guanano.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 5.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Ritual del Yuruparí'],
    crafts: ['Canastos', 'Brazaletes', 'Plumas', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'waunan',
    name: 'Wounaan (Woun Meu)',
    region: 'pacifica',
    departments: ['Chocó', 'Valle del Cauca'],
    coordinates: { lat: 5.0, lng: -77.0 },
    population: 3000,
    language: 'Wounaan',
    languageFamily: 'Embera-Chocó',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800',
    description: 'Wounaan. Pueblo Embera-Chocó del Pacífico.',
    otherNames: 'Woun Meu, Waunan.',
    locationDetail:
      'Se localizan en los departamentos del Chocó y Valle del Cauca, en la región del Pacífico.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 3.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Embera-Chocó.',
    culture:
      'Comparten tradiciones con otros grupos Embera del Pacífico.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Danza ceremonial', 'Jaibanismo', 'Pesca tradicional', 'Rituales tradicionales'],
    crafts: ['Bebederos', 'Canastos', 'Brazaletes', 'Tejidos'],
    location: 'Chocó y Valle del Cauca'
  },
  {
    id: 'wayuu',
    name: 'Wayuu',
    region: 'andina-norte-caribe',
    departments: ['La Guajira', 'Cesar', 'Magdalena'],
    coordinates: { lat: 11.5, lng: -72.3 },
    population: 470000,
    language: 'Wayuunaiki',
    languageFamily: 'Arawak',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1589506383004-479db8661e02?w=800',
    description: 'El Wayúu. El pueblo indígena más numeroso de Colombia.',
    otherNames: 'Wayúu, Guajiros.',
    locationDetail:
      'Habitan la región de La Guajira en el norte de Colombia. Comparten territorio con otros pueblos de la Sierra Nevada de Santa Marta. Están distribuidos en la Media y Alta Guajira.',
    populationSource:
      'Son el pueblo indígena más numeroso de Colombia con aproximadamente 470.000 personas.',
    languageDetail:
      'Wayuunaiki pertenece a la familia lingüística Arawak. Es una de las lenguas indígenas con mayor número de hablantes en Colombia.',
    culture:
      'Son expertos en sobrevivir con poca agua en el desierto. Mantienen tradiciones de tejido de chinchorros. La pechichada es un ritual de iniciación importante. La majayura es una fiesta ceremonial central. El权 sistema de clanes matricentral es fundamental.',
    economy:
      'La ganadería de cabras y ovejas es importante. El tejido de artesanías complementa su economía. Han enfrentado crisis por sequías y megaproyectos.',
    traditions: ['Tejido de chinchorros', 'Pechichada (ritual de iniciación)', 'Majayura (fiesta ceremonial)', 'Sistema de clanes'],
    crafts: ['Hamacas', 'Moñonas', 'Sulmajuna (bolsos tejidos)', 'Cestería'],
    location: 'La Guajira'
  },
  {
    id: 'wiwa',
    name: 'Wiwa',
    region: 'andina-norte-caribe',
    departments: ['Cesar', 'Magdalena', 'La Guajira'],
    coordinates: { lat: 10.6, lng: -73.5 },
    population: 2500,
    language: 'Wiwa',
    languageFamily: 'Chibcha',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Wiwa. Uno de los cuatro pueblos de la Sierra Nevada de Santa Marta.',
    otherNames: 'Arsario, Guaneguajira.',
    locationDetail:
      'Se localizan en los departamentos de Cesar, Magdalena y La Guajira, en la Sierra Nevada de Santa Marta.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 2.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha.',
    culture:
      'Los Wiwa son uno de los cuatro pueblos de la Sierra Nevada de Santa Marta.',
    economy:
      'La economía se basa en la agricultura y la cría de animales.',
    traditions: ['Bunde (danza ceremonial)', 'Ceremonia de la cosecha', 'Rituales de paso', 'Mamos'],
    crafts: ['Tejidos tradicionales', 'Cestería', 'Máscaras ceremoniales', 'Mochilas'],
    location: 'Sierra Nevada de Santa Marta (Cesar, Magdalena, La Guajira)'
  },
  {
    id: 'yagua',
    name: 'Yagua',
    region: 'amazonia-sur',
    departments: ['Amazonas'],
    coordinates: { lat: -2.0, lng: -73.0 },
    population: 7000,
    language: 'Yagua',
    languageFamily: 'Yagua',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Yagua. Conocidos por su técnica de pesca con arpón.',
    otherNames: 'Yagua.',
    locationDetail:
      'Se localizan en el departamento del Amazonas, especialmente en las riveras del río Amazonas y sus afluentes.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 7.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Yagua.',
    culture:
      'Los Yagua son conocidos por su técnica de pesca con arpón y sus danzas tradicionales.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Pesca con arpón', 'Danza del loro', 'Chamanismo', 'Rituales tradicionales'],
    crafts: ['Brazaletes', 'Canastos', 'Arpones', 'Plumas'],
    location: 'Amazonas'
  },
  {
    id: 'yanacona',
    name: 'Yanacona',
    region: 'andina-sur',
    departments: ['Cauca', 'Nariño', 'Putumayo'],
    coordinates: { lat: 2.2, lng: -76.8 },
    population: 25000,
    language: 'Yanacona',
    languageFamily: 'Quechua',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Yanacona. Descendientes del imperio Inca.',
    otherNames: 'Yanacona.',
    locationDetail:
      'Se localizan en los departamentos de Cauca, Nariño y Putumayo.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 25.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Quechua.',
    culture:
      'Los Yanacona son descendientes de los avanzados del imperio Inca en Colombia.',
    economy:
      'La economía se basa en la agricultura de clima frío.',
    traditions: ['Danza tradicional', 'Agricultura', 'Tejido', 'Rituales tradicionales'],
    crafts: ['Mochilas', 'Ruanas', 'Bordados', 'Sombreros'],
    location: 'Cauca, Nariño y Putumayo'
  },
  {
    id: 'yauna',
    name: 'Yauna',
    region: 'amazonia-sur',
    departments: ['Amazonas'],
    coordinates: { lat: -0.5, lng: -72.0 },
    population: 300,
    language: 'Yauna',
    languageFamily: 'Yagua',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Yauna. Pueblo amazónico en riesgo crítico.',
    otherNames: 'Yauna.',
    locationDetail:
      'Se localizan en el departamento del Amazonas.',
    populationSource:
      'Su población se estima aproximadamente en 300 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Yagua.',
    culture:
      'Comparten afinidad cultural con los pueblos Yagua.',
    economy:
      'La economía se basa en la caza, pesca y recolección.',
    traditions: ['Afinidad cultural con pueblos Yagua', 'Caza y pesca en selva y río', 'Rituales propios del territorio'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos', 'Trabajos en fibra'],
    location: 'Amazonas'
  },
  {
    id: 'yuko',
    name: 'Yuko',
    region: 'andina-norte-caribe',
    departments: ['Norte de Santander'],
    coordinates: { lat: 8.2, lng: -73.0 },
    population: 3000,
    language: 'Yuko',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Yuko. Pueblo Chibcha ubicado en Norte de Santander.',
    otherNames: 'Yuko.',
    locationDetail:
      'Se localizan en el departamento de Norte de Santander, en la región de la Serranía de los Motilones.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 3.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha.',
    culture:
      'Comparten tradiciones con otros grupos Chibcha de la región.',
    economy:
      'La economía se basa en la agricultura y la caza.',
    traditions: ['Danza tradicional', 'Agricultura', 'Rituales', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Tejidos', 'Trabajos en barro'],
    location: 'Norte de Santander'
  },
  {
    id: 'yukuna',
    name: 'Yukuna',
    region: 'amazonia-sur',
    departments: ['Amazonas'],
    coordinates: { lat: -0.5, lng: -71.8 },
    population: 2500,
    language: 'Yukuna',
    languageFamily: 'Arawak',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Yukuna. Pueblo Arawak amazónico.',
    otherNames: 'Yukuna.',
    locationDetail:
      'Se localizan en el departamento del Amazonas.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 2.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones con otros grupos de la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Agricultura', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra', 'Bebederos'],
    location: 'Amazonas'
  },
  {
    id: 'yuri',
    name: 'Yuri',
    region: 'amazonia-sur',
    departments: ['Amazonas'],
    coordinates: { lat: -1.5, lng: -72.5 },
    population: 200,
    language: 'Yuri',
    languageFamily: 'Yuri',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800',
    description: 'Yuri. Uno de los pueblos más pequeños y vulnerables.',
    otherNames: 'Yuri,passé.',
    locationDetail:
      'Se localizan en el departamento del Amazonas.',
    populationSource:
      'Su población se estima aproximadamente en 200 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Yuri.',
    culture:
      'Los Yuri son uno de los pueblos más pequeños y vulnerables de Colombia.',
    economy:
      'La economía se basa en la caza, pesca y recolección.',
    traditions: ['Organización en grupos familiares reducidos', 'Caza, pesca y recolección', 'Memoria oral y vínculo territorial'],
    crafts: ['Brazaletes', 'Canastos', 'Plumas'],
    location: 'Amazonas'
  },
  {
    id: 'yuruti',
    name: 'Yurutí',
    region: 'amazonia-norte',
    departments: ['Vaupés'],
    coordinates: { lat: 0.4, lng: -70.3 },
    population: 1500,
    language: 'Yurutí',
    languageFamily: 'Tucano Oriental',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Yurutí. Pueblo Tukano Oriental ubicado en el Vaupés.',
    otherNames: 'Yurutí.',
    locationDetail:
      'Se localizan en el departamento del Vaupés.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Tucano Oriental.',
    culture:
      'Comparten las características culturales del complejo Tukano Oriental del Vaupés.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Danza ceremonial', 'Ritual del Yuruparí'],
    crafts: ['Canastos', 'Brazaletes', 'Flautas', 'Bebederos'],
    location: 'Vaupés'
  },
  {
    id: 'zenu',
    name: 'Zenú',
    region: 'andina-norte-caribe',
    departments: ['Córdoba', 'Sucre', 'Bolívar'],
    coordinates: { lat: 8.5, lng: -75.5 },
    population: 250000,
    language: 'Zenú',
    languageFamily: 'Zenú',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Zenú. Herederos de una de las civilizaciones más desarrolladas de América.',
    otherNames: 'Zenú, Sinú.',
    locationDetail:
      'Se localizan en los departamentos de Córdoba, Sucre y Bolívar, en la región del San Jorge y el Sinú.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 250.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Zenú.',
    culture:
      'Los Zenú son herederos de una de las civilizaciones más desarrolladas de América. Los Senú están estrechamente relacionados con los Zenú.',
    economy:
      'La economía se basa en la agricultura, pesca y crafts tradicionales.',
    traditions: ['Ceremonia del agua', 'Danza del flechero', 'Ofrendas a la tierra', 'Rituales tradicionales'],
    crafts: ['Sombrero vueltiao', 'Mochilas', 'Cestería en totumo', 'Tejidos'],
    location: 'Córdoba, Sucre y Bolívar'
  },
  {
    id: 'yukpa',
    name: 'Yukpa',
    region: 'andina-norte-caribe',
    departments: ['Cesar', 'Norte de Santander'],
    coordinates: { lat: 8.5, lng: -73.0 },
    population: 8000,
    language: 'Yukpa',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Yukpa. Pueblo Chibcha ubicado en la Serranía del Perijá.',
    otherNames: 'Yukpa.',
    locationDetail:
      'Se localizan en los departamentos de Cesar y Norte de Santander, en la Serranía del Perijá.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 8.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha.',
    culture:
      'Los Yukpa comparten tradiciones con otros grupos Chibcha de la región.',
    economy:
      'La economía se basa en la agricultura y la caza.',
    traditions: ['Caza', 'Pesca', 'Agricultura', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Hamacas', 'Bordados', 'Tejidos'],
    location: 'Cesar y Norte de Santander'
  },
  {
    id: 'cocama',
    name: 'Cocama (Kukama)',
    region: 'amazonia-sur',
    departments: ['Amazonas', 'Putumayo'],
    coordinates: { lat: -0.5, lng: -73.5 },
    population: 2204,
    language: 'Kokama',
    languageFamily: 'Tupí Guaraní',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Cocama ("Nosotros Mismos"). Pueblo Tupí que habita la región amazónica.',
    otherNames: 'Kokama, Cocama, Ucayali, Xibitaoan, Huallaga, Pampadeque, Pandequebo, Omagua.',
    locationDetail:
      'Los Cocama viven cerca de Leticia en San José del Río e Isla de Ronda, en Puerto Nariño (Amazonas), en el resguardo del mismo nombre, y a lo largo del bajo río Putumayo en pequeños asentamientos. Comparten territorio con los Tikuna y Yagua.',
    populationSource:
      'Su población se estima en 2.204 individuos. La mayor concentración está en Leticia (1.413 indígenas) y Puerto Nariño (659 personas).',
    languageDetail:
      'Muy poco hablada en la actualidad, pertenece a la familia lingüística Tupí Guaraní. La lengua kokama-kokamilya se habla en la isla de Ronda frente a Leticia, y en las localidades de Naranjales, Palmeras y San José. Solo tiene unos pocos semi-hablantes.',
    culture:
      'Se encuentran frente a un proceso de transformación cultural adoptando elementos de la tradición occidental y judeo-cristiana. Dentro de su cosmovisión "Maisangara" es el espíritu original del cual descendieron. La práctica de la brujería es importante para resolución de conflictos. Tienen especialistas mágico-religiosos: el Chamán y el Curandero. Para la curación utilizan hojas de tabaco, hojas de palma, creolina, alcanfor y agua florida.',
    economy:
      'Se dedican a la pesca y agricultura. Cultivan maíz, yuca, fríjol, calabaza, piña y tabaco. Las vegas de los ríos se utilizan para el cultivo de arroz con fines comerciales. Complementan con crianza y venta de animales domésticos y comercialización de madera, yute y pescado.',
    traditions: ['Caza', 'Pesca', 'Agricultura', 'Brujería'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra'],
    location: 'Amazonas y Putumayo'
  },
  {
    id: 'tsachila',
    name: 'Tsáchila (Colorados)',
    region: 'andina-sur',
    departments: ['Nariño'],
    coordinates: { lat: 1.2, lng: -78.5 },
    population: 6000,
    language: 'Tsáchila',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Tsáchila. Conocidos por su práctica de teñir el cabello de rojo.',
    otherNames: 'Colorados.',
    locationDetail:
      'Se localizan en el departamento de Nariño, en la zona de Santo Domingo de los Colorados.',
    populationSource:
      'El Censo DANE 2005rió aproximadamente 6.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha.',
    culture:
      'Los Tsáchila son conocidos por su práctica de teñir el cabello de rojo con el achiote.',
    economy:
      'La economía se basa en la agricultura y el comercio.',
    traditions: ['Teñido del cabello', 'Danza ceremonial', 'Chamanismo', 'Rituales tradicionales'],
    crafts: ['Canastos', 'Brazaletes', 'Collares', 'Tejidos'],
    location: 'Nariño (Santo Domingo de los Colorados)'
  },
  {
    id: 'cocomacoya',
    name: 'Cocomacoya',
    region: 'amazonia-sur',
    departments: ['Putumayo'],
    coordinates: { lat: 0.2, lng: -75.0 },
    population: 500,
    language: 'Cocomacoya',
    languageFamily: 'Witoto',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Cocomacoya. Pueblo Witoto en riesgo crítico.',
    otherNames: 'Cocomacoya.',
    locationDetail:
      'Se localizan en el departamento del Putumayo.',
    populationSource:
      'Su población se estima aproximadamente en 500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Comparten tradiciones con otros grupos Witoto de la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales ceremoniales'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra'],
    location: 'Putumayo'
  },
  {
    id: 'cocono',
    name: 'Cocono',
    region: 'amazonia-sur',
    departments: ['Putumayo', 'Amazonas'],
    coordinates: { lat: 0.0, lng: -74.5 },
    population: 300,
    language: 'Cocono',
    languageFamily: 'Witoto',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Cocono. Pueblo Witoto en riesgo crítico.',
    otherNames: 'Cocono.',
    locationDetail:
      'Se localizan en el departamento del Putumayo y Amazonas.',
    populationSource:
      'Su población se estima aproximadamente en 300 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Comparten tradiciones con otros grupos Witoto de la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales ceremoniales'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra'],
    location: 'Putumayo y Amazonas'
  },
  {
    id: 'murui-muina',
    name: 'Murui Muina',
    region: 'amazonia-sur',
    departments: ['Putumayo'],
    coordinates: { lat: 0.3, lng: -74.8 },
    population: 1500,
    language: 'Murui',
    languageFamily: 'Witoto',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800',
    description: 'Murui Muina. Pueblo Witoto de la Amazonía.',
    otherNames: 'Murui.',
    locationDetail:
      'Se localizan en el departamento del Putumayo.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 1.500 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Witoto.',
    culture:
      'Comparten tradiciones con otros grupos Witoto de la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales ceremoniales'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra'],
    location: 'Putumayo'
  },
  {
    id: 'piodo',
    name: 'Piodo',
    region: 'amazonia-norte',
    departments: ['Guainía'],
    coordinates: { lat: 3.0, lng: -69.5 },
    population: 200,
    language: 'Piodo',
    languageFamily: 'Puinave',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Piodo. Pueblo en riesgo crítico en Guainía.',
    otherNames: 'Piodo.',
    locationDetail:
      'Se localizan en el departamento de Guainía.',
    populationSource:
      'Su población se estima aproximadamente en 200 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Puinave.',
    culture:
      'Comparten tradiciones con otros grupos de la región.',
    economy:
      'La economía se basa en la caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos'],
    location: 'Guainía'
  },
  {
    id: 'mundaruku',
    name: 'Mundaruku',
    region: 'amazonia-sur',
    departments: ['Amazonas'],
    coordinates: { lat: -1.0, lng: -72.0 },
    population: 500,
    language: 'Mundaruku',
    languageFamily: 'Arawak',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Mundaruku. Pueblo Arawak en riesgo crítico.',
    otherNames: 'Mundaruku.',
    locationDetail:
      'Se localizan en el departamento del Amazonas.',
    populationSource:
      'Su población se estima aproximadamente en 500 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Comparten tradiciones con otros grupos de la Amazonía.',
    economy:
      'La economía se basa en la horticultura, caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo', 'Rituales'],
    crafts: ['Canastos', 'Brazaletes', 'Trabajos en fibra'],
    location: 'Amazonas'
  },
  {
    id: 'tamasidaos',
    name: 'Tamasidaos',
    region: 'amazonia-norte',
    departments: ['Guainía'],
    coordinates: { lat: 3.2, lng: -69.8 },
    population: 150,
    language: 'Tamasidaos',
    languageFamily: 'Puinave',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Tamasidaos. Pueblo en riesgo crítico.',
    otherNames: 'Tamasidaos.',
    locationDetail:
      'Se localizan en el departamento de Guainía.',
    populationSource:
      'Su población se estima aproximadamente en 150 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Puinave.',
    culture:
      'Comparten tradiciones con otros grupos de la región.',
    economy:
      'La economía se basa en la caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos'],
    location: 'Guainía'
  },
  {
    id: 'tutza',
    name: 'Tutza',
    region: 'andina-sur',
    departments: ['Boyacá'],
    coordinates: { lat: 5.5, lng: -72.5 },
    population: 200,
    language: 'Tutza',
    languageFamily: 'Chibcha',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
    description: 'Tutza. Pueblo Chibcha en riesgo crítico.',
    otherNames: 'Tutza.',
    locationDetail:
      'Se localizan en el departamento de Boyacá.',
    populationSource:
      'Su población se estima aproximadamente en 200 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Chibcha.',
    culture:
      'Comparten tradiciones con otros grupos Chibcha de la región.',
    economy:
      'La economía se basa en la agricultura.',
    traditions: ['Agricultura', 'Rituales tradicionales'],
    crafts: ['Tejidos', 'Canastos', 'Trabajos en barro'],
    location: 'Boyacá'
  },
  {
    id: 'wapiyu',
    name: 'Wapiyu',
    region: 'amazonia-norte',
    departments: ['Guainía'],
    coordinates: { lat: 3.5, lng: -69.0 },
    population: 100,
    language: 'Wapiyu',
    languageFamily: 'Puinave',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    description: 'Wapiyu. Pueblo en riesgo crítico.',
    otherNames: 'Wapiyu.',
    locationDetail:
      'Se localizan en el departamento de Guainía.',
    populationSource:
      'Su población se estima aproximadamente en 100 individuos.',
    languageDetail:
      'Pertenece a la familia lingüística Puinave.',
    culture:
      'Comparten tradiciones con otros grupos de la región.',
    economy:
      'La economía se basa en la caza, pesca y recolección.',
    traditions: ['Caza', 'Pesca', 'Chamanismo'],
    crafts: ['Canastos', 'Brazaletes', 'Arcos'],
    location: 'Guainía'
  },
  {
    id: 'inganoe',
    name: 'Inganoe',
    region: 'andina-sur',
    departments: ['Putumayo', 'Cauca'],
    coordinates: { lat: 1.2, lng: -76.8 },
    population: 3000,
    language: 'Inga',
    languageFamily: 'Quechua',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Inganoe. Pueblo Quechua emparentado con los Inga.',
    otherNames: 'Inganoe.',
    locationDetail:
      'Se localizan en los departamentos de Putumayo y Cauca.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 3.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Quechua.',
    culture:
      'Comparten tradiciones con los pueblos Inga y Yanacona.',
    economy:
      'La economía se basa en la agricultura de clima frío.',
    traditions: ['Agricultura', 'Comercio', 'Rituales tradicionales'],
    crafts: ['Mochilas', 'Tejidos', 'Bordados'],
    location: 'Putumayo y Cauca'
  },
  {
    id: 'camsa',
    name: 'Camsá (Camsá)',
    region: 'andina-sur',
    departments: ['Nariño', 'Putumayo'],
    coordinates: { lat: 1.2, lng: -77.1 },
    population: 2000,
    language: 'Camsá',
    languageFamily: 'Camsá',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Camsá. Pueblo de la familia lingüística Camsá.',
    otherNames: 'Camsá, Sibundoy.',
    locationDetail:
      'Se localizan en los departamentos de Nariño y Putumayo, en el Valle de Sibundoy.',
    populationSource:
      'El Censo DANE 2005 reportó aproximadamente 2.000 personas autoreconocidas.',
    languageDetail:
      'Pertenece a la familia lingüística Camsá (aislada).',
    culture:
      'Comparten tradiciones con los pueblos Kamëntsá e Inga del Valle de Sibundoy.',
    economy:
      'La economía se basa en la agricultura y el comercio.',
    traditions: ['Agricultura', 'Comercio', 'Rituales tradicionales'],
    crafts: ['Tejidos', 'Canastos', 'Trabajos en barro'],
    location: 'Nariño y Putumayo'
  },
  {
    id: 'arzario',
    name: 'Arzario',
    region: 'andina-norte-caribe',
    departments: ['La Guajira', 'Cesar'],
    coordinates: { lat: 10.5, lng: -73.0 },
    population: 18202,
    language: 'Dumuna',
    languageFamily: 'Chibcha',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Arzario (Wiwa). Pueblo de la Sierra Nevada de Santa Marta.',
    otherNames: 'Sanjá, Wiwa.',
    locationDetail:
      'Se localizan en la Sierra Nevada de Santa Marta, en los departamentos de La Guajira y Cesar.',
    populationSource: 'Su población se estima en 18.202 individuos (DANE 2018).',
    languageDetail:
      'Hablan la lengua Dumuna, perteneciente a la familia lingüística Chibcha.',
    culture:
      'Comparten tradiciones ancestrales con los otros pueblos de la Sierra Nevada: Arhuaco, Kogui y Wiwa. Mantienen sus rituales y ceremonias tradicionales.',
    economy:
      'La agricultura y el comercio son sus principales actividades económicas.',
    traditions: ['Rituales ancestrales', 'Sistema de autoridades tradicionales', 'Ceremonias de la Sierra'],
    crafts: ['Tejidos', 'Canastos', 'Mochilas'],
    location: 'Sierra Nevada de Santa Marta'
  },
  {
    id: 'quillacinga',
    name: 'Quillacinga',
    region: 'andina-sur',
    departments: ['Nariño'],
    coordinates: { lat: 1.2, lng: -77.5 },
    population: 7333,
    language: 'Castellano',
    languageFamily: 'Indoeuropea',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Quillacinga. Pueblo que habita el departamento de Nariño.',
    otherNames: 'Quillacinga.',
    locationDetail:
      'Se localizan en el departamento de Nariño, en la región andina sur.',
    populationSource: 'Su población se estima en 7.333 individuos (DANE 2018).',
    languageDetail:
      'No conservan su lengua ancestral y utilizan el castellano como idioma principal.',
    culture:
      'Los Quillacinga mantienen tradiciones culturales propias de la región andina, aunque han perdido su lengua original.',
    economy:
      'La agricultura y la ganadería son sus principales actividades económicas.',
    traditions: ['Tradiciones agrícolas', 'Fiestas patronales', 'Artesanía'],
    crafts: ['Tejidos', 'Alfarería', 'Trabajos en madera'],
    location: 'Nariño'
  },
  {
    id: 'kizgo',
    name: 'Kizgó',
    region: 'andina-sur',
    departments: ['Cauca'],
    coordinates: { lat: 2.5, lng: -76.5 },
    population: 3974,
    language: 'Guambiano',
    languageFamily: 'Barbacoana',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
    description: 'Kizgó (Quizgó). Pueblo de la familia lingüística Guambiano.',
    otherNames: 'Quizgó.',
    locationDetail:
      'Se localizan en el departamento del Cauca, en la región andina sur.',
    populationSource: 'Su población se estima en 3.974 individuos (DANE 2018).',
    languageDetail:
      'Hablan la lengua Guambiano, perteneciente a la familia lingüística Barbacoana.',
    culture:
      'Comparten tradiciones culturales con los pueblos Guambiano y Coconuco de la región.',
    economy:
      'La agricultura y la ganadería son sus principales actividades económicas.',
    traditions: ['Agricultura tradicional', 'Medicina ancestral', 'Rituales comunitarios'],
    crafts: ['Tejidos', 'Cestería', 'Trabajos en lana'],
    location: 'Cauca'
  },
  {
    id: 'macahuan',
    name: 'Macahuan',
    region: 'llanos-orientales',
    departments: ['Arauca'],
    coordinates: { lat: 6.5, lng: -71.5 },
    population: 1764,
    language: 'Macahuan',
    languageFamily: 'Guahiba',
    status: 'En peligro',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Macahuan. Pueblo de la familia lingüística Guahiba.',
    otherNames: 'Macahuan.',
    locationDetail:
      'Se localizan en el departamento de Arauca, en los llanos orientales.',
    populationSource: 'Su población se estima en 1.764 individuos (DANE 2018).',
    languageDetail:
      'Pertenece a la familia lingüística Guahiba.',
    culture:
      'Comparten tradiciones culturales con otros pueblos de los llanos orientales.',
    economy:
      'La agricultura de subsistencia y la caza son sus principales actividades.',
    traditions: ['Agricultura tradicional', 'Caza', 'Pesca'],
    crafts: ['Canastos', 'Hamacas', 'Artesanía en fibra'],
    location: 'Arauca'
  },
  {
    id: 'wipiwi',
    name: 'Wipiwi',
    region: 'llanos-orientales',
    departments: ['Casanare'],
    coordinates: { lat: 5.5, lng: -71.0 },
    population: 299,
    language: 'Cuiba',
    languageFamily: 'Guahiba',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    description: 'Wipiwi. Pueblo de la familia lingüística Guahiba.',
    otherNames: 'Wipijiwi, Waüpijiwi.',
    locationDetail:
      'Se localizan en el departamento de Casanare, en los llanos orientales.',
    populationSource: 'Su población se estima en 299 individuos (DANE 2018).',
    languageDetail:
      'Pertenece a la familia lingüística Guahiba. Hablan también el castellano.',
    culture:
      'Mantienen tradiciones de los pueblos Guahiba de los llanos orientales.',
    economy:
      'La agricultura de subsistencia es su principal actividad.',
    traditions: ['Agricultura tradicional', 'Caza', 'Pesca'],
    crafts: ['Canastos', 'Hamacas'],
    location: 'Casanare'
  },
  {
    id: 'nutabe',
    name: 'Nutabe',
    region: 'andina-norte-caribe',
    departments: ['Antioquia'],
    coordinates: { lat: 5.8, lng: -75.5 },
    population: 178,
    language: 'Castellano',
    languageFamily: 'Indoeuropea',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Nutabe. Pueblo ancestral del departamento de Antioquia.',
    otherNames: 'Nutabe.',
    locationDetail:
      'Se localizan en el departamento de Antioquia.',
    populationSource: 'Su población se estima en 178 individuos (DANE 2018).',
    languageDetail:
      'No conservan su lengua ancestral y utilizan el castellano como idioma principal.',
    culture:
      'Los Nutabe mantienen tradiciones culturales propias de la región andina.',
    economy:
      'La agricultura es su principal actividad económica.',
    traditions: ['Tradiciones agrícolas', 'Artesanía'],
    crafts: ['Tejidos', 'Alfarería'],
    location: 'Antioquia'
  },
  {
    id: 'tanigua',
    name: 'Tanigua',
    region: 'amazonia-sur',
    departments: ['Caquetá'],
    coordinates: { lat: 1.5, lng: -75.0 },
    population: 145,
    language: 'Tinigua',
    languageFamily: 'Tinigua-pamigua',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Tanigua. Pueblo de la familia lingüística Tinigua.',
    otherNames: 'Tinigua.',
    locationDetail:
      'Se localizan en el departamento del Caquetá.',
    populationSource: 'Su población se estima en 145 individuos (DANE 2018).',
    languageDetail:
      'Pertenece a la familia lingüística Tinigua-pamigua.',
    culture:
      'Los Tanigua han mantenido sus tradiciones a pesar de su pequeño número.',
    economy:
      'La agricultura de subsistencia es su principal actividad.',
    traditions: ['Agricultura tradicional', 'Caza', 'Pesca'],
    crafts: ['Canastos', 'Artesanía'],
    location: 'Caquetá'
  },
  {
    id: 'yamalero',
    name: 'Yamalero',
    region: 'llanos-orientales',
    departments: ['Casanare'],
    coordinates: { lat: 5.3, lng: -71.5 },
    population: 142,
    language: 'Yamalero',
    languageFamily: 'Guahiba',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1583005463983-3c1a3b9f3e87?w=800',
    description: 'Yamalero. Pueblo de la familia lingüística Guahiba.',
    otherNames: 'Mariposos.',
    locationDetail:
      'Se localizan en el departamento de Casanare.',
    populationSource: 'Su población se estima en 142 individuos (DANE 2018).',
    languageDetail:
      'Pertenece a la familia lingüística Guahiba.',
    culture:
      'Mantienen tradiciones de los pueblos Guahiba de los llanos orientales.',
    economy:
      'La agricultura de subsistencia es su principal actividad.',
    traditions: ['Agricultura tradicional', 'Caza'],
    crafts: ['Canastos', 'Hamacas'],
    location: 'Casanare'
  },
  {
    id: 'mapayerri',
    name: 'Mapayerri',
    region: 'llanos-orientales',
    departments: ['Vichada'],
    coordinates: { lat: 5.0, lng: -68.5 },
    population: 104,
    language: 'Mapayerri',
    languageFamily: 'Aislada',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Mapayerri. Pueblo de lengua aislada.',
    otherNames: 'Mapayerri.',
    locationDetail:
      'Se localizan en el departamento de Vichada, en los llanos orientales.',
    populationSource: 'Su población se estima en 104 individuos (DANE 2018).',
    languageDetail:
      'Su lengua pertenece a una familia aislada.',
    culture:
      'Los Mapayerri mantienen sus tradiciones ancestrales en el territorio de los llanos.',
    economy:
      'La agricultura de subsistencia y la caza son sus principales actividades.',
    traditions: ['Agricultura tradicional', 'Caza', 'Pesca'],
    crafts: ['Canastos', 'Artesanía'],
    location: 'Vichada'
  },
  {
    id: 'calima',
    name: 'Calima',
    region: 'andina-sur',
    departments: ['Valle del Cauca'],
    coordinates: { lat: 3.5, lng: -76.5 },
    population: 50,
    language: 'Castellano',
    languageFamily: 'Indoeuropea',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
    description: 'Calima. Pueblo ancestral del Valle del Cauca.',
    otherNames: 'Calima.',
    locationDetail:
      'Se localizan en el departamento del Valle del Cauca.',
    populationSource: 'Su población se estima en aproximadamente 50 individuos (DANE 2018).',
    languageDetail:
      'No conservan su lengua ancestral y utilizan el castellano como idioma principal.',
    culture:
      'Los Calima mantienen tradiciones culturales de la región andina.',
    economy:
      'La agricultura es su principal actividad económica.',
    traditions: ['Tradiciones agrícolas', 'Artesanía'],
    crafts: ['Tejidos', 'Alfarería'],
    location: 'Valle del Cauca'
  },
  {
    id: 'baniva',
    name: 'Baniva',
    region: 'amazonia-norte',
    departments: ['Guainía'],
    coordinates: { lat: 3.0, lng: -67.5 },
    population: 187,
    language: 'Karu',
    languageFamily: 'Arawak',
    status: 'En peligro crítico',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
    description: 'Baniva. Pueblo de la familia lingüística Arawak.',
    otherNames: 'Baniwa.',
    locationDetail:
      'Se localizan en el departamento del Guainía, en la región amazónica norte.',
    populationSource: 'Su población se estima en 187 individuos (DANE 2018).',
    languageDetail:
      'Pertenece a la familia lingüística Arawak.',
    culture:
      'Los Baniva mantienen tradiciones culturales de los pueblos Arawak de la región amazónica.',
    economy:
      'La agricultura de subsistencia y la pesca son sus principales actividades.',
    traditions: ['Agricultura tradicional', 'Pesca', 'Caza'],
    crafts: ['Canastos', 'Artesanía'],
    location: 'Guainía'
  },
];

export const getEthnicityByRegion = (regionId) => {
  return ethnicities.filter(e => e.region === regionId);
};

export const getEthnicityByDepartment = (departmentName) => {
  return ethnicities.filter(e => e.departments.includes(departmentName));
};

export const getRegionById = (regionId) => {
  return regions.find(r => r.id === regionId);
};

export const getDepartmentById = (departmentId) => {
  return departments.find(d => d.id === departmentId);
};

export const getEthnicityById = (ethnicityId) => {
  return ethnicities.find(e => e.id === ethnicityId);
};

export const getEthnicitiesCount = () => ethnicities.length;

export const getTotalPopulation = () => {
  return ethnicities.reduce((acc, e) => acc + e.population, 0);
};

export const getStatusCounts = () => {
  const counts = {
    'Vulnerable': 0,
    'En peligro': 0,
    'En peligro crítico': 0
  };
  ethnicities.forEach(e => {
    if (counts[e.status] !== undefined) counts[e.status]++;
  });
  return counts;
};
