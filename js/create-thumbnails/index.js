import {photoItems} from '../generate-data';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');
const createPhotoUsers = photoItems();

const addPhotoThumbnailsUsers = () => {
  const listFragmentPhoto = document.createDocumentFragment();

  createPhotoUsers.forEach(({url, description, likes, comments}) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    const pictureImage = pictureItem.querySelector('.picture__img');
    pictureImage.src = url;
    pictureImage.alt = description;
    pictureItem.querySelector('.picture__likes').textContent = likes;
    pictureItem.querySelector('.picture__comments').textContent = comments.length;
    listFragmentPhoto.appendChild(pictureItem);
  });
  return pictureList.appendChild(listFragmentPhoto);

};
export {addPhotoThumbnailsUsers};
