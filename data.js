// ============================================================
// data.js — Contenido del sitio PAPOI.DEV
//
// Edita ESTE archivo para agregar juegos nuevos o capturas de
// pantalla. No hace falta tocar el HTML, el CSS ni script.js.
// ============================================================

// ---------- JUEGOS ----------
// Aparecen como tarjetas en "Proyectos" y como botones de filtro
// en "Galería". Para agregar un juego nuevo, copia un bloque
// { ... } completo y pégalo dentro del array, con una coma antes.
//
//   slug   -> identificador corto, sin espacios ni acentos
//             (se usa internamente para filtrar la galería)
//   id     -> etiqueta tipo "EXP. 00X" que se ve en la tarjeta
//   title  -> nombre del juego
//   period -> años de desarrollo, ej. "2025–2026"
//   type   -> mecánica / categoría, se ve en rojo en la tarjeta
const GAMES = [
  {
    slug: "survives",
    id: "EXP. 001",
    title: "Papoi Survives",
    period: "2025–2026",
    type: "Oleadas · Multijugador LAN"
  },
  {
    slug: "climb",
    id: "EXP. 002",
    title: "Papoi Climb",
    period: "2026",
    type: "Físicas de escalada · Arcade"
  }
];

// ---------- CAPTURAS DE PANTALLA ----------
// Aparecen en la sección "Galería". Para agregar una captura tuya:
//   1. Guarda la imagen (jpg o png) dentro de la carpeta /images
//   2. Copia un bloque { ... } de abajo y pégalo en el array
//   3. Cambia "src" por el nombre de tu archivo, ej: "images/mi-foto.jpg"
//   4. Cambia "caption" por el texto que quieras mostrar
//   5. "game" debe coincidir EXACTAMENTE con un "slug" de GAMES de arriba
const SCREENSHOTS = [
  { game: "survives", src: "images/survives-01.svg", caption: "Papoi Survives — Oleada nocturna" },
  { game: "survives", src: "images/survives-02.svg", caption: "Papoi Survives — Menú de inicio" },
  { game: "survives", src: "images/survives-03.svg", caption: "Papoi Survives — Modo LAN" },
  { game: "climb",    src: "images/climb-01.svg",    caption: "Papoi Climb — Escalada en progreso" },
  { game: "climb",    src: "images/climb-02.svg",    caption: "Papoi Climb — Selección de nivel" },
  { game: "climb",    src: "images/climb-03.svg",    caption: "Papoi Climb — Físicas en acción" }
];
