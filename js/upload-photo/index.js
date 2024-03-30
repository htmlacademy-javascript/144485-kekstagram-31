import {toggleClass} from '../util';
import {imgUploadInput, imgUpoadOverlay, imgUploadancel, effectsPreview, effectLevelSliderParrent, uploaPreviewImage, FILE_TYPES} from './uploadPhotoVariables';
import {inputTextHashtag, commentForm, imgUploadForm} from '../validation-form';
import {onShowErrorGetData } from '../api/secondary-functions';

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

const onOpenChangePhoto = () => {
  toggleClass(imgUpoadOverlay);
  effectLevelSliderParrent.classList.add('hidden');
  document.addEventListener('keydown', onCloseChangePhotoEsc);
  imgUploadancel.addEventListener('click', onCloseChangePhoto);
};

const selectImage = () => {
  const selectedFile = imgUploadInput.files[0];
  const fileName = selectedFile.name.toLowerCase();
  const fileUrl = URL.createObjectURL(selectedFile);
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (!matches) {
    onShowErrorGetData('Неверный тип файла');
    return;
  }

  uploaPreviewImage.src = fileUrl;
  effectsPreview.forEach((element) => {
    element.style.backgroundImage = `url(${fileUrl})`;
  });

  onOpenChangePhoto();
};

const onOpenChangePhotoListener = () => {
  imgUploadInput.addEventListener('change', selectImage);
};

export {onOpenChangePhotoListener, onCloseChangePhoto, onCloseChangePhotoEsc};
