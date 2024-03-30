const filtersControlPanel = document.querySelector('.img-filters');

const showFilterPanel = () => {
  filtersControlPanel.classList.remove('img-filters--inactive');
};

const setActiveFilter = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const compareThumbnails = (photoA, photoB) => {
  const rankA = photoA.comments.length;
  const rankB = photoB.comments.length;
  return rankB - rankA;
};

const getRandomPhoto = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getUniqueRandomPhotos = (arr) => {
  const uniquePhotos = [];
  while (uniquePhotos.length < 10) {
    const randomPhoto = getRandomPhoto(arr);

    if (!uniquePhotos.includes(randomPhoto)) {
      uniquePhotos.push(randomPhoto);
    }
  }
  return uniquePhotos;
};

const removePhoto = () => {
  const parentElement = document.querySelector('.pictures');
  const allPicture = parentElement.querySelectorAll('.picture');
  allPicture.forEach((element) => element.remove());
};

const listenerButtonsFilter = (photo, addPhotoThumbnails) => {
  filtersControlPanel.addEventListener('click', (evt) => {
    const target = evt.target;
    if(target.closest('.img-filters__button')){
      removePhoto();
      setActiveFilter(target);
      if(target.id === 'filter-random'){
        const randomPhoto = getUniqueRandomPhotos(photo);
        addPhotoThumbnails(randomPhoto);
      }else if (target.id === 'filter-discussed'){
        addPhotoThumbnails(photo.slice().sort(compareThumbnails));
      }else{
        addPhotoThumbnails(photo);
      }
    }
  });
};

export {showFilterPanel, listenerButtonsFilter};
