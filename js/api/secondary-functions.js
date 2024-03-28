import {onCloseChangePhotoEsc} from '../upload-photo';
import {dataErrorTemplate, sendErrorTemplate, sendFormErrorTemplate, SHOW_ERROR_TIME, submitButtonText} from './get-data-variables';

const submitButton = document.querySelector('.img-upload__submit');


const onSendSuccessClose = () => {
  const successMessage = document.querySelector('.success');
  successMessage.remove();
  document.removeEventListener('click', onClickOutModalSuccess);
};

const onSendErrorMessageClose = () => {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();
  document.removeEventListener('click', onClickOutModalError);
  document.addEventListener('keydown', onCloseChangePhotoEsc);
  document.removeEventListener('keydown', onSendErrorMessageCloseEsc);
};

function onClickOutModalSuccess (evt) {
  if(evt.target.closest('.success__inner')){
    return;
  }
  onSendSuccessClose();
}

function onClickOutModalError (evt) {
  if(evt.target.closest('.error__inner')){
    return;
  }
  onSendErrorMessageClose();
}

function onSendErrorMessageCloseEsc (evt) {
  if (evt.key === 'Escape') {
    onSendErrorMessageClose();
  }
}

function onSendSuccessMessageCloseEsc (evt) {
  if (evt.key === 'Escape') {
    onSendSuccessClose();
  }
}

const onSendErrorMessage = () => {
  const errorFragmentSend = document.createDocumentFragment();
  const errorItemSend = sendErrorTemplate.cloneNode(true);
  const sendButttonClose = errorItemSend.querySelector('.error__button');
  sendButttonClose.addEventListener('click', onSendErrorMessageClose);
  errorFragmentSend.append(errorItemSend);
  document.body.append(errorFragmentSend);
  document.addEventListener('keydown', onSendErrorMessageCloseEsc);
  document.addEventListener('click', onClickOutModalError);
  document.removeEventListener('keydown', onCloseChangePhotoEsc);
};

const onShowErrorGetData = () => {
  const errorFragment = document.createDocumentFragment();
  const errorItem = dataErrorTemplate.cloneNode(true);
  errorFragment.append(errorItem);
  document.body.append(errorFragment);
  const dataError = document.querySelector('.data-error');

  setTimeout(() => {
    dataError.remove();
  }, SHOW_ERROR_TIME);
};

const onSendSuccessMessage = () => {
  const errorFragmentSend = document.createDocumentFragment();
  const errorItemSend = sendFormErrorTemplate.cloneNode(true);
  const closeButton = errorItemSend.querySelector('.success__button');
  errorFragmentSend.append(errorItemSend);
  document.body.append(errorFragmentSend);
  closeButton.addEventListener('click', onSendSuccessClose);
  document.addEventListener('click', onClickOutModalSuccess);
  document.addEventListener('keydown', onSendSuccessMessageCloseEsc);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = submitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = submitButtonText.IDLE;
};

export {onSendErrorMessage, onShowErrorGetData, onSendSuccessMessage, onSendSuccessClose, blockSubmitButton, unblockSubmitButton};
