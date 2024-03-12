import {photoItems} from '../generate-data';
import {onOpenBigPicture } from '../showLargePicture';


const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');
const createPhotoUsers = photoItems();

const addPhotoThumbnailsUsers = () => {
  const listFragmentPhoto = document.createDocumentFragment();

  createPhotoUsers.forEach((element) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    const pictureImage = pictureItem.querySelector('.picture__img');
    pictureImage.src = element.url;
    pictureImage.alt = element.description;
    pictureItem.querySelector('.picture__likes').textContent = element.likes;
    pictureItem.querySelector('.picture__comments').textContent = element.comments.length;
    listFragmentPhoto.appendChild(pictureItem);

    pictureItem.addEventListener('click', (evt) =>{
      evt.preventDefault();
      onOpenBigPicture(element);
    });

  });
  return pictureList.appendChild(listFragmentPhoto);

};


export {addPhotoThumbnailsUsers};
