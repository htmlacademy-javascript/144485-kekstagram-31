const stringLength = (string, length) => string.length <= length;

// eslint-disable-next-line
// console.log(stringLength('Кекс', 3));

const palindrome = (string) => {
  const newString = string.replaceAll(' ','').toLowerCase();
  let total = '';
  for (let i = newString.length - 1; i >= 0; i--){
    total += newString.at(i);
  }
  return total === newString;
};

/* eslint-disable */
// console.log(palindrome("Топот"));
// console.log(palindrome('Лёша на полке клопа нашёл'));
/* eslint-enable */

const getNumber = (str) => {
  const stringToCheck = str.toString();
  let newString = '';
  for(let i = 0; i < stringToCheck.length; i++){
    if(!Number.isNaN(parseInt(stringToCheck[i], 10))) {
      newString += stringToCheck[i];
    }
  }
  return newString ? +newString : NaN;
};

/* eslint-disable */
// console.log(getNumber('2023 год')); // 2023
// console.log(getNumber('ECMAScript 2022')); // 2022
// console.log(getNumber('1 кефир, 0.5 батона')); // 105
// console.log(getNumber('агент 007')); // 7
// console.log(getNumber('а я томат')); // NaN
// console.log(getNumber(" ")); //NaN
// console.log(getNumber(-1)); // 1
// console.log(getNumber(1.5)); // 15
/* eslint-enable */

stringLength();
palindrome();
getNumber();
