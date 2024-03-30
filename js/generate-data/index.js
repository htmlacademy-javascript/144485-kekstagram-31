import {getRandomInteger, createId, getRandomArrayElement} from '../util';
import {DESCRIPTION} from '../data';
import {generateComment} from './createComments';

const LIKES_MIN = 15;
const LIKES_MAX = 200;
const MAX_NUMBER_PHOTO_ID = 25;

const generatePhotoId = createId();
const generatePhotoName = createId();

const createPhoto = () => ({
  id : generatePhotoId(),
  url: `photos/${ generatePhotoName() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments:  generateComment()
});

export const photoItems = () => Array.from({ length: MAX_NUMBER_PHOTO_ID }, createPhoto);
