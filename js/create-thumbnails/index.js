import {photoItems} from '../generate-data';
import {onOpenBigPicture } from '../show-large-picture';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');
const createPhotoUsers = photoItems();

const addPhotoThumbnailsUsers = () => {
  const listFragmentPhoto = document.createDocumentFragment();

  createPhotoUsers.forEach((element) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    const pictureImage = pictureItem.querySelector('.picture__img');
    pictureImage.dataset.id = element.id;
    pictureImage.src = element.url;
    pictureImage.alt = element.description;
    pictureItem.querySelector('.picture__likes').textContent = element.likes;
    pictureItem.querySelector('.picture__comments').textContent = element.comments.length;
    listFragmentPhoto.appendChild(pictureItem);
  });

  return pictureList.appendChild(listFragmentPhoto);
};

pictureList.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.closest('.picture')) {
    evt.preventDefault();
    const elementPhoto = createPhotoUsers.find((photo) => photo.id === Number(target.dataset.id));
    onOpenBigPicture(elementPhoto);
  }
});

export {addPhotoThumbnailsUsers};
