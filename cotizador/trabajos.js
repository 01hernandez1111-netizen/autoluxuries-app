// Guía integrada de trabajos de detailing: qué se necesita, cuánto tiempo y cuánto producto.
// La app la usa para leer "lo que quiere el cliente" y "lo que necesita el auto".
// h = horas extra, p = productos extra ($), serv = si ya existe un servicio que lo cubre.
// Son aproximados; el dueño los ajusta en cada cotización.

export const TRABAJOS = [
  { id: "tar", n: "Quitar chapopote / brea", en: "tar removal", kw: ["chapopote", "brea", "tar", "alquitran"], h: .5, p: 4, prod: "Removedor de chapopote, toallas", herr: "Atomizador" },
  { id: "sap", n: "Quitar savia de árbol", en: "tree sap removal", kw: ["savia", "sap", "resina"], h: .5, p: 4, prod: "Removedor de savia o alcohol isopropílico, clay bar", herr: "Atomizador" },
  { id: "bird", n: "Excremento de pájaro", en: "bird dropping removal", kw: ["pajaro", "pajaros", "excremento", "bird", "popo de pajaro"], h: .5, p: 3, prod: "Limpiador enzimático; si ya marcó la pintura necesita pulido", herr: "Pulidora si está grabado" },
  { id: "bugs", n: "Quitar insectos", en: "bug removal", kw: ["insecto", "insectos", "mosquito", "mosquitos", "bugs", "bug"], h: .4, p: 3, prod: "Removedor de insectos", herr: "Esponja suave" },
  { id: "water", n: "Manchas de agua dura", en: "hard water spot removal", kw: ["agua dura", "water spots", "water spot", "manchas de agua", "sarro", "calcio"], h: 1, p: 8, prod: "Removedor de manchas de agua; pulimento si están grabadas", herr: "Pulidora" },
  { id: "iron", n: "Descontaminar hierro / puntos de óxido", en: "iron decontamination", kw: ["hierro", "ferroso", "rail dust", "iron", "puntos naranja", "puntitos"], h: .75, p: 8, prod: "Descontaminante de hierro, clay bar y lubricante", herr: "Atomizador" },
  { id: "overspray", n: "Quitar overspray", en: "overspray removal", kw: ["overspray", "pintura en aerosol", "rocio de pintura", "brisa de pintura"], h: 1.5, p: 10, prod: "Clay bar agresivo, lubricante, pulimento", herr: "Pulidora" },
  { id: "headlights", n: "Restaurar faros", en: "headlight restoration", kw: ["faro", "faros", "headlight", "headlights", "mica", "micas"], h: 1, p: 10, prod: "Lijas 800–3000, compuesto, sellador UV", herr: "Pulidora y cinta de pintor" },
  { id: "decals", n: "Quitar calcomanías y pegamento", en: "decal and adhesive removal", kw: ["calcomania", "calcomanias", "sticker", "stickers", "decal", "decals", "pegamento", "adhesivo"], h: .75, p: 5, prod: "Removedor de adhesivo", herr: "Pistola de calor, raspador plástico" },
  { id: "mud", n: "Lodo pesado", en: "heavy mud removal", kw: ["lodo", "barro", "mud", "off road", "offroad", "terraceria"], h: 1, p: 6, prod: "Pre-wash fuerte, desengrasante, más agua", herr: "Hidrolavadora" },
  { id: "sand", n: "Arena en alfombras", en: "sand removal", kw: ["arena", "sand", "playa", "beach"], h: .75, p: 1, prod: "—", herr: "Cepillo de taladro, compresor, aspiradora" },
  { id: "vomit", n: "Limpiar vómito", en: "vomit cleanup and sanitizing", kw: ["vomito", "vomit", "vomitado", "vomitaron", "vomitó"], h: 1.5, p: 10, prod: "Limpiador enzimático, sanitizante", herr: "Extractora, vapor, ozono" },
  { id: "urine", n: "Limpiar orina", en: "urine cleanup and odor treatment", kw: ["orina", "orines", "pipi", "urine", "pee", "orino"], h: 1.5, p: 10, prod: "Enzimático, neutralizador de olor", herr: "Extractora, ozono" },
  { id: "blood", n: "Manchas de sangre", en: "blood stain removal", kw: ["sangre", "blood"], h: 1, p: 8, prod: "Enzimático en agua fría", herr: "Extractora" },
  { id: "smoke", n: "Olor a humo / cigarro", en: "smoke odor treatment", kw: ["humo", "cigarro", "cigarros", "cigarrillo", "fumador", "fuma", "fumaba", "smoke", "smoking", "tabaco", "marihuana", "mota", "weed", "vape"], h: 1.5, p: 12, prod: "Limpiar techo y cinturones, enzimático, filtro de cabina", herr: "Vapor, ozono 1–2 h" },
  { id: "spill", n: "Derrame de comida o bebida", en: "food and drink spill cleanup", kw: ["leche", "milk", "comida", "refresco", "soda", "cafe", "coffee", "derrame", "derramo", "derramado", "jugo", "juice", "malteada"], h: 1, p: 8, prod: "Enzimático", herr: "Extractora" },
  { id: "gum", n: "Quitar chicle", en: "gum removal", kw: ["chicle", "gum"], h: .5, p: 2, prod: "Removedor de chicle o hielo", herr: "Vapor, raspador" },
  { id: "crayon", n: "Crayón / cera de vela / plastilina", en: "crayon and wax removal", kw: ["crayon", "crayones", "crayola", "vela", "plastilina"], h: .5, p: 3, prod: "Removedor de adhesivo, toallas", herr: "Pistola de calor" },
  { id: "ink", n: "Manchas de tinta o marcador", en: "ink stain removal", kw: ["tinta", "pluma", "ink", "marcador", "plumon"], h: .5, p: 4, prod: "Alcohol isopropílico, limpiador de piel", herr: "Cepillo suave" },
  { id: "headliner", n: "Techo interior manchado", en: "headliner cleaning", kw: ["techo", "headliner", "cielo"], h: .75, p: 4, prod: "Limpiador suave (sin mojar de más)", herr: "Microfibra, cepillo suave" },
  { id: "leather", n: "Hidratar piel reseca", en: "leather conditioning", kw: ["cuero", "leather", "agrietado", "reseco", "reseca", "piel reseca"], h: 1, p: 10, prod: "Limpiador y acondicionador de piel", herr: "Cepillo de piel" },
  { id: "kids", n: "Área de niños / sillas de bebé", en: "child seat area deep clean", kw: ["silla de bebe", "car seat", "bebe", "ninos", "kids", "silla del nino"], h: .75, p: 4, prod: "Enzimático suave", herr: "Aspiradora, vapor" },
  { id: "foggy", n: "Película en vidrios interiores", en: "interior glass haze removal", kw: ["empanado", "empanados", "neblina", "haze", "vidrios sucios", "pelicula en los vidrios"], h: .3, p: 1, prod: "Limpiador de vidrios", herr: "Toalla de vidrio" },
  { id: "belts", n: "Cinturones de seguridad sucios", en: "seat belt cleaning", kw: ["cinturon", "cinturones", "seatbelt", "seat belt"], h: .5, p: 2, prod: "Limpiador interior", herr: "Cepillo, pinza" },
  { id: "trash", n: "Mucha basura o cosas adentro", en: "heavy trash removal", kw: ["basura", "trash", "tiradero", "cajuela llena", "muchas cosas", "cochinero"], h: .75, p: 1, prod: "Bolsas", herr: "—" },
  { id: "construction", n: "Polvo de construcción / concreto", en: "construction dust and debris cleanup", kw: ["construccion", "concreto", "cemento", "drywall", "yeso", "tablaroca"], h: 1.5, p: 6, prod: "Limpiador interior extra, toallas", herr: "Compresor, aspiradora, extractora" },
  { id: "lint", n: "Pelusa en alfombra", en: "lint removal", kw: ["pelusa", "lint"], h: .5, p: 1, prod: "—", herr: "Piedra o cepillo de pelo" },
  { id: "grease", n: "Grasa o aceite en alfombra", en: "grease and oil stain removal", kw: ["grasa", "aceite", "grease", "oil"], h: .75, p: 6, prod: "Desengrasante interior", herr: "Extractora" },
  { id: "salt", n: "Sal de carretera / invierno", en: "road salt removal", kw: ["sal", "salt", "nieve", "snow", "invierno"], h: .75, p: 4, prod: "Removedor de sal", herr: "Extractora" },
  { id: "ash", n: "Ceniza o polen", en: "ash and pollen cleanup", kw: ["ceniza", "ash", "polen", "pollen", "incendio"], h: .5, p: 2, prod: "Pre-wash", herr: "Compresor" },
  { id: "vents", n: "Ventilas muy sucias", en: "air vent detailing", kw: ["ventila", "ventilas", "rejilla", "rejillas", "vents", "vent"], h: .5, p: 1, prod: "Limpiador interior", herr: "Brochas, compresor, vapor" },
  { id: "trim", n: "Plásticos exteriores descoloridos", en: "faded trim restoration", kw: ["plastico descolorido", "plasticos grises", "plasticos blancos", "trim", "faded", "descoloridos"], h: .75, p: 6, prod: "Restaurador o recubrimiento de plásticos", herr: "Aplicador" },
  { id: "odor", n: "Mal olor general", en: "odor treatment", kw: ["olor", "olores", "peste", "huele", "apesta", "smell", "smells", "odor", "stink"], h: 1, p: 6, prod: "Enzimático, eliminador de olores", herr: "Vapor, ozono" },
  { id: "dog-hair", n: "Pelo de mascota", en: "pet hair removal", serv: "x-pet", kw: ["pelo", "pelos", "perro", "perros", "gato", "gatos", "mascota", "mascotas", "pet hair", "dog", "cat"] },
  { id: "stains", n: "Manchas en asientos o alfombra", en: "stain extraction", serv: "x-shampoo", kw: ["mancha", "manchas", "manchado", "stain", "stains", "extraccion", "shampoo"] },
  { id: "mold", n: "Moho o humedad", en: "mold treatment", serv: "x-mold", kw: ["moho", "hongo", "hongos", "mold", "mildew", "humedad", "mojado"] },
  { id: "moss", n: "Lama o musgo", en: "moss and algae removal", serv: "x-mold", kw: ["lama", "musgo", "moss", "algae", "alga"] },
  { id: "engine", n: "Motor", en: "engine bay detailing", serv: "x-engine", kw: ["motor", "engine"] },
  { id: "scratches", n: "Rayones o swirls", en: "paint correction", serv: "paint", kw: ["rayon", "rayones", "rayado", "rayada", "swirl", "swirls", "scratch", "scratches", "opaca", "oxidada", "dull"] },
  { id: "wax", n: "Cera y brillo", en: "wax protection", serv: "x-wax", kw: ["cera", "wax", "encerado", "brillo", "brillar"] },
  { id: "ceramic", n: "Recubrimiento cerámico", en: "ceramic coating", serv: "ceramic", kw: ["ceramico", "ceramic", "coating"] },
  { id: "wheels", n: "Rines raspados", en: "wheel restoration", serv: "wheel", kw: ["rin", "rines", "rim", "rims", "curb", "raspado", "raspados"] },
  { id: "fabric", n: "Proteger la tela", en: "fabric protection", serv: "fab", kw: ["proteger la tela", "proteccion de tela", "fabric", "impermeabilizar", "repelente"] }
];

const STOP = new Set("para porque quiere quiera necesita necesito tiene tienen mucho mucha muchos muchas poco esta estan este esto todo toda todos todas limpiar limpieza lavar quitar hacer favor carro auto coche camioneta troca vehiculo tambien pero como cuando donde algo bien solo cliente asiento asientos alfombra alfombras interior exterior adentro afuera with that this have needs wants clean".split(" "));

export const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ñ ]+/g, " ").replace(/\s+/g, " ").trim();

function tiene(texto, kw) {
  const k = norm(kw); if (!k) return false;
  return (" " + texto + " ").includes(" " + k + " ");
}

// devuelve los trabajos que aparecen en el texto (guía + los tuyos)
export function detectar(texto, mios) {
  const t = norm(texto); if (!t) return [];
  const out = [];
  TRABAJOS.forEach(j => { if (j.kw.some(k => tiene(t, k))) out.push(j); });
  if (out.some(j => ["smoke", "vomit", "urine"].includes(j.id))) { const i = out.findIndex(j => j.id === "odor"); if (i >= 0) out.splice(i, 1); }
  (mios || []).forEach(j => {
    const kws = (j.kw || []).filter(Boolean); if (!kws.length) return;
    const hits = kws.filter(k => tiene(t, k)).length;
    if (hits >= Math.min(2, kws.length)) out.push(Object.assign({ mio: true }, j));
  });
  return out;
}

// palabras clave para un trabajo nuevo que escribiste tú
export function palabrasClave(nombre) {
  return [...new Set(norm(nombre).split(" ").filter(w => w.length >= 4 && !STOP.has(w)))].slice(0, 5);
}
