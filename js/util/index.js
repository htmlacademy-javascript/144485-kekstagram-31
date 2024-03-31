const TIMEOUT_DELAY_DEBOUNCE = 500;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
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

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY_DEBOUNCE) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInteger, createId, getRandomArrayElement, toggleClass, debounce};
