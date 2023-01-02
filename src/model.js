class Element {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

Element.prototype.toString = function () {
  return this.symbol;
};

export { Element };
