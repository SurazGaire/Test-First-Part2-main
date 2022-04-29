/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
  this.arr = [];
  this.total = 0;
}
RPNCalculator.prototype.push = function (num) {
  return this.arr.push(num);
};

RPNCalculator.prototype.value = function () {
  return this.total;
};

RPNCalculator.prototype.plus = function () {
  if (this.arr.length >= 2) {
    let firstElem = this.arr.pop();
    let secElem = this.arr.pop();
    this.total = firstElem + secElem;
    this.arr.push(this.total);
  } else {
    throw 'rpnCalculatorInstance is empty';
  }
};

RPNCalculator.prototype.minus = function () {
  if (this.arr.length >= 2) {
    let firstElem = this.arr.pop();
    let secElem = this.arr.pop();
    this.total = secElem - firstElem;
    this.arr.push(this.total);
  } else {
    throw 'rpnCalculatorInstance is empty';
  }
};

RPNCalculator.prototype.times = function () {
  if (this.arr.length >= 2) {
    let firstElem = this.arr.pop();
    let secElem = this.arr.pop();
    this.total = firstElem * secElem;
    this.arr.push(this.total);
  } else {
    throw 'rpnCalculatorInstance is empty';
  }
};

RPNCalculator.prototype.divide = function () {
  if (this.arr.length >= 2) {
    let firstElem = this.arr.pop();
    let secElem = this.arr.pop();
    this.total = secElem / firstElem;
    this.arr.push(this.total);
  } else {
    throw 'rpnCalculatorInstance is empty';
  }
};
