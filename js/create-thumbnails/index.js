import {photoItems} from '../generate-data';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');
const createPhotoUsers = photoItems();
const ListFragmentPhoto = document.createDocumentFragment();

createPhotoUsers.forEach(({url, description,likes,comments}) => {
  const pictureItem = pictureTemplate.cloneNode(true);
  pictureItem.querySelector('.picture__img').src = url;
  pictureItem.querySelector('.picture__img').alt = description;
  pictureItem.querySelector('.picture__likes').textContent = likes;
  pictureItem.querySelector('.picture__comments').textContent = comments.length;
  ListFragmentPhoto.appendChild(pictureItem);
});

export const addPhotoThumbnailsUsers = () => pictureList.appendChild(ListFragmentPhoto);
