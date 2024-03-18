import {toggleClass} from '../util';
import {imgUploadInput, imgUpoadOverlay, imgUploadancel} from './uploadPhotoVariables';
import {inputTextHashtag, commentForm} from '../validationForm';

const onCloseChangePhoto = () => {
  toggleClass(imgUpoadOverlay, false);
  imgUploadInput.value = '';
  document.removeEventListener('keydown', onCloseChangePhotoEsc);
};

function onCloseChangePhotoEsc(evt){
  if (evt.key === 'Escape' && document.activeElement === inputTextHashtag) {
    evt.stopPropagation();
  } else if (evt.key === 'Escape' && document.activeElement === commentForm){
    evt.stopPropagation();
  } else if(evt.key === 'Escape'){
    evt.preventDefault();
    onCloseChangePhoto();
  }

}

const onOpenChangePhoto = () => {
  toggleClass(imgUpoadOverlay);
};

document.addEventListener('keydown', onCloseChangePhotoEsc);
imgUploadInput.addEventListener('change', onOpenChangePhoto);
imgUploadancel.addEventListener('click', onCloseChangePhoto);

export {onOpenChangePhoto};
