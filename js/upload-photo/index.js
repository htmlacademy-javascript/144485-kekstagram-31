import {toggleClass} from '../util';
import {imgUploadInput, imgUpoadOverlay, imgUploadancel} from './uploadPhotoVariables';
import {inputTextHashtag, commentForm} from '../validation-form';

const effectLevelSliderParrent = document.querySelector('.img-upload__effect-level');

const onCloseChangePhoto = () => {
  toggleClass(imgUpoadOverlay, false);
  imgUploadInput.value = '';
  document.removeEventListener('keydown', onCloseChangePhotoEsc);
};

function onCloseChangePhotoEsc(evt){
  if (evt.key === 'Escape' && !(document.activeElement === inputTextHashtag || document.activeElement === commentForm)) {
    onCloseChangePhoto();
  } else {
    evt.stopPropagation();
  }
}

const onOpenChangePhoto = () => {
  toggleClass(imgUpoadOverlay);
  effectLevelSliderParrent.classList.add('hidden');
  document.addEventListener('keydown', onCloseChangePhotoEsc);
};

imgUploadInput.addEventListener('change', onOpenChangePhoto);
imgUploadancel.addEventListener('click', onCloseChangePhoto);
