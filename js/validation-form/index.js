import {sendData} from '../api';
import {onSendSuccessMessage, onSendErrorMessage, blockSubmitButton, unblockSubmitButton} from '../api/secondary-functions';
import {onCloseChangePhoto} from '../upload-photo';

export const imgUploadForm = document.querySelector('.img-upload__form');
export const inputTextHashtag = imgUploadForm.querySelector('.text__hashtags');
export const commentForm = imgUploadForm.querySelector('.text__description');

const HASHTAGS_LIMIT = 5;
const COMMENTS_LIMIT = 140;
const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

const onValidateCommentForm = (value) => value.length <= COMMENTS_LIMIT;
const createHashtagArray = () => inputTextHashtag.value.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');

const onValidateHashtagRegex = () => {
  const arrayHashtag = createHashtagArray();
  if (arrayHashtag.length === 1 && arrayHashtag[0] === '') {
    return true;
  }
  return arrayHashtag.every((item) => hashtagRegex.test(item));
};

const onUniqueHashtag = () => {
  const arrayHashtag = createHashtagArray();
  return arrayHashtag.length === new Set(arrayHashtag).size;
};

const onHashtagLimitLength = () => {
  const arrayHashtag = createHashtagArray();
  return arrayHashtag.length <= HASHTAGS_LIMIT;
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(inputTextHashtag, onValidateHashtagRegex, 'Введён невалидный хэштег');
pristine.addValidator(inputTextHashtag, onUniqueHashtag, 'Хэштеги повторяются');
pristine.addValidator(inputTextHashtag, onHashtagLimitLength, 'Превышено количество хэштегов');
pristine.addValidator(commentForm, onValidateCommentForm, 'Длина комментария больше 140 символов');

const validateListener = () => {

  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSendSuccessMessage();
          onCloseChangePhoto();
        })
        .catch(() => {
          onSendErrorMessage();
        }
        )
        .finally(() => {
          unblockSubmitButton();
        }
        );
    }
  });
};

export {validateListener, pristine};
