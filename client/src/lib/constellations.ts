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
    [81.28, 6.35],
    [88.79, 7.41],
    [83, -0.3],
    [84.05, -1.2],
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
  src: "IAU Orion (Stellarium modern_iau lines); Betelgeuse–Bellatrix shoulders, Belt, Rigel–Saiph feet. J2000 from HYG v38.",
};

const CASSIOPEIA: Raw = {
  name: "Cassiopeia",
  iau: "CAS",
  stars: ["Caph β", "Schedar α", "γ", "Ruchbah δ", "Segin ε"],
  radec: [
    [2.29, 59.15],
    [10.13, 56.54],
    [14.18, 60.72],
    [21.45, 60.24],
    [28.6, 63.67],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ],
  src: "IAU Cassiopeia (Stellarium modern_iau lines); the classic W of Caph–Schedar–γ–Ruchbah–Segin. J2000 from HYG v38.",
};

const BIG_DIPPER: Raw = {
  name: "Big Dipper",
  iau: "UMa",
  stars: ["Alkaid η", "Mizar ζ", "Alioth ε", "Megrez δ", "Phecda γ", "Merak β", "Dubhe α"],
  radec: [
    [206.89, 49.31],
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
  src: "IAU Ursa Major (Stellarium modern_iau lines); Big Dipper bowl Dubhe–Merak–Phecda–Megrez + handle Megrez–Alioth–Mizar–Alkaid. J2000 from HYG v38.",
};

const CYGNUS: Raw = {
  name: "Cygnus",
  iau: "CYG",
  stars: ["Deneb α", "Sadr γ", "Albireo β", "δ", "ε"],
  radec: [
    [310.36, 45.28],
    [305.56, 40.26],
    [292.68, 27.96],
    [296.24, 45.13],
    [311.55, 33.97],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  src: "IAU Cygnus (Stellarium modern_iau lines); Northern Cross spine Deneb–Sadr–Albireo + wings δ/ε. J2000 from HYG v38.",
};

const SCORPIUS: Raw = {
  name: "Scorpius",
  iau: "SCO",
  stars: ["Acrab β", "Dschubba δ", "Fang π", "Alniyat σ", "Antares α", "τ", "Larawag ε", "η", "Sargas θ"],
  radec: [
    [241.36, -19.81],
    [240.08, -22.62],
    [239.71, -26.11],
    [245.3, -25.59],
    [247.35, -26.43],
    [248.97, -28.22],
    [252.54, -34.29],
    [258.04, -43.24],
    [264.33, -43],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
  ],
  src: "IAU Scorpius (Stellarium modern_iau lines); claw stars β–δ–π, hook σ–Antares–τ–ε, stinger η–θ. J2000 from HYG v38.",
};

const LEO: Raw = {
  name: "Leo",
  iau: "LEO",
  stars: ["Regulus α", "η", "Algieba γ", "Adhafera ζ", "Rasalas μ", "ε", "Zosma δ", "Denebola β", "Chertan θ"],
  radec: [
    [152.09, 11.97],
    [151.83, 16.76],
    [154.99, 19.84],
    [154.17, 23.42],
    [148.19, 26.01],
    [146.46, 23.77],
    [168.53, 20.52],
    [177.26, 14.57],
    [168.56, 15.43],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [2, 6],
    [6, 7],
    [7, 8],
  ],
  src: "IAU Leo (Stellarium modern_iau lines); Sickle Regulus–η–Algieba–Adhafera–Rasalas–ε + hind Zosma–Denebola–Chertan. J2000 from HYG v38.",
};

const AQUILA: Raw = {
  name: "Aquila",
  iau: "AQL",
  stars: ["Altair α", "Alshain β", "Tarazed γ", "δ", "θ", "η"],
  radec: [
    [297.7, 8.87],
    [298.83, 6.41],
    [296.56, 10.61],
    [291.37, 3.11],
    [302.83, -0.82],
    [298.12, 1.01],
  ],
  edges: [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 5],
    [5, 4],
  ],
  src: "IAU Aquila (Stellarium modern_iau lines); Altair bar β–α–γ then δ–η–θ wing chain. J2000 from HYG v38.",
};

const LYRA: Raw = {
  name: "Lyra",
  iau: "LYR",
  stars: ["Vega α", "ε", "ζ", "δ", "Sheliak β", "Sulafat γ"],
  radec: [
    [279.23, 38.78],
    [281.08, 39.67],
    [281.19, 37.61],
    [283.63, 36.9],
    [282.52, 33.36],
    [284.74, 32.69],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 3],
    [3, 5],
    [5, 4],
    [4, 2],
  ],
  src: "IAU Lyra (Stellarium modern_iau lines); Vega–ε–ζ triangle + ζ–δ–γ–β–ζ parallelogram. J2000 from HYG v38.",
};

const PEGASUS: Raw = {
  name: "Pegasus",
  iau: "PEG",
  stars: ["Markab α", "Scheat β", "Alpheratz α And", "Algenib γ", "Enif ε", "Homam ζ"],
  radec: [
    [346.19, 15.21],
    [345.94, 28.08],
    [362.1, 29.09],
    [363.31, 15.18],
    [326.05, 9.88],
    [340.37, 10.83],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 0],
  ],
  src: "IAU Pegasus (Stellarium modern_iau lines); Great Square Markab–Scheat–Alpheratz–Algenib + Enif–Homam–Markab chain. J2000 from HYG v38; RA unwrapped across 0h.",
};

const PERSEUS: Raw = {
  name: "Perseus",
  iau: "PER",
  stars: ["Algol β", "Mirfak α", "δ", "ε", "ζ", "Miram η", "γ", "θ", "ι", "Misam κ"],
  radec: [
    [47.04, 40.96],
    [51.08, 49.86],
    [55.73, 47.79],
    [59.46, 40.01],
    [58.53, 31.88],
    [42.67, 55.9],
    [46.2, 53.51],
    [41.05, 49.23],
    [47.27, 49.61],
    [47.37, 44.86],
  ],
  edges: [
    [1, 6],
    [6, 5],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 8],
    [8, 9],
    [9, 0],
  ],
  src: "IAU Perseus (Stellarium modern_iau lines); Mirfak hub: γ–η spur, δ–ε–ζ arm, ι–κ–Algol chain. J2000 from HYG v38.",
};

const CANIS_MAJOR: Raw = {
  name: "Canis Major",
  iau: "CMa",
  stars: ["Sirius α", "Mirzam β", "Muliphein γ", "Wezen δ", "Adhara ε", "Furud ζ"],
  radec: [
    [101.29, -16.72],
    [95.67, -17.96],
    [105.94, -15.63],
    [107.1, -26.39],
    [104.66, -28.97],
    [95.08, -30.06],
  ],
  edges: [
    [1, 0],
    [0, 2],
    [0, 3],
    [3, 4],
    [1, 4],
    [4, 5],
  ],
  src: "IAU Canis Major (Stellarium modern_iau lines); Sirius head, β–α–δ–ε body, ζ tail. J2000 from HYG v38.",
};

const SAGITTARIUS: Raw = {
  name: "Sagittarius",
  iau: "SGR",
  stars: ["Alnasl γ", "Kaus Media δ", "Kaus Australis ε", "Kaus Borealis λ", "φ", "Nunki σ", "τ", "Ascella ζ"],
  radec: [
    [271.45, -30.42],
    [275.25, -29.83],
    [276.04, -34.38],
    [276.99, -25.42],
    [281.41, -26.99],
    [283.82, -26.3],
    [286.74, -27.67],
    [285.65, -29.88],
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 7],
    [7, 6],
    [6, 5],
    [5, 4],
    [4, 3],
    [3, 1],
  ],
  src: "IAU Sagittarius (Stellarium modern_iau lines); Teapot lid γ–δ–λ, body δ–ε–ζ–τ–σ–φ. J2000 from HYG v38.",
};

export const CONSTELLATIONS: Constellation[] = [
  make(ORION),
  make(CASSIOPEIA),
  make(BIG_DIPPER),
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
