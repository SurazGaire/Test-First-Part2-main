const indexAndValue = (anArray) => {
  let retArray = anArray.map(function (x, index) {
    let a = { index, value: x };
    return a;
  });
  return retArray;
};

const capitalize = (aStr) => {
  let inCapital = aStr.toUpperCase();
  return inCapital;
};
const swapCase = (someString) => {
  let finalString = '';
  const stringArray = someString.split(' ');
  let finalResult = stringArray.map((word, index) => {
    if (index % 2 === 0) {
      let capitalWord = word.toUpperCase();
      return capitalWord;
    } else {
      return word;
    }
  });
  for (let i = 0; i < finalResult.length; i++) {
    let curElem = finalResult[i];
    finalString += ' ' + curElem;
  }
  return finalString.slice(1);
};

const extensionSearch = (ext, anArray) => {
  let finalArray = anArray.filter((fileName) => fileName.includes(ext));
  console.log(finalArray);

  return finalArray;
};

const getPopulation = (countriesPropertyArray, countryArray) => {
  let population = countriesPropertyArray.reduce(
    (previousValue, currentValue) => {
      if (countryArray.length === 0) {
        previousValue += currentValue.population;
      }
      for (let i = 0; i < countryArray.length; i++) {
        let curElem = countryArray[i];
        if (currentValue.name === curElem) {
          previousValue += currentValue.population;
        }
      }
      return previousValue;
    },
    0
  );
  return population;
};

// const keyifyArrayOfObjects = (alias, superheroes) => {
//   let groupBySuperHeroes = superheroes.reduce((groupedBy, currentHero) => {
//     let alias = currentHero.alias;
//     if (groupedBy[alias] == null) groupedBy[alias] = {};
//     // groupedBy[alias].push(currentHero);
//     return groupedBy;
//   }, {});
//   return groupBySuperHeroes;
// };

const powerLevelAverage = (superheroes) => {
  let averagePowerLevel = superheroes.reduce((previousValue, currentValue) => {
    previousValue += currentValue.powerLevel;

    return previousValue;
  }, 0);
  let average = Math.round(averagePowerLevel / superheroes.length);
  return average;
};

function mapReduce(anArray, someFunction) {
  let reducedArray = anArray.reduce((previousValue, currentValue) => {
    let element = someFunction(currentValue);
    previousValue.push(element);
    return previousValue;
  }, []);
  return reducedArray;
}

function filterReduce(anArray, someFunction) {
  let filterArray = anArray.reduce((previousValue, currentValue) => {
    let element = someFunction(currentValue);
    if (element) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);
  return filterArray;
}
