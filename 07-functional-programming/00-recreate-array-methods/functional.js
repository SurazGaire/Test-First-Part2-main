/* eslint-disable no-unused-vars */
function forEach(anArray) {
  for (let i = 0; i < anArray.length; i++) {
    console.log(anArray[i]);
  }
}

function map(anArray, doubler) {
  //   console.log(doubler);
  const newArray = [];
  for (let i = 0; i < anArray.length; i++) {
    let currElem = anArray[i];
    let doubledElement = doubler(currElem);
    newArray.push(doubledElement);
  }
  return newArray;
}

const doubler = (num) => {
  return num * 2;
};

function filter(anArray, oddEvenFilter) {
  const newArray = [];
  for (let i = 0; i < anArray.length; i++) {
    let currElem = anArray[i];
    if (oddEvenFilter(currElem)) {
      newArray.push(currElem);
    }
  }
  return newArray;
}

function includes(anArray, element) {
  let isTrueOrfalse;
  let findMatch = 0;
  if (typeof anArray === 'object') {
    for (const key in anArray) {
      currValue = anArray[key];
      if (currValue === element) {
        isTrueOrfalse = true;
        findMatch = 1;
      } else {
        isTrueOrfalse = false;
      }
      if (findMatch === 1) {
        break;
      }
    }
  } else {
    for (let i = 0; i < anArray.length; i++) {
      let currElem = anArray[i];
      if (currElem === element) {
        isTrueOrfalse = true;
        findMatch = 1;
      } else {
        isTrueOrfalse = false;
      }
      if (findMatch === 1) {
        break;
      }
    }
  }
  return isTrueOrfalse;
}

const countWords = (initialNumber, aStr) => {
  let finalCount = initialNumber;
  const wordsArray = aStr.split(' ');
  const wordsCount = wordsArray.length;
  finalCount += wordsCount;
  return finalCount;
};

const reduce = (anArray, initialValue, callback) => {
  let finalValue = initialValue;
  for (let i = 0; i < anArray.length; i++) {
    let currElem = anArray[i];
    let addedValue = callback(finalValue, currElem);
    finalValue = addedValue;
  }
  return finalValue;
};

const sum = (anArray) => {
  return reduce(anArray, 0, (a, b) => a + b);
};

const every = (anArray, callback) => {
  //   let reduceArray = reduce(anArray, [], callback);
  //   console.log(reduceArray);
  let finalValue;
  let misMatch = 0;
  if (anArray.length === 0) {
    finalValue = true;
  }
  for (i = 0; i < anArray.length; i++) {
    currElem = anArray[i];
    console.log(currElem);
    const isEven = callback(currElem);
    if (isEven) {
      finalValue = true;
    } else {
      finalValue = false;
      misMatch = 1;
    }
    if (misMatch === 1) {
      break;
    }
  }
  return finalValue;
};

const some = (anArray, callback) => {
  //   let reduceArray = reduce(anArray, [], callback);
  //   console.log(reduceArray);
  let finalValue;
  let dataMatch = 0;
  if (anArray.length === 0) {
    finalValue = false;
  }
  for (i = 0; i < anArray.length; i++) {
    currElem = anArray[i];
    const isEven = callback(currElem);
    if (isEven) {
      finalValue = true;
      dataMatch = 1;
    } else {
      finalValue = false;
    }
    if (dataMatch === 1) {
      break;
    }
  }
  return finalValue;
};
