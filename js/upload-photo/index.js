import {toggleClass, isEscapeKey} from '../util';
import {pristine} from '../validation-form';
import {imgUploadInput, imgUpoadOverlay, imgUploadancel, effectsPreview, effectLevelSliderParrent, uploadPreviewImage, FILE_TYPES} from './uploadPhotoVariables';
import {inputTextHashtag, commentForm, imgUploadForm} from '../validation-form';
import {onShowErrorGetData } from '../api/secondary-functions';

const onCloseChangePhoto = () => {
  pristine.reset();
  toggleClass(imgUpoadOverlay, false);
  imgUploadForm.reset();
  uploadPreviewImage.style.removeProperty('filter');
  uploadPreviewImage.style.removeProperty('transform');
  document.removeEventListener('keydown', onCloseChangePhotoEsc);
  imgUploadancel.removeEventListener('click', onCloseChangePhoto);
};

function onCloseChangePhotoEsc(evt){
  if (isEscapeKey && !(document.activeElement === inputTextHashtag || document.activeElement === commentForm)) {
    onCloseChangePhoto();
  } else {
    evt.stopPropagation();
  }
}

const onOpenChangePhoto = () => {
  toggleClass(imgUpoadOverlay);
  effectLevelSliderParrent.classList.add('hidden');
  document.addEventListener('keydown', onCloseChangePhotoEsc);
  imgUploadancel.addEventListener('click', onCloseChangePhoto);
};

const onSelectImage = () => {
  const selectedFile = imgUploadInput.files[0];
  const fileName = selectedFile.name.toLowerCase();
  const fileUrl = URL.createObjectURL(selectedFile);
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (!matches) {
    onShowErrorGetData('Неверный тип файла');
    return;
  }

  uploadPreviewImage.src = fileUrl;
  effectsPreview.forEach((element) => {
    element.style.backgroundImage = `url(${fileUrl})`;
  });

  onOpenChangePhoto();
};

const onOpenChangePhotoListener = () => {
  imgUploadInput.addEventListener('change', onSelectImage);
};

export {onOpenChangePhotoListener, onCloseChangePhoto, onCloseChangePhotoEsc};
