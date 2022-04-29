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

const keyifyArrayOfObjects = (aliasString, superheroes) => {
  let groupBySuperHeroes = superheroes.reduce((groupedBy, currentHero) => {
    let alias = currentHero[aliasString];
    if (groupedBy[alias] == null) groupedBy[alias] = {};
    groupedBy[alias] = { ...currentHero };
    console.log(groupedBy);
    return groupedBy;
  }, {});
  return groupBySuperHeroes;
};

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

const inYourBudget = (maxPrice, itemsArray) => {
  let listItems = itemsArray
    .filter((item) => maxPrice > item.price)
    .map((x) => x.item);
  return listItems;
};

const separateAndReturnNames = (superheroes, compareString, len) => {
  // let updatedHero;

  let lastNameArray = superheroes
    .map((hero) => {
      let firstName = hero.name.split(' ').slice(0, 1).join(' ');
      let lastName = hero.name.split(' ').slice(-1).join(' ');
      let newObject = { ...hero, firstName, lastName };
      return newObject;
    })
    .filter((hero) => {
      let finalDecision;
      if (compareString === 'lastName') {
        if (hero.lastName.length <= len) finalDecision = true;
        else finalDecision = false;
      } else {
        if (hero.firstName.length <= len) finalDecision = true;
        else finalDecision = false;
      }
      return finalDecision;
    })
    .map((hero) => {
      if (compareString === 'lastName') {
        return hero.lastName;
      } else return hero.firstName;
    });
  return lastNameArray;
};

const priorityTodoDuration = (todoArray) => {
  let finalvalue = todoArray
    .filter((todo) => todo.priority === 'high')
    .reduce((previousValue, currentValue) => {
      previousValue += currentValue.duration;
      return previousValue;
    }, 0);
  return finalvalue;
};
