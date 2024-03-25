import {toggleClass} from '../util';
import {imgUploadInput, imgUpoadOverlay, imgUploadancel} from './uploadPhotoVariables';
import {inputTextHashtag, commentForm, imgUploadForm} from '../validation-form';

const effectsPreview = document.querySelectorAll('.effects__preview');
const effectLevelSliderParrent = document.querySelector('.img-upload__effect-level');
const uploaPreviewImage = document.querySelector('.img-upload__preview img');

const onCloseChangePhoto = () => {
  toggleClass(imgUpoadOverlay, false);
  imgUploadForm.reset();
  uploaPreviewImage.style.removeProperty('filter');
  uploaPreviewImage.style.removeProperty('transform');
  document.removeEventListener('keydown', onCloseChangePhotoEsc);
  imgUploadancel.removeEventListener('click', onCloseChangePhoto);
};

function onCloseChangePhotoEsc(evt){
  if (evt.key === 'Escape' && !(document.activeElement === inputTextHashtag || document.activeElement === commentForm)) {
    onCloseChangePhoto();
  } else {
    evt.stopPropagation();
  }
}

const selectImage = (evt) => {
  const files = evt.target.files;
  const countFiles = files.length;
  const selectedFile = files[0];
  const reader = new FileReader();

  if (!countFiles) {
    return;
  }

  if (!/^image/.test(selectedFile.type)) {
    return;
  }

  reader.readAsDataURL(selectedFile);

  reader.addEventListener('load', (e) => {
    uploaPreviewImage.src = e.target.result;
    effectsPreview.forEach((element) => {
      element.style.backgroundImage = `url(${e.target.result})`;
    });
  });
};

const onOpenChangePhoto = (evt) => {
  toggleClass(imgUpoadOverlay);
  selectImage(evt);
  effectLevelSliderParrent.classList.add('hidden');
  document.addEventListener('keydown', onCloseChangePhotoEsc);
  imgUploadancel.addEventListener('click', onCloseChangePhoto);
};

const onOpenChangePhotoListener = () => {
  imgUploadInput.addEventListener('change', onOpenChangePhoto);
};

export {onOpenChangePhotoListener, onCloseChangePhoto, onCloseChangePhotoEsc};
