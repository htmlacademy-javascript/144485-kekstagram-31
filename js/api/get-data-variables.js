export const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
export const sendErrorTemplate = document.querySelector('#error').content.querySelector('.error');
export const sendFormErrorTemplate = document.querySelector('#success').content.querySelector('.success');
export const SHOW_ERROR_TIME = 5000;
export const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
export const submitButton = document.querySelector('.img-upload__submit');
export const submitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Загрузка...'
};
export const Method = {
  GET: 'GET',
  POST: 'POST',
};
