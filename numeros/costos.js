// Costos reales de AutoLuxuries: productos, herramientas y van.
// Lo usan AL Cotizador y AL Números (esta misma copia vive en las dos carpetas).
// Los precios son aproximados para empezar; el dueño los cambia en Ajustes del Cotizador.

export const KITS = {
  int: "Interior", ext: "Exterior", extraccion: "Shampoo y extracción", cera: "Cera y sellador",
  pulido: "Pulido / corrección", ceramico: "Cerámico", motor: "Motor", moho: "Moho y lama",
  rines: "Restauración de rines", tela: "Protección de tela"
};

// precio = lo que pagas; rinde = cuántos trabajos te alcanza
export const PRODUCTOS_DEF = [
  { n: "Limpiador interior multiusos (galón)", precio: 30, rinde: 40, kit: "int" },
  { n: "Limpiador de vidrios (galón)", precio: 20, rinde: 60, kit: "int" },
  { n: "Restaurador de plásticos interior (galón)", precio: 40, rinde: 50, kit: "int" },
  { n: "Limpiador de asientos tela/piel (galón)", precio: 35, rinde: 40, kit: "int" },
  { n: "Shampoo de alfombras (galón)", precio: 30, rinde: 35, kit: "int" },
  { n: "Eliminador de olores y aroma", precio: 25, rinde: 40, kit: "int" },
  { n: "Toallas de microfibra (paquete)", precio: 40, rinde: 60, kit: "int" },
  { n: "Pre-wash / desengrasante (galón)", precio: 30, rinde: 30, kit: "ext" },
  { n: "Shampoo de espuma (galón)", precio: 30, rinde: 40, kit: "ext" },
  { n: "Cera en espuma (galón)", precio: 45, rinde: 35, kit: "ext" },
  { n: "Limpiador de rines y llantas (galón)", precio: 30, rinde: 30, kit: "ext" },
  { n: "Brillo de llantas (galón)", precio: 30, rinde: 40, kit: "ext" },
  { n: "Restaurador de plásticos exterior", precio: 25, rinde: 25, kit: "ext" },
  { n: "Toallas de secado", precio: 40, rinde: 80, kit: "ext" },
  { n: "Solución para extractora (galón)", precio: 35, rinde: 25, kit: "extraccion" },
  { n: "Cera / carnauba", precio: 40, rinde: 20, kit: "cera" },
  { n: "Compuesto, pulimento, clay bar y pads", precio: 150, rinde: 12, kit: "pulido" },
  { n: "Botella de recubrimiento cerámico", precio: 90, rinde: 1, kit: "ceramico" },
  { n: "Prep spray (panel wipe)", precio: 30, rinde: 10, kit: "ceramico" },
  { n: "Desengrasante y dressing de motor", precio: 35, rinde: 15, kit: "motor" },
  { n: "Tratamiento para moho y sanitizante", precio: 40, rinde: 10, kit: "moho" },
  { n: "Masilla, pintura y lijas para rines", precio: 60, rinde: 6, kit: "rines" },
  { n: "GYEON Q² FabricCoat 500 ml", precio: 50, rinde: 3, kit: "tela" }
];

// precio = lo que te costó; vida = cuántos trabajos aguanta antes de cambiarla
export const HERRAMIENTAS_DEF = [
  { n: "Aspiradora", precio: 250, vida: 400 },
  { n: "Extractora de alfombras", precio: 400, vida: 400 },
  { n: "Máquina de vapor", precio: 300, vida: 400 },
  { n: "Hidrolavadora", precio: 350, vida: 500 },
  { n: "Pulidora orbital", precio: 300, vida: 300 },
  { n: "Compresor / sopladora", precio: 150, vida: 400 },
  { n: "Generador o batería", precio: 800, vida: 600 },
  { n: "Tanque de agua y mangueras", precio: 300, vida: 600 },
  { n: "Cepillos, atomizadores y accesorios", precio: 100, vida: 150 }
];

export const VAN_DEF = { mpg: 20, gas: 4.10, desgaste: 0 };

const lista = (cot, k, def) => (cot && Array.isArray(cot[k]) && cot[k].length ? cot[k] : def);
const n0 = v => { const x = parseFloat(v); return isFinite(x) ? x : 0; };

export function costoKit(cot) {
  const out = {}; Object.keys(KITS).forEach(k => out[k] = 0);
  lista(cot, "productos", PRODUCTOS_DEF).forEach(p => { if (n0(p.rinde) > 0 && out[p.kit] != null) out[p.kit] += n0(p.precio) / n0(p.rinde); });
  return out;
}
export function herramientasPorTrabajo(cot) {
  return lista(cot, "herramientas", HERRAMIENTAS_DEF).reduce((a, h) => a + (n0(h.vida) > 0 ? n0(h.precio) / n0(h.vida) : 0), 0);
}
export function costoMilla(cot) {
  const v = Object.assign({}, VAN_DEF, cot || {});
  return (n0(v.mpg) ? n0(v.gas) / n0(v.mpg) : 0) + n0(v.desgaste);
}

// qué kits usa cada servicio (clave del sitio web) y cuánto de cada uno
function kitsDe(key) {
  const k = String(key || "");
  if (k.startsWith("full-")) return [["int", 1], ["ext", 1]];
  if (k.startsWith("int-")) return [["int", 1]];
  if (k.startsWith("ext-")) return [["ext", 1]];
  if (k.startsWith("fab-")) {
    const m = /area/.test(k) ? .4 : /front/.test(k) ? .5 : /pkg/.test(k) ? 1.8 : 1;
    const r = [["tela", m]]; if (/-ai$/.test(k)) r.push(["extraccion", /pkg/.test(k) ? 1.5 : 1]); return r;
  }
  return ({
    paint: [["ext", 1], ["pulido", 1]], ceramic: [["ext", 1], ["pulido", 1], ["ceramico", 1]], custom: [["int", .5], ["ext", .5]],
    wheel: [["rines", 1]], "boat-int": [["int", 1.3]], "x-pet": [["int", .15]], "x-petstain": [["extraccion", 1]],
    "x-shampoo": [["extraccion", .3]], "x-wax": [["cera", 1]], "x-carnauba": [["cera", 1]], "x-engine": [["motor", 1]],
    "x-vacuum": [["int", .1]], "x-mold": [["moho", 1]]
  })[k] || null;
}
const TAMANO = k => /-3row/.test(k) ? 1.3 : /-truck/.test(k) ? 1.25 : /-suv/.test(k) ? 1.15 : 1;
const CRECE = ["int", "ext", "extraccion", "cera", "tela"];

// costo de productos por un servicio; null si no se sabe (botes y RV van por pie)
export function costoProductos(key, cot) {
  const ks = kitsDe(key); if (!ks) return null;
  const c = costoKit(cot), t = TAMANO(key);
  return Math.round(ks.reduce((a, [kit, m]) => a + c[kit] * m * (CRECE.includes(kit) ? t : 1), 0) * 100) / 100;
}
