# Pueblos Indígenas de Colombia — Información completa (app)

Referencias institucionales: [ONIC — Organización Nacional Indígena de Colombia](https://www.onic.org.co/pueblos).

**Fuente única:** `src/data/ethnicities.js`. Mapa, modales, tarjetas y este `PUEBLOS.md` leen los mismos campos (incl. coordenadas del punto en el mapa, departamentos, población, tradiciones y artesanías). Colombia reconoce alrededor de **115** pueblos (referencia DANE/ONIC); aquí hay **94** modelados en código. Para **añadir un pueblo**, crea un objeto en el arreglo `ethnicities` y ejecuta `node scripts/gen-pueblos-md.mjs` (y, si quieres, `node scripts/gen-readme-pueblos.mjs`). Los datos son **orientativos**; para censos oficiales consulta **DANE**, **MinInterior** y **ONIC**.

---

## Índice de pueblos (94)

1. [Achagua](#achagua)
2. [Ambaló](#amobalo)
3. [Amorúa](#amorua)
4. [Andakies](#andakies)
5. [Andoque](#andoque)
6. [Arhuaco (Ika)](#arhuaco)
7. [Awá](#awa)
8. [Bará](#bara)
9. [Barasana](#barasana)
10. [Barí](#bari)
11. [Betoye](#betoye)
12. [Bora](#bora)
13. [Cañamomo](#canamomo)
14. [Carapana](#carapana)
15. [Chimila](#chimila)
16. [Chiricoa](#chiricoa)
17. [Cocama (Kukama)](#cocama)
18. [Coconuco](#coconuco)
19. [Coreguaje](#coreguaje)
20. [Coyaima-Natagaima](#coyaima)
21. [Cubeo](#cubeo)
22. [Desano](#desano)
23. [Dujo](#dujo)
24. [Embera](#embera)
25. [Embera Chamí](#embera-chami)
26. [Embera Katío](#embera-katio)
27. [Eperara-Siapidara](#eperara)
28. [Guambiano](#guambiano)
29. [Guanaca](#guanaca)
30. [Guane](#guane)
31. [Guayabero](#guayabero)
32. [Hitnu](#hitnu)
33. [Hupdu (Hup)](#hupdu)
34. [Inga](#inga)
35. [Juhup (Yuhup)](#juhup)
36. [Kakua](#kakua)
37. [Kamëntsá](#kamentsa)
38. [Kankuamo](#kankuamo)
39. [Karijona](#karijona)
40. [Kawiyarí](#kawiyari)
41. [Kofán](#cofan)
42. [Kogui (Kágaba)](#kogui)
43. [Kuiba (Wámac)](#kuiba)
44. [Kurripaco](#kurripaco)
45. [Letuama](#letuama)
46. [Makaguaje](#makaguaje)
47. [Makuna](#makuna)
48. [Masiguare](#masiguare)
49. [Matapí](#matapi)
50. [Miraña](#mirana)
51. [Mokaná](#mokana)
52. [Muinane](#muinane)
53. [Muisca](#muisca)
54. [Nasa (Páez)](#nasa)
55. [Nonuya](#nonuya)
56. [Nukak](#nukak)
57. [Ocaina](#ocaina)
58. [Pastos](#pasto)
59. [Piapoco](#piapoco)
60. [Piaroa](#piaroa)
61. [Piratapuyo](#piratapuyo)
62. [Pisamira](#pisamira)
63. [Puinave](#puinave)
64. [Sáliba](#saliba)
65. [Senú](#senu)
66. [Sikuani (Cuiva)](#sikuani)
67. [Siona](#siona)
68. [Siriano](#siriano)
69. [Taiwano](#taiwano)
70. [Tanimuka](#tanimuka)
71. [Tariano](#tariano)
72. [Tatuyo](#tatuyo)
73. [Ticuna (Tikuna)](#ticuna)
74. [Totoró](#totoro)
75. [Tsáchila (Colorados)](#tsachila)
76. [Tsiripu](#tshiripu)
77. [Tukano](#tukano)
78. [Tule (Guna)](#tule)
79. [Tuyuka](#tuyuka)
80. [U'wa](#uwa)
81. [Uitoto (Huitoto)](#uitoto)
82. [Wanano](#wanano)
83. [Waunan](#waunan)
84. [Wayuu](#wayuu)
85. [Wiwa](#wiwa)
86. [Yagua](#yagua)
87. [Yanacona](#yanacona)
88. [Yauna](#yauna)
89. [Yuko](#yuko)
90. [Yukpa](#yukpa)
91. [Yukuna](#yukuna)
92. [Yuri](#yuri)
93. [Yurutí](#yuruti)
94. [Zenú](#zenu)

---

## Información detallada por pueblo

## Achagua

**ID (aplicación):** `achagua`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Meta, Casanare

**Ubicación (resumen):** Puerto López (Meta); familias en La Hermosa (Casanare)

**Coordenadas aproximadas (punto en el mapa de la app):** 4.2, -72.8

**Población (dato usado en la app):** 796 personas

**Lengua:** Achagua

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo indígena de la familia lingüística Arawak en los llanos orientales; habitan los resguardos de Umapo y El Turpial y mantienen vínculos lingüísticos con los piapoco.

**Otros nombres:** Achagua, ajagua, xagua, «gente del río».

**Ubicación (detalle):** Resguardos de Umapo y El Turpial, en el municipio de Puerto López (Meta) y algunas familias en La Hermosa (Casanare).

**Población (fuente):** Su población se estima en 796 individuos (DANE 2005).

**Lengua (detalle):** Achagua. Pertenece a la familia lingüística Arawak. El uso de su idioma tiene prioridad sobre el español; por su continua relación con los piapoco hablan también esta lengua. La lengua fue clasificada por el programa de protección a la diversidad etnolingüística del Ministerio de Cultura entre las 19 lenguas que están en serio peligro de extinción.

**Cultura:**

A partir del siglo XVIII han sido fuertemente afectados por la actividad misionera evangélica y por la expansión de la colonización. A pesar del proceso de reelaboración cultural y apropiación de nuevos elementos, conservan sus rituales en donde se utiliza plantas psicotrópicas, esenciales para sus ceremonias.

En los grupos Achagua prevalece un tipo de organización familiar fundada en la autoridad del suegro. La unidad de producción y consumo y la unidad residencial están constituidas generalmente por una pareja adulta, los hijos e hijas jóvenes y las hijas casadas, con sus respectivas familias. Con el crecimiento del grupo, los yernos tienden a construir viviendas separadas.

**Economía:** Su actividad principal es la agricultura. Cultivan especialmente la yuca amarga (áliri), de la que extraen el almidón para fabricar casabe (beri, tortilla) y fariña (harina tostada). También producen maíz (kana). Durante el verano, la pesca y en menor escala la caza tienen importancia. La artesanía es otra actividad destacada.

**Tradiciones:**
- Rituales con plantas psicotrópicas
- Ceremonias de curación
- Sistema de parentesco

**Artesanías y oficios:**
- Canastos
- Hamacas
- Artesanía en fibra

---

## Ambaló

**ID (aplicación):** `amobalo`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Resguardo Ambaló, Cauca (cerros Crestegallo, Puzna, Gallinazo)

**Coordenadas aproximadas (punto en el mapa de la app):** 2.8, -76.5

**Población (dato usado en la app):** 2.749 personas

**Lengua:** Namtrik

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Resguardo en el Cauca, en alturas sobre 3.800 m; pueblo namtrik (familia paez) con convivencia paeces, ambalueños y guambianos; economía de ganadería y agricultura.

**Ubicación (detalle):** La comunidad indígena de Ambaló se encuentra ubicada en cercanías de los cerros Crestegallo, Puzna y Gallinazo, cuyas alturas sobrepasan los 3.800 m de altitud.

**Población (fuente):** Tomando los datos censales existentes del territorio ancestral del pueblo ambalueño —estudio socioeconómico realizado en el año 2007—, el resguardo de Ambaló está constituido por 825 familias, o 2.749 personas: 1.372 hombres (49,70 %) y 1.377 mujeres (50,30 %), entre paeces, ambalueños y guambianos, asentados en nueve veredas. En el territorio ambalueño convive con personas originarias de Guambía, de Totoró y provenientes de otras zonas del país que se radican en las llamadas «zonas campesinas».

**Lengua (detalle):** Namtrik.

Se deduce que, de toda la población (2.749 personas), 401 hablan el idioma castellano y el nativo; el resto (2.348 personas) habla únicamente el castellano. Indudablemente esto preocupa al cabildo; de allí que el Comité de Educación haya confeccionado el Proyecto Educativo Comunitario orientado hacia el fortalecimiento del Plan de Vida y de la organización para la recuperación del territorio, la lengua y la cultura.

Es claro que la población hablante del namtrik se encuentra dispersa en varias zonas colindantes, de allí que un acercamiento a la situación social de esta lengua requiera abordajes diferenciados.

**Cultura:**

Cuentan los mayores que el pueblo de Ambaló se origina a partir de la unión del Trueno y la laguna Brava, espíritus mayores que, al unirse, fecundan y dan origen a un cacique, quien baja por el río Agoyan acompañado de la avalancha. Este niño fue recogido y criado hasta convertirse en hombre.

Así nace el pueblo de Ambaló. La autoridad tradicional del pueblo Ambaló, a lo largo de la existencia y su presencia histórica, ha reafirmado su pensamiento, identidad y cultura; a la vez ha construido caminos, mandatos y políticas de resistencia, autonomía y control territorial, fundamentales para conmemorar de manera conjunta los 33 años de reconstitución de la autoridad, quien fuera desaparecida por los terratenientes durante más de cuatro décadas, tiempo en el cual hemos venido reafirmando nuestra existencia desde el territorio y la armonía viva depositada en nuestros mayores y mayoras.

**Economía:** La actividad económica de sus gentes se basa principalmente en la ganadería y la agricultura.

**Tradiciones:**
- Sistema de autoridad tradicional
- Recuperación de lengua y cultura
- Plan de Vida comunitario

**Artesanías y oficios:**
- Tejidos
- Cestería
- Trabajos en lana

---

## Amorúa

**ID (aplicación):** `amorua`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Casanare, Vichada

**Ubicación (resumen):** Paz de Ariporo (Casanare); resguardo Caño Mochuelo; Guáripa-La Hormiga (Vichada)

**Coordenadas aproximadas (punto en el mapa de la app):** 5.5, -70.5

**Población (dato usado en la app):** 178 personas

**Lengua:** Guahíbo

**Familia lingüística:** Guahíbo

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Grupo de la familia lingüística guahíba en Paz de Ariporo (Casanare) y en contacto con guahibo-sikuani en Vichada; economía de horticultura y chagras de yuca.

**Otros nombres:** Wipiwe, Siripu, Mariposa.

**Ubicación (detalle):** Están ubicados en el municipio de Paz de Ariporo, Casanare, en la localidad de El Merey-La Guagilla. Existe también un asentamiento de población conocida localmente como Amorúa en la localidad de La Esmeralda sobre el caño Aguaclara, afluente del río Casanare. Hay otro, de unas quince casas, en un punto vecino al hato El Porvenir, aproximadamente a tres horas de navegación por el río Meta, quienes se dedican a trabajar como jornaleros en las haciendas y fondos y siembran algodón por contrato. Otros asentamientos están en los fundos La Arenosa, Lituania, Tierra Macha y en la reserva los Mochuelos. Los Amorúa conviven con Guahibo-Sikuani en la reserva actual de Guáripa-La Hormiga, en Vichada. Aparentemente allí hay más del doble de población Amorúa de la que existe en El Porvenir.

**Población (fuente):** La población estimada es de 178 personas, repartidas en un perímetro de 94.670 hectáreas, que hacen parte del resguardo Caño Mochuelo.

**Lengua (detalle):** El grupo conocido como Amorúa o Hamorúa pertenece a la familia lingüística Guahíbo. Guahibo Sikuani.

**Cultura:**

Su sistema de representación tiene en la figura del chamán al principal personaje de la vida ritual y espiritual de la etnia. Desde esa perspectiva, el yopo es la principal planta psicotrópica, fundamental en la realización de cualquier ceremonia o ritual, aunque también es utilizada en actividades de tipo social. El consumo de yopo, durante las ceremonias, va acompañado del consumo de tabaco y de otras plantas alucinógenas.

– El «rezo del pescado», ceremonia de iniciación y de bautizo, que tiene una gran difusión entre los grupos de la región. Su sentido general es preparar a la joven para la vida adulta.

El Itomo, que hace parte del ciclo de ceremonias del segundo enterramiento. Es uno de los principales rituales, incluso, por encima del ritual de la primera ceremonia, donde el entierro es sencillo y solo interviene el chamán. El ritual permite perpetuar la presencia del difunto y se convierte en una actividad social importante.

Organización sociopolítica

En los grupos Amorúa prevalece un tipo de organización familiar fundada en la autoridad del suegro. La unidad de producción y consumo y la unidad residencial están constituidas generalmente por una pareja adulta, los hijos e hijas jóvenes y las hijas casadas, con sus respectivas familias. Con el crecimiento del grupo, los yernos tienden a construir viviendas separadas.

Poseen un sistema de parentesco dravídico, donde clasifican a los miembros de la comunidad, y en general de la etnia, en dos categorías fundamentales: la de consanguíneos directos como los progenitores, hermanos e hijos, lo mismo que los tíos, hermanos del mismo sexo que los progenitores, hermano del padre y hermana de la madre y cuyas denominaciones se pueden traducir como «padrecito» y «madrecita», respectivamente; los primos paralelos, hijos de los hermanos del padre y las hermanas de la madre, se asimilan a los hermanos, y los sobrinos y sobrinas hijos de hermanos, se asocian a los hijos propios.

En la categoría de aliados se considera a los hermanos de la madre y hermanas del padre, quienes son a la vez suegros y suegras, pues son los progenitores de los primos cruzados o esposos y esposas virtuales. En la generación inferior, los hijos de la hermana para un ego masculino, y los hijos del hermano para un ego femenino se consideran como yernos y nueras que ya efectivamente son quienes se casan con los hijos de ego.

**Economía:** La yuca como cultivo principal, caracteriza la horticultura de los grupos Amorúa. Las variedades de yuca amarga se siembran intercaladas hasta una docena por chagra, para lograr una mayor y más larga producción en el terreno. En áreas de bajos y en zonas húmedas se siembran los plátanos. La piña, fríjol, batata y ñame se cultivan en pequeñas extensiones al lado de los yucales, mientras que cerca de las casas se siembran frutales como guama, mango, papaya, cítricos, condimentos y plantas medicinales. Para la elaboración de la bebida alcohólica, Yalaki, elaborada a partir de la yuca amarga, se siembra una yuquera adicional.

La preparación de nuevos terrenos (actividad que se realiza en diciembre), y algunas veces la siembra, se lleva a cabo mediante el convite o unuma, convocado por el jefe del asentamiento. La siembra tiene lugar en los días anteriores a las primeras lluvias.

Después de unos ocho meses de sembrados los yucales, la producción es continua, y como cada familia posee varios conucos en distintas fases de desarrollo, las necesidades familiares se satisfacen ampliamente.

**Tradiciones:**
- Ritual del "rezo del pescado"
- Ceremonia Itomo
- Uso del Yopo

**Artesanías y oficios:**
- Cestería
- Elaboración de hamacas
- Trabajos en fibra

---

## Andakies

**ID (aplicación):** `andakies`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Cauca

**Coordenadas aproximadas (punto en el mapa de la app):** 2.6, -76.6

**Población (dato usado en la app):** 500 personas

**Lengua:** Paez

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo indígena de la familia lingüística Paez en el departamento del Cauca.

**Tradiciones:**
- Danza tradicional
- Medicina ancestral
- Agricultura de subsistencia

**Artesanías y oficios:**
- Tejidos
- Cestería
- Artesanía en bambú

---

## Andoque

**ID (aplicación):** `andoque`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Caquetá, Amazonas

**Ubicación (resumen):** Araracuara, medio Caquetá; Ampi-Yacu (Perú)

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -72.5

**Población (dato usado en la app):** 597 personas

**Lengua:** Andoque

**Familia lingüística:** Andoque

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** «La gente del hacha» en la región de Araracuara y el medio Caquetá; historia marcada por la cauchería y un proceso de reconstrucción étnica en torno a la maloka y el ritual Yuruparí.

**Otros nombres:** Andoque «la gente del hacha» — andoque, cha'oie, businka.

**Ubicación (detalle):** Se localizan en la región del Araracuara, caño Aduche, muy cerca de la ribera del medio río Caquetá, al sur de la Amazonía colombiana. Existen algunos asentamientos en la región peruana del río Ampi-Yacu.

**Población (fuente):** La población fue rápidamente diezmada por efectos de la explotación cauchera que se dio en décadas pasadas. De los casi 10 mil habitantes que existían, ahora solo se tienen registros de 597 personas.

**Lengua (detalle):** El andoque es una lengua indígena americana hablada por unos pocos centenares de indígenas Andoque en el curso del río Caquetá en Colombia, y actualmente en declive en cuanto a número de hablantes.

En 2000 se censó que había 610 hablantes en el área del río Anduche, aguas abajo de Araracuara (Amazonas, Colombia); 50 de ellos eran monolingües en dicha lengua. Anteriormente la lengua también se había hablado extendido por Perú. El 80% de los hablantes hablan fluidamente español.

**Cultura:**

Ocupaban tradicionalmente un amplio territorio que se extendía desde la quebrada Monochoa, arriba del caño del Araracuara hasta la quebrada Quinche, ambas afluentes del río Caquetá. Se dividían en linajes relativamente autónomos que comprendían más de 10.000 personas; cada linaje vivía en una maloka, epicentro de la vida social, espacial y ceremonial del grupo.

Evidencias etnohistóricas hablan de extensas redes de intercambio entre los grupos de la región que habitaban distintos medios ambientes. Los andoque proveían hachas de piedra, excavadas en su territorio en el marco de rituales complejos que situaban esta actividad en un lugar importante dentro de su cosmovisión e identidad étnica. La escasez de la piedra en el área así como el acceso a estas herramientas otorgaba al grupo una posición privilegiada para el intercambio.

Si bien las expediciones de conquista y colonia del territorio en el siglo XVII a cargo de españoles, portugueses y franciscanos produjeron grandes cambios en el territorio amazónico, el ciclo de «la cauchería» a principios del siglo XX se constituyó en el hito más significativo en su historia, generando profundas transformaciones y adaptaciones en su vida cultural. Como resultado de esta actividad no solo desapareció la mayor parte de la población, sino que también se introdujeron masivamente instrumentos de metal y mercancías, se adoptaron nuevos sistemas económicos y se promovieron modelos diferentes de autoridad.

Tras el etnocidio, los traslados forzosos de la población al río Ampi-Yacu y la desarticulación de la sociedad, los pocos sobrevivientes iniciaron un complejo proceso de reconstrucción étnica que actualmente continúa vigente. Bajo este marco, una vez finalizada la época de la casa Arana y el conflicto colombo-peruano, los miembros de cada linaje construyeron nuevas malokas, formaron unidades exógamas y patrilocales con su propio nombre y, como estrategia demográfica, integraron personas de otros grupos étnicos. Su actividad económica continuó siendo la extracción del caucho, incorporando la figura del patrón dentro de su organización sociopolítica y cosmológica.

Históricamente los andoque y otros grupos de la región se han visto afectados por los distintos procesos de colonización, expansión de la frontera agrícola y extracción de recursos naturales, entre ellos el cacao, la quina y el caucho. Asimismo, la inserción reciente de la región al sistema de economía de mercado ha configurado las dinámicas culturales de la etnia y de su territorio.

Para la mayoría de pueblos que habitan la región del Amazonas, el uso de plantas sagradas se constituye en un elemento fundamental dentro de su vida cultural y social. El Yuruparí es el ritual más trascendental porque rememora los orígenes y revive los elementos esenciales de su cosmovisión.

**Economía:** Los andoque basan su sistema de producción en actividades como la agricultura, la pesca, la caza y recolección, así como la explotación maderera en menor escala. Los cultivos principales son la yuca brava, la yuca dulce, el plátano y la piña. En años recientes la colonización ha contribuido a que los andoque introduzcan cultivos semipermanentes como el banano, la caña y el maíz.

En su resguardo existen actualmente tres malokas donde viven las personas de más alto rango. Alrededor de ellas se agrupan las viviendas de las familias extensas pertenecientes a los respectivos clanes patrilineales. Gavilán, Venado, Sol, Hormiga Arriera y Cucarrón son los clanes consolidados hoy en día. Dentro de su cosmovisión, la maloka continúa siendo el espacio de confluencia de las estructuras sociales, económicas, culturales y rituales de la comunidad. En lo social la autoridad recae sobre el «maloquero», quien tiene a su cargo la dirección de la vida ritual.

**Tradiciones:**
- Ritual Yuruparí
- Maloka como centro ceremonial
- Sistema de clanes

**Artesanías y oficios:**
- Canastos
- Cucharas talladas
- Trabajos en madera

---

## Arhuaco (Ika)

**ID (aplicación):** `arhuaco`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar, Magdalena, La Guajira

**Ubicación (resumen):** Sierra Nevada de Santa Marta

**Coordenadas aproximadas (punto en el mapa de la app):** 10.5, -73.2

**Población (dato usado en la app):** 12.000 personas

**Lengua:** Ika

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Guardianes de la Sierra Nevada de Santa Marta.

**Tradiciones:**
- La Kolla (bebida sagrada)
- Ceremonias en los picos nevados
- Sistema de gobierno propio

**Artesanías y oficios:**
- Mochilas ceremoniales
- Sombreros de caña
- Collares de semillas

---

## Awá

**ID (aplicación):** `awa`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Nariño, Putumayo

**Ubicación (resumen):** Suroccidente: Nariño y Putumayo (presencia también en Ecuador)

**Coordenadas aproximadas (punto en el mapa de la app):** 1.2, -77.5

**Población (dato usado en la app):** 25.813 personas

**Lengua:** Awapít

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo binacional en el suroccidente colombiano (Nariño y Putumayo); lengua awapít, familia chibcha; asentamientos dispersos a lo largo de ríos entre terrazas de cultivo y áreas de caza.

**Otros nombres:** Awá «la gente de la montaña», «la gente de la selva» — Awá, cuaiquer, kwaiker.

**Ubicación (detalle):** Los Awá tienen una presencia binacional; se encuentran en Colombia y Ecuador. En Colombia se ubican en el suroccidente en los municipios de Cumbal, Santa Cruz de Guachavez, Mallama, Ricaurte, Barbacoas, Roberto Payán, Tumaco e Ipiales, en el departamento de Nariño, y en los municipios de Mocoa, Puerto Asís, Valle del Guamuez, San Miguel, La Dorada, Orito, Puerto Caicedo, Villa Garzón en el departamento del Putumayo.

**Población (fuente):** Con una extensión aproximada de 3000 kilómetros cuadrados, la etnia se caracteriza por asentamientos dispersos que siguen la corriente de los ríos. Su población está estimada en 25.813 personas (DANE, 2005, Censo Nacional de Población).

Las condiciones climáticas hacen que las mayores concentraciones de población se ubiquen en la parte altitudinal de los 500 a 1.500 metros sobre el nivel del mar, pues los indígenas buscan las terrazas bajas para cultivar y construir sus viviendas, mientras la parte alta del macizo es área reservada para la caza.

**Lengua (detalle):** De la lengua Awapít, que pertenece a la familia lingüística Chibcha. Forma parte del dialecto Malla de los Sindaguas; emparentada con el Chá palaa (idioma de la Nacionalidad Chachi) y con el Tsa'fíqui (idioma de la Nacionalidad Tsa'chila).

**Cultura:**

Historia y origen

El origen de la etnia es incierto y confuso, pues los estudios arqueológicos demuestran que el litoral, tanto colombiano como ecuatoriano, estaba habitado por la cultura Tumaco. A la llegada de los españoles en 1525, las crónicas dan cuenta de grupos indígenas seminómadas con un grado de desarrollo muy bajo en relación a las otras etnias halladas en la región andina.

Durante la colonia, los grupos de la región, denominados genéricamente como «Barbacoas», fueron agrupados en «pueblos de indios», de acuerdo al modelo hispánico de poblamiento. La presión colonizadora de la región aumentó significativamente al convertirse esta zona en uno de los principales yacimientos auríferos y centros portuarios —en el caso de Barbacoas—, situación que obligó a los indígenas a desplazarse fuera de su territorio tradicional.

Su localización en uno de los ejes de comunicación entre el litoral y la meseta andina ha influido significativamente en la conformación de su territorio, el cual se ha visto afectado por los auges mineros, las guerras civiles, los procesos de colonización ganadera, maderera y de cultivos ilícitos, además de las grandes obras de infraestructura como la carretera hacia el mar. A partir de los años sesenta, cuando se intensificó la llegada de colonos, mineros y extractores de aceites de palma, muchos indígenas tuvieron que reiniciar los procesos migratorios.

La mayor concentración indígena se encuentra en el municipio de Ricaurte, debido en parte a las condiciones climáticas que permiten una mayor actividad agrícola. Estos mismos factores han favorecido la colonización de estas tierras y otras áreas en detrimento de los asentamientos indígenas, principalmente en las zonas cercanas a la carretera y centros de mercadeo, como es el caso de Talambí, Numbí, Puente Piedra, Pialapí, San Pablo, Cuayquer Viejo, Vegas y El Diviso.

Sobre la cultura Awá

La dinámica cultural en el pueblo Awá es primordialmente promovida por los mayores (hombres y mujeres) en su condición de custodios del conocimiento tradicional heredado y a su vez los puentes para la conexión espiritual de la comunidad. Su papel lo cumplen en forma de sabios, médicos tradicionales y guías espirituales.

Los Awá tienen una gran influencia de los pueblos campesinos que habitan la región, la que afecta especialmente a las nuevas generaciones. Aspectos tradicionales, como el vestido, han ido desapareciendo con el correr de los tiempos. En la mayoría de asentamientos se conservan prácticas como la cestería, cuya elaboración sigue siendo a mano. En las regiones más pobres y apartadas todavía se fabrican utensilios en barro y madera, pero es muy común que ya no usen objetos de índole ancestral, pues han sido reemplazados por objetos occidentales como encendedores, vasijas plásticas, termos, molinos, etc. Dentro de su cosmovisión el mundo está poblado de seres sobrenaturales. La magia cumple un papel importante al igual que la práctica de los rituales católicos.

**Economía:** Aunque la caza fue su actividad de subsistencia tradicional, las condiciones desfavorables de su entorno los han obligado a desarrollar otras actividades económicas como la agricultura, la pesca y la crianza de animales domésticos. Su sistema agrícola se centra en la técnica de «tala y pudre». El principal producto es el maíz, el cual se combina con la siembra de yuca, fríjol, caña de azúcar y plátano. En las tierras no aptas para la agricultura, se recogen productos comestibles, plantas medicinales y madera para la construcción. La extracción de oro de aluvión ocupa un renglón complementario dentro de su economía.

Vivienda

La vivienda de los Awá sigue la línea de construcción que caracteriza a la región del Pacífico, es decir, viviendas aéreas. Su estructura consta de una alcoba, una cocina y un corredor muy amplio. Son viviendas hechas en hoja de palma de chonta y gualte, las cuales se machacan para formar una estera. El piso es hecho en madera y el techo tiene una amplia pendiente para evacuar el agua cuando llueve. En el espacio que queda debajo de la casa se recogen los animales domésticos.

Su patrón de residencia se caracteriza por la dispersión de sus asentamientos a lo largo de los ríos. Viven en casas separadas entre sí, por varias horas de camino. Los asentamientos tienen un núcleo de casas perteneciente a las personas con lazos directos de consanguinidad, quienes a su vez ejercen funciones de dirección del asentamiento.

**Tradiciones:**
- Cestería tradicional
- Mayordomía
- Sistema de conocimiento ancestral

**Artesanías y oficios:**
- Canastas
- Trabajos en palma
- Artefactos de madera

---

## Bará

**ID (aplicación):** `bara`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés: ríos Colorado, Papuyurí, Yapú, Inambú, Macucú y Tiquié

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -70.5

**Población (dato usado en la app):** 208 personas

**Lengua:** Bará

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** «Gente de paz» en el nordeste del Vaupés; lengua bará (waimaja y variantes), familia tucano oriental; cosmovisión centrada en la maloka y ceremonias como el Dabucurí.

**Otros nombres:** «Gente de paz» — waimaja, posanga-mira. Barasana del Norte.

**Ubicación (detalle):** El pueblo indígena Bará se ubica en la parte nordeste del Amazonas, exactamente en el departamento de Vaupés, ríos Colorado, Papuyurí, Yapú, Inambú, Macucú y Tiquié.

**Población (fuente):** Su población se estima en 208 personas (DANE 2005). Están divididos en los siguientes clanes: Waimasa, Wamutañara, Pamoa, Bara, Wañaco y Bupua-Bara.

**Lengua (detalle):** Bará (waimaja, waimasa, waymasa, waimaha, barasano del norte). Pertenece a la familia lingüística Tucano Oriental.

**Cultura:**

En los últimos años no se han realizado estudios suficientes sobre la trayectoria de este grupo o sobre su situación actual. Sin embargo han sido clasificados en la etnografía como parte del llamado complejo cultural del Vaupés, característica que los asemeja a otros grupos cercanos, pertenecientes a la familia lingüística Tucano Oriental como los tatuyo, desano y wanano.

Dentro de su cosmovisión, cada especie de animales posee su maloka y su dueño. Después de la muerte, el alma se va para la maloka de los antepasados. La maloka es de uso exclusivo para la gente; por esta razón quienes no se consideran totalmente humanos, como es el caso de los recién nacidos o picados por las culebras, no pueden entrar hasta tanto el Chamán, figura de gran importancia en la comunidad, no les otorgue esta condición. De acuerdo a la etnografía, una de las ceremonias más destacadas era la del «Dabucurí» o ceremonia de intercambio, donde los visitantes traían carne y pescado y los anfitriones ofrecían cerveza de yuca.

Organización

La estructura sociopolítica del pueblo Bará responde a un complejo sistema de organización jerárquico, repartido en linajes patrilineales. Sin embargo, dicha estructura se viene modificando paulatinamente, debido a la presión de los colonos en la zona, que los han obligado a adoptar formas de organización totalmente opuestas a las tradicionales. Por ejemplo, en la antigüedad el poder recaía sobre el chamán o curaca, quien no solo regía los destinos espirituales de la etnia, sino que también tomaba todo tipo de decisiones de trascendencia. Su forma de organización política está sustentada en el cabildo, cuyos miembros son elegidos por un período de un año.

**Economía:** La economía de este grupo se basa en la horticultura de tala y quema, caza, pesca y recolección. Su principal cultivo es la yuca brava seguido del plátano, banano, ñame, batata, caña de azúcar, colorantes y plantas medicinales. También crían gallinas para el comercio y algunas aves silvestres de las que utilizan sus plumas para decoraciones en los rituales. Para la pesca utilizan el anzuelo, arcos, flechas y trampas. Cultivar las plantas alucinógenas es siempre oficio masculino, mientras la cestería y todo lo relacionado con la madera, y la alfarería es exclusividad de las mujeres.

Vivienda

Para mediados de los ochenta, este grupo vivía aún en malokas y en aldeas nucleares de 12 a 60 personas. Es posible que en la actualidad, al igual que otros pueblos de la región, hayan adoptado el modelo del poblado donde las viviendas se agrupan alrededor de una maloka, una escuela y una cancha de fútbol.

**Tradiciones:**
- Ceremonia Dabucurí
- Sistema de linajes
- Maloka ceremonial

**Artesanías y oficios:**
- Cestería
- Alfarería
- Trabajos en madera

---

## Barasana

**ID (aplicación):** `barasana`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés, Amazonas

**Ubicación (resumen):** Resguardo Parte Oriental del Vaupés; caño Colorado; río Pirá-Paraná (Mitú, Leticia)

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -70.8

**Población (dato usado en la app):** 350 personas

**Lengua:** Barasana-taiwano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Barasano del sur (Janera, Panera) en el Pirá-Paraná y resguardo Parte Oriental del Vaupés; lengua barasana-taiwano, familia tucano oriental; economía de chagra, yajé y alianza con los makuna.

**Otros nombres:** Barasano del sur, eduria, yebá-masã, yepa-mahsã, yepá-matsó, hanerã (o janena), paneroa, komea, teiuana (o taiwano), banera yae, hanera oka.

**Ubicación (detalle):** Amazonía: Colombia y Brasil. Su territorio está comprendido en el resguardo Parte Oriental del Vaupés; viven en el caño Colorado y el río Pirá-Paraná. Este pueblo también es conocido como barasana del sur, Janera o Panera.

**Población (fuente):** Su población se estima en 350 individuos. Se encuentran dispersos en varios departamentos del país. La mayor concentración la encontramos en el municipio de Mitú (Vaupés), con un total de 162 indígenas, seguido del municipio de Leticia (Amazonas), con 40 personas. La distribución por género corresponde a 177 hombres y 173 mujeres. Es uno de los pueblos que se distingue por su baja densidad de población. Hay población barasana en otras regiones del país (Valle, Guaviare, Meta), aunque en cantidad muy reducida en comparación con los principales asentamientos.

**Lengua (detalle):** Barasana-taiwano.

Su lengua pertenece a la familia Tucano Oriental, característica que los agrupa en el llamado complejo de la región del resguardo Parte Oriental del Vaupés (caño Colorado, río Pirá-Paraná). Es una de las 15 lenguas de la familia tucano oriental; entre ellas se encuentran bara, barasana-taiwano, carapana, desano, kubeo, makuna, tatuyo, tukano, tuyuka, wanano, yurutí y pisamira.

**Cultura:**

El vestido tradicional, la música y los instrumentos como la marimba, los bombos, las flautas y cununos, la medicina tradicional, las técnicas de producción en la agricultura, la pesca, la caza y la cría de especies animales, hacen parte de su identidad.

Cuentan los ancianos que, en el principio de la humanidad, la culebra anaconda subió por el río y fue dejando los distintos grupos que hoy viven en la selva del Vaupés. Desde entonces, los Barasana del Pirá-Paraná han vivido en la selva, descubriendo poco a poco sus secretos, sin destruir la vida de las especies vegetales y animales. Por la selva surcan muchos ríos. Son gente de canoas, arpones, trampas y anzuelos. Entre los árboles de la selva aprenden a escoger aquel que transformarán en canoa.

El mito entre los barasana relaciona su vida cotidiana con el mundo de los héroes y de los seres de la naturaleza, ordenando el mundo de manera inteligible. La simbología es altamente sexualizada. En las fiestas se baila, se recitan mitos y se toman alucinógenos. Las flautas secretas «Yuruparí» se destacan por su importancia dentro de las festividades y ceremonias.

Vivienda

Los barasana viven en asentamientos multiétnicos. Sin embargo, como es el caso de Piedra Ñi, éstos muchas veces se reubican en función de las tensiones interétnicas y las ofertas del territorio. Tradicionalmente, la maloka rectangular era el centro de la organización social, económica y ceremonial. En los últimos años se ha adoptado el patrón de viviendas nucleadas alrededor de una maloka.

Organización

Tradicionalmente la autoridad principal es el jefe de la maloka; sin embargo, existen otros personajes que cumplen funciones religiosas como el Payé, el kumu, el especialista en cantos y danzas y el maestro de recitación de mitos. Se consideran aliados de los makuna.

**Economía:** Combinan la agricultura itinerante con la caza, pesca, recolección y artesanía. El terreno para sembrar se abre tumbando los hombres un pequeño sector de selva al comienzo del verano y quemando antes de empezar las lluvias. El cultivo principal es la yuca amarga kî, sembrada por las mujeres, quienes también plantan batata, chonque, ñame, calabazas, caña de azúcar, plátanos, piña, marañón y otros frutales. Los hombres siembran maíz, chontaduro, aguacate, wamü, tabaco, coca y yajé.

Las mujeres son alfareras y fabrican diferentes clases de ollas de arcilla y la sartén grande o «budare» para hacer el casabe de yuca. Los hombres se encargan de la cestería y la carpintería.

Cazan con cerbatana, arco y flecha, jabalina o escopeta. Entre las presas están la danta, el pecarí, monos, armadillo, chacures y diferentes aves. Recolectan frutos silvestres, hormigas meca jia, saltamontes, larvas de abeja y «mojojoy» (wadoa) y coleópteros comestibles. Generalmente pescan con anzuelo y tienen canoas fabricadas por ellos mismos.

El kûmû (chamán) sabe usar el yajé, la coca y el tabaco para relacionarse con el mundo espiritual y propiciar el éxito de la economía, la alimentación y la salud.

Se presenta la división de trabajo por sexo y edad. El trabajo de los hombres consiste en preparar el terreno, la pesca, la caza y la fabricación de artesanías, mientras que las mujeres se encargan de mantener la chagra limpia, de cosechar y de preparar los alimentos. La horticultura es la base de su economía con el sistema tradicional de tala y quema.

El cultivo central es la yuca amarga y sus derivados constituyen la fuente de la alimentación diaria. En menor escala cultivan maíz, calabaza, plátano, caña de azúcar; actividades que complementan con la caza, la pesca y la recolección de gusanos, hormigas y frutos silvestres. Recientemente han incursionado en la pesca comercial.

**Tradiciones:**
- Flautas secretas Yuruparí
- Mitos de la anaconda
- Cacería sostenible

**Artesanías y oficios:**
- Canastos para casabe
- Cestería
- Trabajos en arcilla

---

## Barí

**ID (aplicación):** `bari`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Norte de Santander

**Ubicación (resumen):** Serranía de los Motilones; hoya del Catatumbo (El Carmen, Convención, Teorema)

**Coordenadas aproximadas (punto en el mapa de la app):** 8.5, -72.8

**Población (dato usado en la app):** 5.923 personas

**Lengua:** Barí Ara

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Motilone barí en la Serranía de los Motilones y la hoya del Catatumbo; lengua Barí Ara; historia marcada por petróleo, misiones y resistencia; bohíos cíclicos y transición a caseríos.

**Otros nombres:** Motilone barí, motilón, Barís, barira, dobocubi, cunausaya.

**Ubicación (detalle):** Viven en la frontera con Venezuela en la Serranía de los Motilones, departamento de Norte de Santander; se ubican sobre la hoya del río Catatumbo, región boscosa húmeda tropical compuesta por tierras bajas que descienden desde el nudo de Santurbán, en la cordillera oriental. Las distintas corrientes de agua que corren en dirección sur-norte y atraviesan el departamento de Norte de Santander confluyen en la macroregión del lago de Maracaibo.

El principal accidente geográfico que cobija a los Barí es la Serranía de los Motilones, comprendida entre el cerro de Mina (sur), las fuentes del río Catatumbo y la sierra del Perijá (norte), en jurisdicción de los municipios de El Carmen, Convención y Teorema. Es una región con temperatura promedio de 24 °C y precipitación estimada en 2.500 mm, donde los inviernos se presentan en abril-mayo y octubre-noviembre y los veranos en diciembre, enero y febrero.

**Población (fuente):** Este pueblo indígena tiene una población de 5.923 personas, de los cuales 4.897 se encuentran en las cabeceras municipales. Los municipios con mayor concentración de esta población son Cúcuta y Tibú.

**Lengua (detalle):** Esta lengua se denomina Barí Ara; el dios Sabaseba fue quien organizó el mundo y sus vidas y el más temido de los espíritus es Dabiddu, dueño de la noche, espíritu que causa el mal y que, con su fatalidad, trae al Barí la enfermedad y la muerte. La lengua Barí Ara designa a los ríos con palabras que significan seres vivos porque se mueven. Por estas razones existe un dolor enorme en el pueblo Barí, porque con ocasión de la explotación del petróleo nos están haciendo daño y el espíritu lo siente.

**Cultura:**

Historia

Desde tiempos prehispánicos la zona se caracterizó por el permanente contacto intercultural entre los grupos de las regiones circundantes. Para el momento de la conquista, ocupaban un extenso territorio desde los Andes venezolanos hasta la Serranía del Perijá. El grupo mantuvo su resistencia a la «pacificación» durante casi cinco siglos, desarrollando mecanismos de adaptación, como su patrón de residencia múltiple que permitió el relativo aislamiento de las poblaciones. Sin embargo, las misiones capuchinas lograron establecerse en su territorio desde épocas tempranas, permitiendo el contacto con la sociedad mayoritaria.

A partir de la primera década del siglo XX se hicieron concesiones para explotaciones petroleras en el territorio Barí, incentivando la apertura de carreteras y la colonización masiva de la región; ante lo cual, la reacción de los indígenas fue violenta, provocando el inicio de un largo proceso bélico contra las petroleras que se prolongó hasta los años sesenta. La acción misionera se intensificó en la zona y continúa hasta el presente, desarrollando una política de «integración y desarrollo» de las comunidades barí y yuko.

Cultura

Creen en un ser supremo, lo invocan en las enfermedades, cuando van a la pesca, en la cacería y en las cosechas. Pero esta religión no tiene «autoridades» constituidas que puedan transmitir ya que se deforman de generación en generación. El ser supremo o «Saymaydódjira» es el Dios desde el principio anterior a la existencia del motilón y por consiguiente el Creador. Cuando se considera que un niño ya ha adquirido las habilidades necesarias para subsistir de forma autónoma, el padre reúne en un lugar aislado a unos pocos allegados suyos, y allí, en aquella reunión, confieren el estatus de adulto al muchacho mediante la entrega del guayuco.

**Economía:** Practican la horticultura de tala y quema, la pesca y la cacería. Su cultivo tradicional es la yuca dulce, aunque se han adoptado otras especies como el plátano, el maíz, la caña y el cacao. Es frecuente la cría de cerdos y aves de corral para su venta en el mercado. Complementan estas actividades con el jornaleo. Algunos grupos intercalan prácticas comerciales y tradicionales de subsistencia.

Vivienda

Su patrón de residencia tradicional se caracteriza por la posesión de tres bohíos dispuestos en forma cíclica, habitados periódicamente por cada grupo local. El bohío o casa comunal —rectangular u ovalada— es el centro de la cultura y de la actividad Barí, rodeado por un conuco principal y otros secundarios.

Actualmente se presenta una tendencia —impulsada por los misioneros— hacia la adopción de un patrón fijo de residencia mediante la construcción de caseríos, en parte como estrategia de defensa del territorio. Sin embargo, en algunos lugares aún se mantienen los bohíos estacionales, a pesar de la introducción de la ganadería y de los cultivos comerciales. Dos de sus asentamientos principales reciben el nombre de Hitayosara e Ikiakarora.

Organización sociopolítica

Socialmente se organizan en comunidades locales cuyas relaciones de parentesco están definidas en función del grupo de residencia. Estas comunidades se dividen en hermanos consanguíneos y hermanos políticos. La unidad mínima de trabajo es el «hogar», constituida por un grupo de hombres «hermanos» y sus esposas afines. Su sistema político es igualitario y se basa en el reconocimiento de diversos roles transferidos de generación en generación.

**Tradiciones:**
- Ceremonias de paso
- Cultivo de yuca dulce
- Bohíos cíclicos

**Artesanías y oficios:**
- Tejidos
- Cestería
- Trabajos en palma

---

## Betoye

**ID (aplicación):** `betoye`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Arauca

**Ubicación (resumen):** Río Cravo; Tame, inspecciones Betoyes y Corocito (Arauca)

**Coordenadas aproximadas (punto en el mapa de la app):** 6.5, -71.2

**Población (dato usado en la app):** 394 personas

**Lengua:** Español betoye

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Comunidades a orillas del río Cravo y en Tame (Arauca); lengua originaria no conservada; español con sustrato betoye; fiesta de la chicha majule y autoridad del capitán.

**Otros nombres:** Jirarre, Betoi, Jirara, Guahibos, Betoyes.

**Ubicación (detalle):** Viven a orillas del río Cravo y en el municipio de Tame, departamento de Arauca, en un conjunto de comunidades en las inspecciones de Betoyes y Corocito. Las principales comunidades son: Roqueros, Parreros, Iguanitos, Macarieros, Puyeros, Cocuisas, Genareros, Velazqueros, Julieros, Cajaros, Bayoneros, El Refugio, Zamuro y Matacandela.

**Población (fuente):** El censo DANE 2005 reportó 394 personas autoreconocidas como pertenecientes al pueblo Betoye, de las cuales el 48,0% son hombres (189 personas) y el 52,0% mujeres (205 personas). El pueblo Betoye se concentra en el departamento de Arauca, donde habita el 83,50% de la población. Le sigue Valle del Cauca con el 2,3% (9 personas) y Bogotá con el 1,5% (6 personas). Estos dos departamentos y la capital concentran el 87,3% poblacional de este pueblo. Los Betoye representan el 0,03% de la población indígena de Colombia. La población Betoye que habita en zonas urbanas corresponde al 12,2% (48 personas), cifra inferior al promedio nacional de población indígena urbana, que es del 21,4% (298.499 personas).

**Lengua (detalle):** Su lengua proviene de la familia lingüística Chibcha. Aunque no conservan su lenguaje original, hablan un español particular considerado como español betoye, en el que permanecen ciertas estructuras gramaticales del sustrato betoye.

**Cultura:**

Historia

A pesar de que en la actualidad no hay estudios recientes sobre este grupo, en la etnografía se describen entre sus ritos y creencias la fiesta de la chicha «majule» preparada con plátano. En esta fiesta, que podía durar varios días, se invitaba a los parientes que vivían en las otras comunidades y la chicha se repartía primero a los ancianos, después a las mujeres y luego al resto de las personas.

Cultura

Entre sus celebraciones culturales propias se encuentra la fiesta de la chicha preparada con plátano o «majule», una de las principales festividades de este pueblo. A ella invitan a otras comunidades y celebran durante varios días. Las fiestas, así como la actividad de la casa, poseen un gran valor para el pueblo, por lo que son dirigidas por los capitanes. En sus festividades toman vinete; además reconocen el matrimonio exógeno y neolocal. Cada comunidad se compone de dos o más familias extensas dirigidas por un capitán. Tradicionalmente esta autoridad era un hombre mayor, reconocido como sabio; sin embargo, desde los años ochenta el cargo de capitán ha sido ocupado por líderes jóvenes.

**Economía:** Son hortícolas por tradición; utilizan para sus cultivos el sistema de roza y quema. También practicaban la caza, la pesca y la recolección. Los cultivos básicos son el maíz, plátano y yuca, para su propio consumo, y el cacao, café y arroz, introducidos con fines comerciales. Debido a la reducción de la caza mayor, producto del deterioro de los bosques, las presas son en su mayoría ratones, araguatos (monos), ardillas y picuares. La pesca se practica exclusivamente en verano, cuando los ríos y caños son menos caudalosos y profundos.

Organización sociopolítica

Dentro de su organización social tradicional el matrimonio es exógeno y la residencia neolocal. Cada comunidad está compuesta por dos o más familias extensas. La autoridad la tiene el capitán, generalmente el hombre más anciano del grupo. Sin embargo, para mediados de los ochenta se observaban cambios en este modelo con el surgimiento de líderes jóvenes que representaban su grupo frente a la sociedad mayoritaria y organizaban la caza y las fiestas.

Existía la división de trabajo según sexo: las mujeres desempeñaban labores como la limpieza de los cultivos, recolección de cosechas y trabajos domésticos, mientras que el oficio de los hombres se relacionaba con la construcción de la casa, tumba, quema del bosque y el comercio con los blancos.

**Tradiciones:**
- Fiesta de la chicha "majule"
- Sistema de capitanes
- Caza y pesca

**Artesanías y oficios:**
- Canastas
- Hamacas
- Trabajos en fibra

---

## Bora

**ID (aplicación):** `bora`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas, Putumayo

**Ubicación (resumen):** La Chorrera, Putumayo e Igará-Paraná (Amazonas); Ampiyacú (Perú)

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -74

**Población (dato usado en la app):** 933 personas

**Lengua:** Bora

**Familia lingüística:** Bora

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo de la familia lingüística Bora en La Chorrera y el Putumayo amazónico; cosmovisión de los hijos del tabaco, la coca y la yuca dulce; malokas octogonales, clanes y proceso de recuperación cultural tras la cauchería.

**Otros nombres:** Meamuyna.

**Ubicación (detalle):** El pueblo Bora está localizado en La Chorrera, en el departamento del Amazonas. También se encuentra en riberas del río Putumayo, en el bajo Igará-Paraná, y en el río Ampiyacú en el Perú. Según su cosmovisión son gente de centro, pertenecientes a la cultura de los hijos del tabaco, la coca y la yuca dulce. Muchas de sus tradiciones las comparte con los pueblos indígenas uitoto, muinane y ocaina.

**Población (fuente):** Su población se estima en 933 individuos. Se encuentran dispersos en varios departamentos del país. La mayor concentración la encontramos en el municipio de La Chorrera (Amazonas), con un total de 285 indígenas, seguido del municipio de Puerto Arica (Amazonas), con 206 personas. La distribución por género corresponde a 486 hombres y 447 mujeres. Este pueblo habita principalmente el departamento del Amazonas, aunque también se encuentra localizado en Valle, Antioquia, Tolima, entre otros, aunque con una clara disminución poblacional respecto del Amazonas.

**Lengua (detalle):** Pertenece a la familia lingüística Bora.

**Cultura:**

Historia

El pueblo indígena Bora que habita en el territorio de Tarapacá, según los abuelos (ASOAINTAM, 2008), fue el resultado de la huída de algunos miembros de este pueblo de la esclavización de la explotación cauchera de la Casa Arana (1915 y 1931), que migraron hacia Brasil para luego retornar a Colombia, apoyados por el cañonero Pichincha, que los dejó en el territorio del actual corregimiento de Tarapacá, donde se posesionaron como pueblo Bora, nombraron a José Antonio Silva como capitán y construyeron su primera maloca. En estos territorios ya habitaban los uitoto y practicaban todas sus tradiciones. Luego llegaron otros uitoto que se posicionaron como pueblo Nonuya y desarrollaron ampliamente su cultura hasta que sus abuelos murieron (ASOAINTAM, 2008). Los Bora están dispersos por causa del impacto negativo de las caucheras de principios del siglo XX y están en un intenso proceso de recuperación de sus cosmovisiones y prácticas ancestrales.

Cultura

Este grupo habitaba en malokas de forma octogonal dispersas en el territorio. Estas casas comunales funcionaban como vivienda de varias familias nucleares unidas por lazos de parentesco y, a la vez, como espacios rituales que representaban su microcosmos. Actualmente los asentamientos, en algunos casos multiétnicos, agrupan segmentos de clanes distribuidos en su mayoría en poblaciones nucleadas. La maloka cumple la función de sitio ceremonial y en ella reside tan solo el capitán con su familia. Alrededor se construyen viviendas individuales.

Los Bora practican tradicionalmente el ritual del nacimiento, en el cual se prescriben prohibiciones alimenticias. El padre simula el rol de la mujer y permanece en reposo varios días después del parto; esto se conoce como covada. Como resultado de las condiciones históricas de la región que han determinado múltiples adaptaciones culturales, existen pocos chamanes en la actualidad. Una de sus principales funciones es dirigir la construcción de tambores masculinos y femeninos llamados «maguare». Los tambores son accionados por un especialista que sigue una carrera ritual para hacerlo.

**Economía:** La producción se basa en la horticultura y el cultivo principal lo constituye la yuca amarga, seguido de los cacahuetes, banano, plátano y algunas frutas como el chontaduro y milpelo. El maní se cultiva con fines rituales, razón por la cual su siembra se acompaña de rezos y dietas especiales.

Vivienda

Este grupo habitaba en malokas de forma octogonal dispersas en el territorio. Estas casas comunales funcionaban como vivienda de varias familias nucleares unidas por lazos de parentesco y, a la vez, como espacios rituales que representaban su microcosmos. Actualmente los asentamientos, en algunos casos multiétnicos, agrupan segmentos de clanes distribuidos en su mayoría en poblaciones nucleadas. La maloka cumple la función de sitio ceremonial y en ella reside tan solo el capitán con su familia. Alrededor se construyen viviendas individuales.

Organización sociopolítica

El grupo está dividido en clanes patrilineales y exógamos. De acuerdo con esto, los Bora prohíben el matrimonio entre hermanos y buscan preferiblemente aliarse con mujeres miraña. Su descendencia clásica es patrilineal y su residencia patrilocal. Los clanes Bora que han predominado desde el siglo XIX han sido los Zogui-Zogui, Guacamayo Rojo y Canangucho.

Políticamente el capitán es la figura en la que recae la autoridad desde las primeras décadas del siglo XX. A partir de la Constitución de 1991 se ha adoptado el cabildo, conformado por una familia extensa y por uno o varios capitanes de acuerdo con la comunidad.

**Tradiciones:**
- Agricultura itinerante
- Pesca tradicional
- Rituales chamánicos

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Artesanía en semillas

---

## Cañamomo

**ID (aplicación):** `canamomo`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Risaralda

**Ubicación (resumen):** Risaralda

**Coordenadas aproximadas (punto en el mapa de la app):** 5.3, -75.8

**Población (dato usado en la app):** 8.500 personas

**Lengua:** Embera

**Familia lingüística:** Embera

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Comunidad Embera ubicada en Risaralda.

**Tradiciones:**
- Danza tradicional
- Chamanismo
- Agricultura de tala y quema

**Artesanías y oficios:**
- Canastos
- Mochilas
- Brazaletes

---

## Carapana

**ID (aplicación):** `carapana`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -70.3

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Carapana

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Tukano Oriental ubicado en el Vaupés.

**Tradiciones:**
- Ceremonia Yuruparí
- Danza tradicional
- Pesca con barbasco

**Artesanías y oficios:**
- Bebederos
- Flautas
- Brazaletes

---

## Chimila

**ID (aplicación):** `chimila`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar, Magdalena, Bolívar

**Ubicación (resumen):** Cesar y Magdalena

**Coordenadas aproximadas (punto en el mapa de la app):** 9.5, -74

**Población (dato usado en la app):** 3.000 personas

**Lengua:** Chimila

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Chibcha que habita en la región del Magdalena y Cesar.

**Tradiciones:**
- Danza del careticio
- Caza tradicional
- Medicina ancestral

**Artesanías y oficios:**
- Canastas
- Hamacas
- Arcos ceremoniales

---

## Chiricoa

**ID (aplicación):** `chiricoa`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Meta, Vichada

**Ubicación (resumen):** Meta y Vichada

**Coordenadas aproximadas (punto en el mapa de la app):** 4.5, -71

**Población (dato usado en la app):** 500 personas

**Lengua:** Guahibo

**Familia lingüística:** Guahibo

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo de la familia Guahibo ubicado en los llanos orientales.

**Tradiciones:**
- Caza tradicional
- Pesca
- Agricultura itinerante

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Trabajos en palma

---

## Cocama (Kukama)

**ID (aplicación):** `cocama`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas, Putumayo

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -73.5

**Población (dato usado en la app):** 3.000 personas

**Lengua:** Cocama

**Familia lingüística:** Tupian

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Tupí que habita la región amazónica.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Trabajos en fibra

---

## Coconuco

**ID (aplicación):** `coconuco`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Cauca

**Coordenadas aproximadas (punto en el mapa de la app):** 2.6, -76.5

**Población (dato usado en la app):** 12.000 personas

**Lengua:** Coconuco

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Herederos de la cultura Paez en las tierras frías del Cauca.

**Tradiciones:**
- Baños termales ceremoniales
- Tejido de ruanas
- Danza del oso

**Artesanías y oficios:**
- Ruanas de lana
- Mochilas
- Chales bordados

---

## Coreguaje

**ID (aplicación):** `coreguaje`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Caquetá, Putumayo

**Ubicación (resumen):** Caquetá y Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -75.5

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Coreguaje

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Tukano Oriental en las cuencas del Caquetá y Putumayo.

**Tradiciones:**
- Caza sostenible
- Pesca con barbasco
- Danza del caimán

**Artesanías y oficios:**
- Bebederos
- Cucharas talladas
- Brazaletes

---

## Coyaima-Natagaima

**ID (aplicación):** `coyaima`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Tolima

**Ubicación (resumen):** Tolima

**Coordenadas aproximadas (punto en el mapa de la app):** 3.8, -75

**Población (dato usado en la app):** 25.000 personas

**Lengua:** Coyaima-Natagaima

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo de la familia Arawak ubicados en Tolima.

**Tradiciones:**
- Pesca tradicional
- Agricultura
- Medicina ancestral

**Artesanías y oficios:**
- Canastas
- Hamacas
- Trabajos en barro

---

## Cubeo

**ID (aplicación):** `cubeo`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1.2, -70.5

**Población (dato usado en la app):** 3.000 personas

**Lengua:** Cubeo

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Tukano Oriental conocido por sus máscaras ceremoniales.

**Tradiciones:**
- Mascarada ritual
- Danza tradicional
- Ceremonia de iniciación

**Artesanías y oficios:**
- Máscaras talladas
- Bebederos
- Canastos

---

## Desano

**ID (aplicación):** `desano`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -70.2

**Población (dato usado en la app):** 5.000 personas

**Lengua:** Desano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Tukano Oriental con cosmogonía basada en los astros.

**Tradiciones:**
- Cosmología astral
- Danza tradicional
- Ceremonias del Yuruparí

**Artesanías y oficios:**
- Bebederos
- Canastos
- Brazaletes

---

## Dujo

**ID (aplicación):** `dujo`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -70.8

**Población (dato usado en la app):** 300 personas

**Lengua:** Tucano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Tukano Oriental pequeño ubicado en el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Rituales chamánicos

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Embera

**ID (aplicación):** `embera`

**Región natural (macro en la app):** Pacífico

**Departamentos:** Chocó, Córdoba, Antioquia, Risaralda

**Ubicación (resumen):** Chocó

**Coordenadas aproximadas (punto en el mapa de la app):** 5.5, -76.5

**Población (dato usado en la app):** 45.000 personas

**Lengua:** Embera

**Familia lingüística:** Embera

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo que habita las selvas del Chocó biogeográfico.

**Tradiciones:**
- Danza del agua
- Piru (baño ceremonial)
- Caza con cerbatana

**Artesanías y oficios:**
- Canastos finamente tejidos
- Bebederos
- Máscaras talladas

---

## Embera Chamí

**ID (aplicación):** `embera-chami`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Risaralda, Chocó, Caldas

**Ubicación (resumen):** Risaralda y Chocó

**Coordenadas aproximadas (punto en el mapa de la app):** 5.2, -76

**Población (dato usado en la app):** 12.000 personas

**Lengua:** Embera

**Familia lingüística:** Embera

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan las selvas de Risaralda y Chocó.

**Tradiciones:**
- Medicina tradicional
- Danza ceremonial
- Cestería medicinal

**Artesanías y oficios:**
- Canastos medicinales
- Brazaletes
- Bebederos

---

## Embera Katío

**ID (aplicación):** `embera-katio`

**Región natural (macro en la app):** Pacífico

**Departamentos:** Córdoba, Chocó, Antioquia

**Ubicación (resumen):** Córdoba y Chocó

**Coordenadas aproximadas (punto en el mapa de la app):** 7, -76

**Población (dato usado en la app):** 30.000 personas

**Lengua:** Embera

**Familia lingüística:** Embera

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan las cuencas de los ríos Sinú y alto Magdalena.

**Tradiciones:**
- Toma de chirrapa
- Danza del duende
- Ritual de la luna nueva

**Artesanías y oficios:**
- Voladores de madera
- Bebederos tallados
- Brazaletes de chaquira

---

## Eperara-Siapidara

**ID (aplicación):** `eperara`

**Región natural (macro en la app):** Pacífico

**Departamentos:** Cauca, Nariño, Valle del Cauca

**Ubicación (resumen):** Cauca y Nariño

**Coordenadas aproximadas (punto en el mapa de la app):** 3, -77.5

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Eperara

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo del Pacífico sur conocido por sus tejidos.

**Tradiciones:**
- Tejido tradicional
- Danza
- Agricultura de tala y quema

**Artesanías y oficios:**
- Tejidos
- Canastos
- Brazaletes

---

## Guambiano

**ID (aplicación):** `guambiano`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Cauca

**Coordenadas aproximadas (punto en el mapa de la app):** 2.5, -76.7

**Población (dato usado en la app):** 25.000 personas

**Lengua:** Guambiano

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan el resguardo de Pitayó en el Cauca.

**Tradiciones:**
- La Guambia (reunión comunitaria)
- Danza del indio
- Cultivo de papa nativa

**Artesanías y oficios:**
- Mochilas guambianas
- Bordados coloridos
- Sombreros de paja

---

## Guanaca

**ID (aplicación):** `guanaca`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Cauca

**Coordenadas aproximadas (punto en el mapa de la app):** 2.6, -76.6

**Población (dato usado en la app):** 3.000 personas

**Lengua:** Paez

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Nasa emparentado con los Paeces.

**Tradiciones:**
- Danza tradicional
- Agricultura
- Tejido

**Artesanías y oficios:**
- Mochilas
- Ruanas
- Bordados

---

## Guane

**ID (aplicación):** `guane`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Santander, Boyacá

**Ubicación (resumen):** Santander y Boyacá

**Coordenadas aproximadas (punto en el mapa de la app):** 6, -73.5

**Población (dato usado en la app):** 500 personas

**Lengua:** Guane

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Chibcha heredero de la cultura Guane.

**Tradiciones:**
- Tradiciones Chibchas
- Agricultura
- Rituales

**Artesanías y oficios:**
- Cestería
- Tejidos
- Trabajos en barro

---

## Guayabero

**ID (aplicación):** `guayabero`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Meta, Casanare

**Ubicación (resumen):** Meta

**Coordenadas aproximadas (punto en el mapa de la app):** 3.5, -73

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Guayabero

**Familia lingüística:** Guayabero

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo indígena ubicado en los llanos del Meta.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Artesanía en palma

---

## Hitnu

**ID (aplicación):** `hitnu`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Arauca, Meta

**Ubicación (resumen):** Arauca y Meta

**Coordenadas aproximadas (punto en el mapa de la app):** 6, -71

**Población (dato usado en la app):** 2.000 personas

**Lengua:** Hitnu

**Familia lingüística:** Guayabero

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** También llamados Macú. Habitan la región del Arauca y Meta.

**Tradiciones:**
- Caza tradicional
- Pesca
- Agricultura itinerante

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Bolsas de fibra

---

## Hupdu (Hup)

**ID (aplicación):** `hupdu`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1.2, -70

**Población (dato usado en la app):** 4.000 personas

**Lengua:** Hupda

**Familia lingüística:** Nadëb

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Nadëb ubicado en el Vaupés.

**Tradiciones:**
- Danza
- Caza
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Inga

**ID (aplicación):** `inga`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo, Cauca, Nariño

**Ubicación (resumen):** Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -76.5

**Población (dato usado en la app):** 25.000 personas

**Lengua:** Inga

**Familia lingüística:** Quechua

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Descendientes del imperio Inca en el sur de Colombia.

**Tradiciones:**
- Taitas (médicos tradicionales)
- Yagé (ayahuasca)
- Cantos ancestrales

**Artesanías y oficios:**
- Bebederos
- Mochilas
- Collares de chaquira

---

## Juhup (Yuhup)

**ID (aplicación):** `juhup`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -70.3

**Población (dato usado en la app):** 2.000 personas

**Lengua:** Juhupda

**Familia lingüística:** Nadëb

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Nadëb que habita el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Bebederos

---

## Kakua

**ID (aplicación):** `kakua`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.7, -70.8

**Población (dato usado en la app):** 800 personas

**Lengua:** Kakua

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Tukano Oriental pequeño y vulnerable.

**Tradiciones:**
- Maloca y organización comunitaria
- Caza y pesca en cuencas del Vaupés
- Rituales propios del complejo Tukano Oriental

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Kamëntsá

**ID (aplicación):** `kamentsa`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo

**Ubicación (resumen):** Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 1.8, -76.6

**Población (dato usado en la app):** 3.500 personas

**Lengua:** Kamëntsá

**Familia lingüística:** Barbacoana

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** "Gente de la nieve". Habitan el Valle de Sibundoy en Putumayo.

**Tradiciones:**
- Carnaval del pueblo
- Borrachera (trance chamánico)
- Danza de los indios

**Artesanías y oficios:**
- Flautas traversas
- Mochilas
- Instrumentos musicales

---

## Kankuamo

**ID (aplicación):** `kankuamo`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar

**Ubicación (resumen):** Sierra Nevada de Santa Marta

**Coordenadas aproximadas (punto en el mapa de la app):** 10.4, -73.2

**Población (dato usado en la app):** 8.500 personas

**Lengua:** Kankuamo

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Habitan la vertiente sur de la Sierra Nevada de Santa Marta.

**Tradiciones:**
- Vallenato tradicional
- Ceremonia del Yas
- Danzas de protección

**Artesanías y oficios:**
- Cajas (instrumentos musicales)
- Gaitas
- Cuadros bordados

---

## Karijona

**ID (aplicación):** `karijona`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés, Amazonas

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -70.5

**Población (dato usado en la app):** 200 personas

**Lengua:** Karijona

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Arawak en el Vaupés y Amazonas.

**Tradiciones:**
- Cosmovisión y relatos de origen Arawak
- Caza y pesca fluvial
- Chamanismo y memoria oral

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Kawiyarí

**ID (aplicación):** `kawiyari`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.6, -70.4

**Población (dato usado en la app):** 1.000 personas

**Lengua:** Kawiyarí

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Tukano Oriental ubicado en el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Kofán

**ID (aplicación):** `cofan`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo, Nariño

**Ubicación (resumen):** Putumayo y Nariño

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -77.3

**Población (dato usado en la app):** 2.500 personas

**Lengua:** Kofan

**Familia lingüística:** Kofan

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Guardianes de la biodiversidad en Putumayo y Nariño.

**Tradiciones:**
- Conservación del bosque
- Yagé
- Danza ceremonial

**Artesanías y oficios:**
- Bebederos ceremoniales
- Canastos
- Brazaletes

---

## Kogui (Kágaba)

**ID (aplicación):** `kogui`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar, Magdalena, La Guajira

**Ubicación (resumen):** Sierra Nevada de Santa Marta

**Coordenadas aproximadas (punto en el mapa de la app):** 10.8, -73.8

**Población (dato usado en la app):** 4.500 personas

**Lengua:** Kogui

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** "Hermanos mayores". Habitan las altas cumbres de la Sierra Nevada de Santa Marta.

**Tradiciones:**
- Aluna (concepto de madre naturaleza)
- Mamos (sacerdotes espirituales)
- Reflexión sobre el equilibrio universal

**Artesanías y oficios:**
- Alpargatas
- Canastos tejidos
- Mochilas ceremoniales

---

## Kuiba (Wámac)

**ID (aplicación):** `kuiba`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Vichada, Meta

**Ubicación (resumen):** Vichada y Meta

**Coordenadas aproximadas (punto en el mapa de la app):** 5, -69.5

**Población (dato usado en la app):** 4.000 personas

**Lengua:** Kuiba

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Arawak que habita los llanos del Vichada y Meta.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Bebederos

---

## Kurripaco

**ID (aplicación):** `kurripaco`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Guainía, Vaupés

**Ubicación (resumen):** Guainía y Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 2.8, -69

**Población (dato usado en la app):** 6.000 personas

**Lengua:** Kurripaco

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan la zona del Inírida en Guainía.

**Tradiciones:**
- Arte plumario
- Danza ceremonial
- Pesca ritual

**Artesanías y oficios:**
- Brazaletes de plumas
- Canastos
- Bebederos

---

## Letuama

**ID (aplicación):** `letuama`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.4, -70.4

**Población (dato usado en la app):** 600 personas

**Lengua:** Letuama

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Tukano Oriental pequeño ubicado en el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Makaguaje

**ID (aplicación):** `makaguaje`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -72

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Makaguaje

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Arawak amazónico.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Trabajos en fibra

---

## Makuna

**ID (aplicación):** `makuna`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -70.8

**Población (dato usado en la app):** 4.000 personas

**Lengua:** Makuna

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Tukano Oriental en el Vaupés.

**Tradiciones:**
- Danza ceremonial
- Ceremonia del agua
- Pesca

**Artesanías y oficios:**
- Bebederos
- Canastos
- Brazaletes

---

## Masiguare

**ID (aplicación):** `masiguare`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Meta

**Ubicación (resumen):** Meta

**Coordenadas aproximadas (punto en el mapa de la app):** 3.8, -72.5

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Masiguare

**Familia lingüística:** Guahibo

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo de la familia Guahibo ubicado en el Meta.

**Tradiciones:**
- Caza
- Pesca
- Danza

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Matapí

**ID (aplicación):** `matapi`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas, Vaupés

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -0.3, -71.5

**Población (dato usado en la app):** 800 personas

**Lengua:** Matapí

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Arawak amazónico.

**Tradiciones:**
- Chagra y recursos del río
- Caza y pesca
- Vínculos de parentesco y territorio

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Miraña

**ID (aplicación):** `mirana`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas, Putumayo

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -73.5

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Miraña

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Arawak que habita la región amazónica.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Bebederos

---

## Mokaná

**ID (aplicación):** `mokana`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Atlántico, Bolívar

**Ubicación (resumen):** Atlántico y Bolívar

**Coordenadas aproximadas (punto en el mapa de la app):** 10.5, -75

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Mokaná

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Herederos de la tradición Tairona en el departamento del Atlántico.

**Tradiciones:**
- Danza ceremonial
- Tejido
- Agricultura

**Artesanías y oficios:**
- Mochilas
- Canastos
- Bordados

---

## Muinane

**ID (aplicación):** `muinane`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo

**Ubicación (resumen):** Amazonía del Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -75.5

**Población (dato usado en la app):** 1.200 personas

**Lengua:** Muinane

**Familia lingüística:** Witoto

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Reconocidos por sus profundos conocimientos de la selva.

**Tradiciones:**
- Danza del agua
- Medicina tradicional
- Leyendas de la creación

**Artesanías y oficios:**
- Canastos
- Brazaletes de semillas
- Pinturas corporales

---

## Muisca

**ID (aplicación):** `muisca`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cundinamarca, Boyacá, Santander

**Ubicación (resumen):** Cundinamarca y Boyacá

**Coordenadas aproximadas (punto en el mapa de la app):** 4.8, -74.2

**Población (dato usado en la app):** 6.000 personas

**Lengua:** Muisca

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Herederos de una de las civilizaciones más avanzadas de América prehispánica.

**Tradiciones:**
- Tradiciones Muiscas
- Danza
- Agricultura ancestral

**Artesanías y oficios:**
- Tejidos
- Cerámica
- Orfebrería

---

## Nasa (Páez)

**ID (aplicación):** `nasa`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca, Huila, Tolima

**Ubicación (resumen):** Cauca, Huila y Tolima

**Coordenadas aproximadas (punto en el mapa de la app):** 2.5, -76.5

**Población (dato usado en la app):** 180.000 personas

**Lengua:** Nasa yuwe

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Uno de los pueblos más grandes de Colombia.

**Tradiciones:**
- Cabildo Nasa
- Danza tradicional
- Sistema de gobernanza propio

**Artesanías y oficios:**
- Mochilas Nasa
- Tejidos con diseños geométricos
- Cestería tradicional

---

## Nonuya

**ID (aplicación):** `nonuya`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo

**Ubicación (resumen):** Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 0.2, -74.8

**Población (dato usado en la app):** 300 personas

**Lengua:** Nonuya

**Familia lingüística:** Witoto

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Witoto en el Putumayo.

**Tradiciones:**
- Maloca como espacio social
- Chamanismo witoto
- Caza, pesca y chagra

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Bebederos

---

## Nukak

**ID (aplicación):** `nukak`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Guainía, Vaupés, Guaviare

**Ubicación (resumen):** Guainía y Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 2.5, -69

**Población (dato usado en la app):** 400 personas

**Lengua:** Nukak

**Familia lingüística:** Guayabero

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Uno de los últimos pueblos nómadas de Colombia.

**Tradiciones:**
- Nomadismo
- Caza y recolección
- Vida seminómada

**Artesanías y oficios:**
- Brazaletes
- Bolsas
- Arcos y flechas

---

## Ocaina

**ID (aplicación):** `ocaina`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo

**Ubicación (resumen):** Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -75

**Población (dato usado en la app):** 500 personas

**Lengua:** Ocaina

**Familia lingüística:** Witoto

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Witoto ubicado en el Putumayo.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Pastos

**ID (aplicación):** `pasto`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Nariño

**Ubicación (resumen):** Nariño

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -77.5

**Población (dato usado en la app):** 45.000 personas

**Lengua:** Pastos

**Familia lingüística:** Barbacoa

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan la zona alta de Nariño cerca de la frontera con Ecuador.

**Tradiciones:**
- Danza de los indios
- Tejido de ruanas
- Cultivo de papa

**Artesanías y oficios:**
- Ruanas de lana
- Mochilas
- Sombreros

---

## Piapoco

**ID (aplicación):** `piapoco`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Casanare, Meta, Arauca

**Ubicación (resumen):** Casanare y Meta

**Coordenadas aproximadas (punto en el mapa de la app):** 5, -72

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Piapoco

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Arawak de los llanos orientales.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Hamacas

---

## Piaroa

**ID (aplicación):** `piaroa`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Vichada, Meta, Guainía, Arauca

**Ubicación (resumen):** Vichada, Meta y Guainía

**Coordenadas aproximadas (punto en el mapa de la app):** 4.5, -68.5

**Población (dato usado en la app):** 15.000 personas

**Lengua:** Piaroa

**Familia lingüística:** Piaroa

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Conocidos por su pacifismo y conocimientos sobre fauna y flora.

**Tradiciones:**
- Pacifismo
- Caza sostenible
- Chamanismo

**Artesanías y oficios:**
- Bebederos
- Canastos
- Brazaletes

---

## Piratapuyo

**ID (aplicación):** `piratapuyo`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -70.3

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Piratapuyo

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Tukano Oriental ubicado en el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Danza ceremonial

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Pisamira

**ID (aplicación):** `pisamira`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.6, -70.5

**Población (dato usado en la app):** 500 personas

**Lengua:** Pisamira

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Tukano Oriental pequeño.

**Tradiciones:**
- Rituales ligados al Yuruparí
- Caza y pesca
- Música y danza ritual

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Puinave

**ID (aplicación):** `puinave`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Guainía, Vichada

**Ubicación (resumen):** Guainía y Vichada

**Coordenadas aproximadas (punto en el mapa de la app):** 3.5, -68

**Población (dato usado en la app):** 6.000 personas

**Lengua:** Puinave

**Familia lingüística:** Puinave

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan la zona del río Inírida en Guainía.

**Tradiciones:**
- Danza ceremonial
- Caza
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Sáliba

**ID (aplicación):** `saliba`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Casanare, Meta

**Ubicación (resumen):** Casanare y Meta

**Coordenadas aproximadas (punto en el mapa de la app):** 4.5, -72

**Población (dato usado en la app):** 5.000 personas

**Lengua:** Saliba

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Arawak que habita el norte del Meta y Casanare.

**Tradiciones:**
- Caza
- Pesca
- Ceremonias

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Senú

**ID (aplicación):** `senu`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Córdoba, Sucre, Bolívar

**Ubicación (resumen):** Córdoba y Sucre

**Coordenadas aproximadas (punto en el mapa de la app):** 8, -75.5

**Población (dato usado en la app):** 15.000 personas

**Lengua:** Senú

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Habitan la región de los Montes de María y Córdoba.

**Tradiciones:**
- Danza tradicional
- Agricultura
- Pesca

**Artesanías y oficios:**
- Canastos
- Hamacas
- Bordados

---

## Sikuani (Cuiva)

**ID (aplicación):** `sikuani`

**Región natural (macro en la app):** Orinoquía

**Departamentos:** Meta, Casanare, Vichada, Arauca

**Ubicación (resumen):** Meta, Casanare y Vichada

**Coordenadas aproximadas (punto en el mapa de la app):** 4, -72.5

**Población (dato usado en la app):** 12.000 personas

**Lengua:** Sikuani

**Familia lingüística:** Guahibo

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Uno de los pueblos más grandes de los llanos orientales.

**Tradiciones:**
- Danza ceremonial
- Caza
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Siona

**ID (aplicación):** `siona`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo, Nariño

**Ubicación (resumen):** Putumayo

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -77

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Siona

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Habitan la zona de transición entre los Andes y la Amazonía.

**Tradiciones:**
- Yagé ceremonial
- Danza ceremonial
- Caza sostenible

**Artesanías y oficios:**
- Bebederos
- Mochilas
- Collares de semillas

---

## Siriano

**ID (aplicación):** `siriano`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -70

**Población (dato usado en la app):** 500 personas

**Lengua:** Siriano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Tukano Oriental pequeño.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Taiwano

**ID (aplicación):** `taiwano`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.7, -70.5

**Población (dato usado en la app):** 1.200 personas

**Lengua:** Taiwano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Tukano Oriental ubicado en el Vaupés.

**Tradiciones:**
- Danza
- Caza
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Bebederos

---

## Tanimuka

**ID (aplicación):** `tanimuka`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés, Amazonas

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.5, -70.5

**Población (dato usado en la app):** 2.000 personas

**Lengua:** Tanimuka

**Familia lingüística:** Tanimuka

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo amazónico ubicado en el Vaupés y Amazonas.

**Tradiciones:**
- Ceremonia del Yuruparí
- Danza
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Tariano

**ID (aplicación):** `tariano`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -69.8

**Población (dato usado en la app):** 4.000 personas

**Lengua:** Tariano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Conocidos por su música tradicional.

**Tradiciones:**
- Música tradicional
- Danza ceremonial
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Tatuyo

**ID (aplicación):** `tatuyo`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -70.3

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Tatuyo

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Tukano Oriental ubicado en el Vaupés.

**Tradiciones:**
- Ceremonia del Yuruparí
- Danza
- Pesca

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Ticuna (Tikuna)

**ID (aplicación):** `ticuna`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas, Putumayo

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -1.5, -73

**Población (dato usado en la app):** 30.000 personas

**Lengua:** Ticuna

**Familia lingüística:** Ticuna

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Uno de los pueblos más numerosos de la Amazonía.

**Tradiciones:**
- Danza del Charachi
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Trabajos en palma

---

## Totoró

**ID (aplicación):** `totoro`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Cauca

**Coordenadas aproximadas (punto en el mapa de la app):** 2.5, -76.8

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Totoró

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Habitan el municipio de Totoró en Cauca.

**Tradiciones:**
- Ceremonia del agua
- Danza del venado
- Cultivo de yuca

**Artesanías y oficios:**
- Tejidos tradicionales
- Cestería
- Mochilas

---

## Tsáchila (Colorados)

**ID (aplicación):** `tsachila`

**Región natural (macro en la app):** Pacífico

**Departamentos:** Nariño

**Ubicación (resumen):** Nariño

**Coordenadas aproximadas (punto en el mapa de la app):** 1.2, -78.5

**Población (dato usado en la app):** 6.000 personas

**Lengua:** Tsáchila

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Conocidos por su práctica de teñir el cabello de rojo.

**Tradiciones:**
- Teñido del cabello
- Danza ceremonial
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Collares

---

## Tsiripu

**ID (aplicación):** `tshiripu`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca

**Ubicación (resumen):** Cauca

**Coordenadas aproximadas (punto en el mapa de la app):** 2.4, -76.7

**Población (dato usado en la app):** 500 personas

**Lengua:** Paez

**Familia lingüística:** Paez

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Nasa ubicado en el Cauca.

**Tradiciones:**
- Danza tradicional
- Agricultura
- Tejido

**Artesanías y oficios:**
- Mochilas
- Tejidos
- Bordados

---

## Tukano

**ID (aplicación):** `tukano`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1, -70

**Población (dato usado en la app):** 15.000 personas

**Lengua:** Tukano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** El pueblo más numeroso del Vaupés.

**Tradiciones:**
- Yuruparí
- Danza ceremonial
- Ceremonia de la coca

**Artesanías y oficios:**
- Bebederos
- Flautas
- Máscaras

---

## Tule (Guna)

**ID (aplicación):** `tule`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Córdoba, Chocó

**Ubicación (resumen):** Región del Darién, Córdoba

**Coordenadas aproximadas (punto en el mapa de la app):** 7.5, -76

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Guna

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Conocidos mundialmente por sus molas.

**Tradiciones:**
- Mola (arte textil)
- Danza del lujo
- Toma de na

**Artesanías y oficios:**
- Molas
- Tashtek (brazaletes de oro)
- Hamacas decoradas

---

## Tuyuka

**ID (aplicación):** `tuyuka`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.3, -70.8

**Población (dato usado en la app):** 1.800 personas

**Lengua:** Tuyuka

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Conocidos por sus conocimientos astronómicos.

**Tradiciones:**
- Astronomía tradicional
- Danza ceremonial
- Ceremonias

**Artesanías y oficios:**
- Bebederos
- Canastos
- Brazaletes

---

## U'wa

**ID (aplicación):** `uwa`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Santander, Boyacá, Norte de Santander

**Ubicación (resumen):** Santander y Boyacá

**Coordenadas aproximadas (punto en el mapa de la app):** 6.5, -72.8

**Población (dato usado en la app):** 6.000 personas

**Lengua:** U'wa

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** "Gente del agua". Guardianes de fuentes de agua sagradas.

**Tradiciones:**
- Ceremonias del agua
- Danza
- Agricultura ancestral

**Artesanías y oficios:**
- Canastos
- Tejidos
- Trabajos en madera

---

## Uitoto (Huitoto)

**ID (aplicación):** `uitoto`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Putumayo, Amazonas, Caquetá

**Ubicación (resumen):** Putumayo y Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** 0.3, -74.5

**Población (dato usado en la app):** 10.000 personas

**Lengua:** Huitoto

**Familia lingüística:** Witoto

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Uno de los pueblos más conocidos de la Amazonía colombiana.

**Tradiciones:**
- Fuma deijena
- Danza tradicional
- Sistema de clanes

**Artesanías y oficios:**
- Canastos
- Brazaletes de chaquira
- Bebederos

---

## Wanano

**ID (aplicación):** `wanano`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 1.2, -69.8

**Población (dato usado en la app):** 5.000 personas

**Lengua:** Wanano

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo del complejo Tukano Oriental en el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Chamanismo

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Plumas

---

## Waunan

**ID (aplicación):** `waunan`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.8, -70.5

**Población (dato usado en la app):** 3.000 personas

**Lengua:** Waunan

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Parte del complejo cultural Tukano Oriental.

**Tradiciones:**
- Danza ceremonial
- Ceremonias ligadas al Yuruparí
- Pesca tradicional

**Artesanías y oficios:**
- Bebederos
- Canastos
- Brazaletes

---

## Wayuu

**ID (aplicación):** `wayuu`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** La Guajira, Cesar, Magdalena

**Ubicación (resumen):** La Guajira

**Coordenadas aproximadas (punto en el mapa de la app):** 11.5, -72.3

**Población (dato usado en la app):** 470.000 personas

**Lengua:** Wayuunaiki

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** El pueblo indígena más numeroso de Colombia.

**Tradiciones:**
- Tejido de chinchorros
- Pechichada (ritual de iniciación)
- Majayura (fiesta ceremonial)

**Artesanías y oficios:**
- Hamacas
- Moñonas
- Sulmajuna (bolsos tejidos)

---

## Wiwa

**ID (aplicación):** `wiwa`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar, Magdalena, La Guajira

**Ubicación (resumen):** Sierra Nevada de Santa Marta

**Coordenadas aproximadas (punto en el mapa de la app):** 10.6, -73.5

**Población (dato usado en la app):** 2.500 personas

**Lengua:** Wiwa

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Uno de los cuatro pueblos de la Sierra Nevada de Santa Marta.

**Tradiciones:**
- Bunde (danza ceremonial)
- Ceremonia de la cosecha
- Rituales de paso

**Artesanías y oficios:**
- Tejidos tradicionales
- Cestería
- Máscaras ceremoniales

---

## Yagua

**ID (aplicación):** `yagua`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -2, -73

**Población (dato usado en la app):** 7.000 personas

**Lengua:** Yagua

**Familia lingüística:** Yagua

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Conocidos por su técnica de pesca con arpón.

**Tradiciones:**
- Pesca con arpón
- Danza del loro
- Chamanismo

**Artesanías y oficios:**
- Brazaletes
- Canastos
- Arpones

---

## Yanacona

**ID (aplicación):** `yanacona`

**Región natural (macro en la app):** Macro Occidente

**Departamentos:** Cauca, Nariño, Putumayo

**Ubicación (resumen):** Cauca y Nariño

**Coordenadas aproximadas (punto en el mapa de la app):** 2.2, -76.8

**Población (dato usado en la app):** 25.000 personas

**Lengua:** Yanacona

**Familia lingüística:** Quechua

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Descendientes del imperio Inca.

**Tradiciones:**
- Danza tradicional
- Agricultura
- Tejido

**Artesanías y oficios:**
- Mochilas
- Ruanas
- Bordados

---

## Yauna

**ID (aplicación):** `yauna`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -72

**Población (dato usado en la app):** 300 personas

**Lengua:** Yagua

**Familia lingüística:** Yagua

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo amazónico relacionado con los Yagua.

**Tradiciones:**
- Afinidad cultural con pueblos Yagua
- Caza y pesca en selva y río
- Rituales propios del territorio

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Arcos

---

## Yuko

**ID (aplicación):** `yuko`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar, Norte de Santander

**Ubicación (resumen):** Cesar

**Coordenadas aproximadas (punto en el mapa de la app):** 8.2, -73

**Población (dato usado en la app):** 3.000 personas

**Lengua:** Yuko

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Pueblo Chibcha ubicado en Cesar y Norte de Santander.

**Tradiciones:**
- Danza tradicional
- Agricultura
- Rituales

**Artesanías y oficios:**
- Canastos
- Tejidos
- Trabajos en barro

---

## Yukpa

**ID (aplicación):** `yukpa`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Cesar, Norte de Santander

**Ubicación (resumen):** Cesar

**Coordenadas aproximadas (punto en el mapa de la app):** 8.5, -73

**Población (dato usado en la app):** 8.000 personas

**Lengua:** Yukpa

**Familia lingüística:** Chibcha

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Chibcha ubicado en la Serranía del Perijá.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Hamacas
- Bordados

---

## Yukuna

**ID (aplicación):** `yukuna`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -0.5, -71.8

**Población (dato usado en la app):** 2.500 personas

**Lengua:** Yukuna

**Familia lingüística:** Arawak

**Estado lingüístico (categoría en la app):** En peligro

**Descripción:** Pueblo Arawak amazónico.

**Tradiciones:**
- Caza
- Pesca
- Agricultura

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Trabajos en fibra

---

## Yuri

**ID (aplicación):** `yuri`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Amazonas

**Ubicación (resumen):** Amazonas

**Coordenadas aproximadas (punto en el mapa de la app):** -1.5, -72.5

**Población (dato usado en la app):** 200 personas

**Lengua:** Yuri

**Familia lingüística:** Yuri

**Estado lingüístico (categoría en la app):** En peligro crítico

**Descripción:** Uno de los pueblos más pequeños y vulnerables.

**Tradiciones:**
- Organización en grupos familiares reducidos
- Caza, pesca y recolección
- Memoria oral y vínculo territorial

**Artesanías y oficios:**
- Brazaletes
- Canastos
- Plumas

---

## Yurutí

**ID (aplicación):** `yuruti`

**Región natural (macro en la app):** Amazonía

**Departamentos:** Vaupés

**Ubicación (resumen):** Vaupés

**Coordenadas aproximadas (punto en el mapa de la app):** 0.4, -70.3

**Población (dato usado en la app):** 1.500 personas

**Lengua:** Yurutí

**Familia lingüística:** Tucano Oriental

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Pueblo Tukano Oriental ubicado en el Vaupés.

**Tradiciones:**
- Caza
- Pesca
- Danza ceremonial

**Artesanías y oficios:**
- Canastos
- Brazaletes
- Flautas

---

## Zenú

**ID (aplicación):** `zenu`

**Región natural (macro en la app):** Macro Norte / Caribe

**Departamentos:** Córdoba, Sucre, Bolívar

**Ubicación (resumen):** Córdoba y Sucre

**Coordenadas aproximadas (punto en el mapa de la app):** 8.5, -75.5

**Población (dato usado en la app):** 250.000 personas

**Lengua:** Zenú

**Familia lingüística:** Zenú

**Estado lingüístico (categoría en la app):** Vulnerable

**Descripción:** Herederos de una de las civilizaciones más desarrolladas de América.

**Tradiciones:**
- Ceremonia del agua
- Danza del flechero
- Ofrendas a la tierra

**Artesanías y oficios:**
- Sombrero vueltiao
- Mochilas
- Cestería en totumo

---



## Familias lingüísticas (según `languageFamily` en la app)

Agrupación derivada del código; la clasificación académica puede variar.

1. **Andoque** — Andoque

2. **Arawak** — Achagua, Coyaima-Natagaima, Karijona, Kuiba (Wámac), Kurripaco, Makaguaje, Matapí, Miraña, Piapoco, Sáliba, Siona, Wayuu, Yukuna

3. **Barbacoa** — Pastos

4. **Barbacoana** — Kamëntsá

5. **Bora** — Bora

6. **Chibcha** — Arhuaco (Ika), Awá, Barí, Betoye, Chimila, Eperara-Siapidara, Guane, Kankuamo, Kogui (Kágaba), Mokaná, Muisca, Senú, Tsáchila (Colorados), Tule (Guna), U'wa, Wiwa, Yuko, Yukpa

7. **Embera** — Cañamomo, Embera, Embera Chamí, Embera Katío

8. **Guahibo** — Chiricoa, Masiguare, Sikuani (Cuiva)

9. **Guahíbo** — Amorúa

10. **Guayabero** — Guayabero, Hitnu, Nukak

11. **Kofan** — Kofán

12. **Nadëb** — Hupdu (Hup), Juhup (Yuhup)

13. **Paez** — Ambaló, Andakies, Coconuco, Guambiano, Guanaca, Nasa (Páez), Totoró, Tsiripu

14. **Piaroa** — Piaroa

15. **Puinave** — Puinave

16. **Quechua** — Inga, Yanacona

17. **Tanimuka** — Tanimuka

18. **Ticuna** — Ticuna (Tikuna)

19. **Tucano Oriental** — Bará, Barasana, Carapana, Coreguaje, Cubeo, Desano, Dujo, Kakua, Kawiyarí, Letuama, Makuna, Piratapuyo, Pisamira, Siriano, Taiwano, Tariano, Tatuyo, Tukano, Tuyuka, Wanano, Waunan, Yurutí

20. **Tupian** — Cocama (Kukama)

21. **Witoto** — Muinane, Nonuya, Ocaina, Uitoto (Huitoto)

22. **Yagua** — Yagua, Yauna

23. **Yuri** — Yuri

24. **Zenú** — Zenú

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

| Categoría | Valor (según datos de la app) |
|-----------|-------------------------------|
| Pueblos en este documento | 94 |
| Población total (suma de registros en app) | 1.497.541 |
| Categoría «Vulnerable» | 51 |
| Categoría «En peligro» | 18 |
| Categoría «En peligro crítico» | 25 |

Colombia reconoce oficialmente un número mayor de pueblos (p. ej. **115** según referencias al censo DANE 2018); esta tabla solo refleja el subconjunto implementado en el código.

---

## Nota importante

- Regenerar este archivo tras cambiar `ethnicities.js`:

```bash
node scripts/gen-pueblos-md.mjs
```

- Los textos largos tipo ONIC que había en versiones anteriores de `PUEBLOS.md` no se mezclan aquí automáticamente; si necesitas el relato institucional completo, combina esta ficha técnica con [onic.org.co/pueblos](https://www.onic.org.co/pueblos).

---

*Generado para el proyecto Culturas de Colombia — alinear con `src/data/ethnicities.js`.*
