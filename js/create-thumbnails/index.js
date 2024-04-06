import {onOpenBigPicture } from '../show-large-picture';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

const removePhoto = () => {
  const parentElement = document.querySelector('.pictures');
  const allPicture = parentElement.querySelectorAll('.picture');
  allPicture.forEach((element) => element.remove());
};

const addPhotoThumbnailsUsers = (photoUsers) => {
  const listFragmentPhoto = document.createDocumentFragment();
  removePhoto();
  photoUsers.forEach((element) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    const pictureImage = pictureItem.querySelector('.picture__img');
    pictureImage.dataset.id = element.id;
    pictureImage.src = element.url;
    pictureImage.alt = element.description;
    pictureItem.querySelector('.picture__likes').textContent = element.likes;
    pictureItem.querySelector('.picture__comments').textContent = element.comments.length;
    listFragmentPhoto.append(pictureItem);
  });

  return pictureList.append(listFragmentPhoto);
};

const elementPhotoListener = (photoUsers) => {
  pictureList.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.closest('.picture')) {
      evt.preventDefault();
      const elementPhoto = photoUsers.find((photo) => photo.id === Number(target.dataset.id));
      onOpenBigPicture(elementPhoto);
    }
  });
};

export {addPhotoThumbnailsUsers , elementPhotoListener};
