export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') throw TypeError('Code has to be a string.');
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') throw Typeerror('Name has to be a string.');
    this._name = name;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());