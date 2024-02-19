// function stringLength(string, length){
//   return string.length <= length;
// }

const stringLength = (string, length) => string.length <= length;

// Тест функции

// eslint-disable-next-line
console.log(stringLength('Кекс', 3));

function palindrome(string){
  const newString = string.replaceAll(' ','').toLowerCase();
  let total = '';
  for (let i = newString.length - 1; i >= 0; i--){
    total += newString.at(i);
  }
  return total === newString;
}

// Тест функции

/* eslint-disable */
console.log(palindrome("Топот"));
console.log(palindrome('Лёша на полке клопа нашёл'));
/* eslint-enable */

function getNumber(string){
  if(typeof string === 'string'){
    let newString = '';
    for(let i = 0; i < string.length; i++){
      if(!Number.isNaN(parseInt(string.at(i), 10))){
        newString += string.at(i);
      }
    }
    if(newString === ''){
      return NaN;
    }

    return parseInt(newString, 10);

  }else if(typeof string === 'number'){
    let newString = '';
    const numberString = string.toString();
    for(let i = 0; i < numberString.length; i++){
      if(!Number.isNaN(parseInt(numberString.at(i), 10))){
        newString += numberString.at(i);
      }
    }
    if(newString === ''){
      return NaN;
    }

    return parseInt(newString, 10);

  }else{
    return NaN;
  }
}

// Тест функции

/* eslint-disable */
console.log(getNumber('2023 год')); // 2023
console.log(getNumber('ECMAScript 2022')); // 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007')); // 7
console.log(getNumber('а я томат')); // NaN
console.log(getNumber(" ")); //NaN
console.log(getNumber(-1)); // 1
console.log(getNumber(1.5)); // 15
/* eslint-enable */
