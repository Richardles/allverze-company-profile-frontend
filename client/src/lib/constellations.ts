export interface Constellation {
  name: string;
  iau: string;
  vertices: [number, number][];
  edges: [number, number][];
  src: string;
}

interface Raw {
  name: string;
  iau: string;
  stars: string[];
  radec: [number, number][];
  edges: [number, number][];
  src: string;
}

const make = (raw: Raw): Constellation => {
  let minRa = Infinity;
  let maxRa = -Infinity;
  let minDec = Infinity;
  let maxDec = -Infinity;
  for (const [ra, dec] of raw.radec) {
    minRa = Math.min(minRa, ra);
    maxRa = Math.max(maxRa, ra);
    minDec = Math.min(minDec, dec);
    maxDec = Math.max(maxDec, dec);
  }
  const span = Math.max(maxRa - minRa, maxDec - minDec) || 1;
  let raOff = 0;
  let decOff = 0;
  if (maxRa - minRa > maxDec - minDec) decOff = (span - (maxDec - minDec)) / 2;
  else raOff = (span - (maxRa - minRa)) / 2;
  const vertices: [number, number][] = raw.radec.map(([ra, dec]) => [
    (ra - minRa + raOff) / span,
    (dec - minDec + decOff) / span,
  ]);
  return { name: raw.name, iau: raw.iau, vertices, edges: raw.edges, src: raw.src };
};

const ORION: Raw = {
  name: "Orion",
  iau: "ORI",
  stars: ["Bellatrix γ", "Betelgeuse α", "Mintaka δ", "Alnilam ε", "Alnitak ζ", "Rigel β", "Saiph κ"],
  radec: [
    [78.63, 6.35],
    [88.79, 7.41],
    [83.0, -0.3],
    [83.78, -1.2],
    [85.19, -1.94],
    [78.63, -8.2],
    [86.94, -9.67],
  ],
  edges: [
    [0, 1],
    [0, 2],
    [1, 4],
    [2, 3],
    [3, 4],
    [2, 5],
    [4, 6],
  ],
  src: "IAU Orion; hourglass of Betelgeuse/Bellatrix, Belt, Rigel/Saiph (J2000).",
};

const CASSIOPEIA: Raw = {
  name: "Cassiopeia",
  iau: "CAS",
  stars: ["Caph β", "Schedar α", "γ", "Ruchbah δ", "Segin ε"],
  radec: [
    [0.8, 59.15],
    [10.13, 56.54],
    [15.66, 60.72],
    [23.93, 60.23],
    [28.6, 63.67],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ],
  src: "IAU Cassiopeia; the classic W of Caph–Schedar–γ–Ruchbah–Segin (J2000).",
};

const URSA_MAJOR: Raw = {
  name: "Big Dipper",
  iau: "UMa",
  stars: ["Alkaid η", "Mizar ζ", "Alioth ε", "Megrez δ", "Phecda γ", "Merak β", "Dubhe α"],
  radec: [
    [206.88, 49.31],
    [200.98, 54.93],
    [193.51, 55.96],
    [183.86, 57.03],
    [178.46, 53.69],
    [165.46, 56.38],
    [165.93, 61.75],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 3],
  ],
  src: "IAU Ursa Major; Big Dipper bowl Dubhe–Merak–Phecda–Megrez + handle Megrez–Alioth–Mizar–Alkaid (J2000).",
};

const CYGNUS: Raw = {
  name: "Cygnus",
  iau: "CYG",
  stars: ["Deneb α", "Sadr γ", "Albireo β", "δ", "ε", "ι"],
  radec: [
    [310.36, 45.28],
    [305.56, 40.26],
    [292.68, 27.96],
    [296.24, 45.13],
    [308.72, 33.97],
    [316.53, 51.73],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [0, 5],
  ],
  src: "IAU Cygnus; Northern Cross spine Deneb–Sadr–Albireo + wings δ/ε and tail ι (J2000).",
};

const SCORPIUS: Raw = {
  name: "Scorpius",
  iau: "SCO",
  stars: ["θ", "η", "ζ", "μ", "ε", "Antares α", "σ", "τ"],
  radec: [
    [257.59, -42.99],
    [252.55, -43.31],
    [254.63, -42.3],
    [242.2, -38.05],
    [243.48, -19.3],
    [247.35, -26.43],
    [246.26, -25.28],
    [247.28, -28.21],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ],
  src: "IAU Scorpius; stinger θ–η–ζ–μ–ε hook through the head σ–τ past Antares (J2000).",
};

const LEO: Raw = {
  name: "Leo",
  iau: "LEO",
  stars: ["Regulus α", "η", "γ", "ζ", "μ", "ε", "δ", "β", "θ"],
  radec: [
    [152.09, 11.97],
    [147.26, 16.76],
    [158.2, 19.84],
    [159.55, 23.42],
    [148.55, 26.01],
    [145.05, 23.77],
    [181.04, 20.52],
    [177.27, 14.57],
    [172.64, 15.42],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [6, 7],
    [7, 8],
    [8, 0],
  ],
  src: "IAU Leo; Sickle Regulus–η–γ–ζ–μ–ε + hind triangle δ–β–θ–Regulus (J2000).",
};

const AQUILA: Raw = {
  name: "Aquila",
  iau: "AQL",
  stars: ["Altair α", "β", "γ", "δ", "θ", "η"],
  radec: [
    [297.7, 8.87],
    [293.16, 6.42],
    [289.88, 10.61],
    [288.03, 3.88],
    [300.65, -0.85],
    [305.54, 1.13],
  ],
  edges: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ],
  src: "IAU Aquila; Altair mountain with β/γ/δ/θ/η spread (J2000).",
};

const LYRA: Raw = {
  name: "Lyra",
  iau: "LYR",
  stars: ["Vega α", "ζ", "ε", "δ", "β", "γ"],
  radec: [
    [279.23, 38.78],
    [281.21, 37.61],
    [281.39, 39.67],
    [280.71, 37.01],
    [282.52, 33.36],
    [284.76, 32.69],
  ],
  edges: [
    [0, 1],
    [1, 3],
    [3, 2],
    [2, 1],
    [0, 3],
    [4, 5],
  ],
  src: "IAU Lyra; Vega joined to the ζ–ε–δ parallelogram + β–γ tail (J2000).",
};

const PEGASUS: Raw = {
  name: "Pegasus",
  iau: "PEG",
  stars: ["Markab α", "Scheat β", "Alpheratz α And", "Algenib γ", "ε", "ζ"],
  radec: [
    [346.62, 15.21],
    [346.91, 28.08],
    [2.1, 29.09],
    [3.31, 15.18],
    [333.66, 9.89],
    [336.97, 10.83],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 0],
  ],
  src: "IAU Pegasus; Great Square Markab–Scheat–Alpheratz–Algenib + attached ε–ζ chain (J2000).",
};

const PERSEUS: Raw = {
  name: "Perseus",
  iau: "PER",
  stars: ["β", "Mirfak α", "δ", "ε", "ζ", "η", "γ", "θ", "ι", "κ"],
  radec: [
    [47.04, 40.96],
    [51.08, 49.86],
    [55.91, 47.71],
    [57.43, 40.01],
    [57.82, 31.88],
    [63.59, 55.9],
    [46.14, 53.69],
    [43.55, 49.26],
    [58.42, 49.28],
    [47.66, 44.86],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 6],
    [6, 7],
  ],
  src: "IAU Perseus; Mirfak hub down the δ–ε–ζ arm + γ–θ spur, β base (J2000).",
};

const CANIS_MAJOR: Raw = {
  name: "Canis Major",
  iau: "CMa",
  stars: ["Sirius α", "β", "γ", "δ", "ε", "ζ"],
  radec: [
    [101.29, -16.72],
    [98.34, -17.54],
    [108.19, -15.63],
    [100.58, -26.3],
    [104.66, -28.97],
    [95.68, -30.06],
  ],
  edges: [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
  src: "IAU Canis Major; Sirius head with the β–γ–δ body and ζ tail (J2000).",
};

const SAGITTARIUS: Raw = {
  name: "Sagittarius",
  iau: "SGR",
  stars: ["λ", "γ", "δ", "ε", "ζ", "φ", "σ", "τ"],
  radec: [
    [272.19, -25.42],
    [276.99, -30.42],
    [304.3, -29.83],
    [305.58, -34.38],
    [302.34, -29.83],
    [304.41, -26.92],
    [301.27, -26.3],
    [302.92, -27.83],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 5],
    [5, 6],
    [6, 7],
  ],
  src: "IAU Sagittarius; teapot lid γ–δ, body δ–ε–ζ, spout φ–σ handle (J2000).",
};

export const CONSTELLATIONS: Constellation[] = [
  make(ORION),
  make(CASSIOPEIA),
  make(URSA_MAJOR),
  make(CYGNUS),
  make(SCORPIUS),
  make(LEO),
  make(AQUILA),
  make(LYRA),
  make(PEGASUS),
  make(PERSEUS),
  make(CANIS_MAJOR),
  make(SAGITTARIUS),
];

export const MAX_CONSTELLATION_VERTS = Math.max(...CONSTELLATIONS.map((c) => c.vertices.length));
export const MAX_CONSTELLATION_EDGES = Math.max(...CONSTELLATIONS.map((c) => c.edges.length));