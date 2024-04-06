import {toggleClass, isEscapeKey} from '../util';
import {pristine, onValidateListener} from '../validation-form';
import {imgUploadInput, imgUpoadOverlay, imgUploadancel, effectsPreview, effectLevelSliderParrent, uploadPreviewImage, FILE_TYPES, scaleControlBigger, scaleControlSmaller} from './uploadPhotoVariables';
import {inputTextHashtag, commentForm, imgUploadForm} from '../validation-form';
import {onShowErrorGetData } from '../api/secondary-functions';
import {onIncreaseScale, onDecreaseScale} from '../add-effects-scale';

const onCloseChangePhoto = () => {
  pristine.reset();
  toggleClass(imgUpoadOverlay, false);
  imgUploadForm.reset();
  uploadPreviewImage.style.removeProperty('filter');
  uploadPreviewImage.style.removeProperty('transform');
  document.removeEventListener('keydown', onCloseChangePhotoEsc);
  imgUploadancel.removeEventListener('click', onCloseChangePhoto);
  imgUploadForm.removeEventListener('submit', onValidateListener);
  scaleControlBigger.removeEventListener('click', onIncreaseScale);
  scaleControlSmaller.removeEventListener('click', onDecreaseScale);
};

function onCloseChangePhotoEsc(evt){
  if (isEscapeKey(evt) && !(document.activeElement === inputTextHashtag || document.activeElement === commentForm)) {
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
  imgUploadForm.addEventListener('submit', onValidateListener);
  scaleControlBigger.addEventListener('click', onIncreaseScale);
  scaleControlSmaller.addEventListener('click', onDecreaseScale);
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
