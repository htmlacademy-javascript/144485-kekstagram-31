const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower; // не понимаю эту запись , что тут происходит и для чего.
  return Math.floor(result);
};

const createId = () => {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const toggleClass = (className, isOpened = true) =>{
  className.classList.toggle('hidden', !isOpened);
  document.body.classList.toggle('modal-open');
};

export {getRandomInteger, createId, getRandomArrayElement, toggleClass};
