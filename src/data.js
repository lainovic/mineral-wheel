import { Element } from "./model";

const Ca = new Element("Calcium", "Ca");
const Cu = new Element("Copper", "Cu");
const Mn = new Element("Manganese", "Mn");
const Mg = new Element("Magnesium", "Mg");
const I = new Element("Iodine", "I");
const K = new Element("Potassium", "K");
const P = new Element("Phosphorus", "P");
const S = new Element("Sulfur", "S");
const Co = new Element("Cobalt", "Co");
const Zn = new Element("Zinc", "Zn");
const Na = new Element("Sodium", "Na");
const Fe = new Element("Iron", "Fe");

export const elements = {
  [Ca.symbol]: Ca,
  [Cu.symbol]: Cu,
  [Mn.symbol]: Mn,
  [Mg.symbol]: Mg,
  [I.symbol]: I,
  [K.symbol]: K,
  [P.symbol]: P,
  [S.symbol]: S,
  [Co.symbol]: Co,
  [Zn.symbol]: Zn,
  [Na.symbol]: Na,
  [Fe.symbol]: Fe,
};

/* Excess of the key element leads to defficiencies in the value element(s) */
export const excess_to_defficiencies = {
  [Ca.symbol]: [Mn, Mg, I, P, Zn],
  [Cu.symbol]: [Fe, Zn, P],
  [Mn.symbol]: [P, K, Mg],
  [Mg.symbol]: [Ca, P],
  [I.symbol]: [],
  [K.symbol]: [Mn, Fe, Na],
  [P.symbol]: [Mg, Mn, Ca, Fe, Zn],
  [S.symbol]: [Cu, Ca],
  [Co.symbol]: [I, Fe],
  [Zn.symbol]: [Fe, Cu, S],
  [Na.symbol]: [K],
  [Fe.symbol]: [Cu, K, P],
};
