/* eslint-disable no-unused-vars */

function concatString() {
  const array = Array.from(arguments);
  const combineArray = array.join('');
  return combineArray;
}

function yourFunctionRunner() {
  const arrayFunction = [...arguments];
  const allStrings = arrayFunction.map((farray) => farray());
  return allStrings.join('');
}

const makeAdder = (num1) => {
  let initialNumber = num1;
  const returnedFunction = function (num2) {
    return initialNumber + num2;
  };
  return returnedFunction;
};

function once(someFunction) {
  let firstTime = 0;
  const returnedFunction = () => {
    firstTime = firstTime + 1;
    if (firstTime === 1) return someFunction();
    return 'the function has already been called...';
  };
  return returnedFunction;
}

function createObjectWithClosures() {
  this.currentValue = 11;
  return {
    oneIncrementer: () => {
      return this.getValue;
    },
    tensIncrementer: () => {
      return this.getValue;
    },
    getValue: () => {
      return this.currentValue;
    },
    setValue: (someNum) => {
      this.currentValue = someNum;
    },
  };
}

function dontSpillTheBeans(secretValue) {
  this.changingSecret = secretValue;
  return {
    getSecret: () => {
      return this.changingSecret;
    },
    setSecret: (someSecret) => {
      this.changingSecret = someSecret;
    },
  };
}
