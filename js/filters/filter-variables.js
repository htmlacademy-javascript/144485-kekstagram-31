const filtersControlPanel = document.querySelector('.img-filters');
const sortFunc = {
  random: () => 0.5 - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length
};
const buttonValue = {
  random: 'filter-random',
  discussed: 'filter-discussed',
};
const RANDOM_PHOTO_LIMIT = 10;

export {filtersControlPanel, sortFunc, buttonValue, RANDOM_PHOTO_LIMIT};
