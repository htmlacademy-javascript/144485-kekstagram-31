import {getRandomInteger, createId, getRandomArrayElement} from './util';
import {NAMES, MASSEGES, DESCRIPTION} from './data';
import {AVATAR_MIN, AVATAR_MAX, LIKES_MIN, LIKES_MAX, COMMENTS_MIN, COMMENTS_MAX, MAX_NUMBER_PHOTO_ID} from './variables';

const commentsId = createId();
const generatePhotoId = createId();
const generatePhotoName = createId();

const createComments = () =>({
  id: commentsId(),
  avatar: `img/avatar-${ getRandomInteger(AVATAR_MIN, AVATAR_MAX) }.svg.`,
  message: getRandomArrayElement(MASSEGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id : generatePhotoId(),
  url: `photos/${ generatePhotoName() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments:  Array.from({ length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) }, createComments)
});

const photoItems = () => Array.from({ length: MAX_NUMBER_PHOTO_ID }, createPhoto);

photoItems();

