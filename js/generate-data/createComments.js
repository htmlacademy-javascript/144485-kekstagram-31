import {getRandomInteger, createId, getRandomArrayElement} from '../util';
import {NAMES, MESSAGES} from '../data';

const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;

const commentsId = createId();

const createComments = () =>({
  id: commentsId(),
  avatar: `img/avatar-${ getRandomInteger(AVATAR_MIN, AVATAR_MAX) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export const generateComment = () => Array.from({ length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX) }, createComments);
