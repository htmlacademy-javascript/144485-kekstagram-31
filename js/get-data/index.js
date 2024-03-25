import {onCloseChangePhotoEsc} from '../upload-photo';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const sendErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const sendFormErrorTemplate = document.querySelector('#success').content.querySelector('.success');
const SHOW_ERROR_TIME = 5000;

const sendSuccessClose = () => {
  const successMessage = document.querySelector('.success');
  successMessage.remove();
  document.removeEventListener('click', clickOutModalSuccess);
};

const sendErrorMessageClose = () => {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();
  document.removeEventListener('click', clickOutModalError);
  document.addEventListener('keydown', onCloseChangePhotoEsc);
  document.removeEventListener('keydown', sendErrorMessageCloseEsc);
};

function clickOutModalSuccess (evt) {
  if(evt.target.closest('.success__inner')){
    return;
  }
  sendSuccessClose();
}

function clickOutModalError (evt) {
  if(evt.target.closest('.error__inner')){
    return;
  }
  sendErrorMessageClose();
}

function sendErrorMessageCloseEsc (evt) {
  if (evt.key === 'Escape') {
    sendErrorMessageClose();
  }
}

function sendSuccessMessageCloseEsc (evt) {
  if (evt.key === 'Escape') {
    sendSuccessClose();
  }
}

const sendErrorMessage = () => {
  const errorFragmentSend = document.createDocumentFragment();
  const errorItemSend = sendErrorTemplate.cloneNode(true);
  const sendButttonClose = errorItemSend.querySelector('.error__button');
  sendButttonClose.addEventListener('click', sendErrorMessageClose);
  errorFragmentSend.append(errorItemSend);
  document.body.append(errorFragmentSend);
  document.addEventListener('keydown', sendErrorMessageCloseEsc);
  document.addEventListener('click', clickOutModalError);
  document.removeEventListener('keydown', onCloseChangePhotoEsc);

};

const showErrorGetData = () => {
  const errorFragment = document.createDocumentFragment();
  const errorItem = dataErrorTemplate.cloneNode(true);
  errorFragment.append(errorItem);
  document.body.append(errorFragment);
  const dataError = document.querySelector('.data-error');

  setTimeout(() => {
    dataError.remove();
  }, SHOW_ERROR_TIME);
};

const sendSuccessMessage = () => {
  const errorFragmentSend = document.createDocumentFragment();
  const errorItemSend = sendFormErrorTemplate.cloneNode(true);
  const closeButton = errorItemSend.querySelector('.success__button');
  errorFragmentSend.append(errorItemSend);
  document.body.append(errorFragmentSend);
  closeButton.addEventListener('click', sendSuccessClose);
  document.addEventListener('click', clickOutModalSuccess);
  document.addEventListener('keydown', sendSuccessMessageCloseEsc);
};

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    throw new Error(
      showErrorGetData()
    );
  });


export {getData, sendSuccessMessage, sendErrorMessage};
