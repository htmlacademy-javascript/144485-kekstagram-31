import {filtersControlPanel, sortFunc, buttonValue, RANDOM_PHOTO_LIMIT} from './filter-variables';
import {debounce} from '../util/index';
import {addPhotoThumbnailsUsers} from '../create-thumbnails';

let puctures = [];
let currentButton = '';

const showFilterPanel = () => {
  filtersControlPanel.classList.remove('img-filters--inactive');
};

const debounceRender = debounce(addPhotoThumbnailsUsers);

const setActiveFilter = (evt) => {
  const target = evt.target;
  const activeButton = document.querySelector('.img-filters__button--active');

  if(!target.matches('button')){
    return;
  }
  if(target === activeButton){
    return;
  }
  activeButton.classList.toggle('img-filters__button--active');
  target.classList.toggle('img-filters__button--active');
  currentButton = target.id;
  filterChange();
};

function filterChange () {
  let addPhotoThumbnails = [];
  switch (currentButton) {
    case buttonValue.random:
      addPhotoThumbnails = puctures.toSorted(sortFunc.random).slice(0, RANDOM_PHOTO_LIMIT);
      break;
    case buttonValue.discussed:
      addPhotoThumbnails = puctures.toSorted(sortFunc.discussed);
      break;
    default:
      addPhotoThumbnails = puctures;
  }

  debounceRender(addPhotoThumbnails);
}

const listenerButtonsFilter = (photos) => {
  filtersControlPanel.addEventListener('click', setActiveFilter);
  showFilterPanel();
  puctures = photos;
};

export {showFilterPanel, listenerButtonsFilter};
