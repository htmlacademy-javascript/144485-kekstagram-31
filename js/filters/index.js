import {filtersControlPanel, sortFunc, buttonValue, RANDOM_PHOTO_LIMIT} from './filter-variables';

const showFilterPanel = () => {
  filtersControlPanel.classList.remove('img-filters--inactive');
};

const setActiveFilter = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const listenerButtonsFilter = (photo, addPhotoThumbnails) => {
  filtersControlPanel.addEventListener('click', (evt) => {
    const target = evt.target;
    if(target.closest('.img-filters__button')){
      setActiveFilter(target);
      switch (target.id) {
        case buttonValue.random:
          addPhotoThumbnails(photo.toSorted(sortFunc.random).slice(0, RANDOM_PHOTO_LIMIT));
          break;
        case buttonValue.discussed:
          addPhotoThumbnails(photo.toSorted(sortFunc.discussed));
          break;
        default:
          addPhotoThumbnails(photo);
      }
    }
  });
};

export {showFilterPanel, listenerButtonsFilter};
