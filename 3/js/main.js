const NAMES = [
  'Александр',
  'Екатерина',
  'Иван',
  'Мария',
  'Сергей',
  'Ольга',
  'Дмитрий',
  'Наталья',
  'Андрей',
  'Анна',
  'Павел',
  'Юлия',
  'Владимир',
  'Елена',
  'Николай',
  'Татьяна',
  'Максим',
  'Светлана',
  'Артем',
  'Алиса',
  'Константин',
  'Оксана',
  'Григорий',
  'Виктория',
  'Роман'
];

const MASSEGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Яркий закат над горизонтом, окрашивающий небо в оттенки огня.',
  'Полевые маки, расцветающие под лучами утреннего солнца.',
  'Заснеженная горная вершина, величественно возвышающаяся над окружающей местностью.',
  'Дети, играющие на пляже и смеющиеся от радости.',
  'Старый заброшенный замок, погруженный в туманную атмосферу.',
  'Цветущие ярко-красные розы, распускающие свои лепестки.',
  'Пейзаж с извилистой рекой, отражающей облака на своей гладкой поверхности.',
  'Мистический лес, в котором кажется, что скрываются волшебные существа.',
  'Абстрактное изображение геометрических фигур, создающих ощущение движения.',
  'Парящий в небе воздушный шар, добавляющий яркости и красок в серую облачную дымку.',
  'Портрет старика с мудрыми глазами, отражающими его богатый жизненный опыт.',
  'Горящий костер на берегу озера, освещающий окружающую местность теплым светом.',
  'Архитектурное чудо в виде современного небоскреба, высокого и изящного.',
  'Забавные животные, играющие весело на зеленой поляне.',
  'Причудливые облака на фоне горизонта, создающие формы и узоры.',
  'Романтическая пара, гуляющая по закатной набережной и держащаяся за руки.',
  'Капли дождя, скатывающиеся по стеклу автомобиля и отражающие мир за окном.',
  'Снежинки, падающие на зимний пейзаж и придавая ему сказочный вид.',
  'Величественный водопад, образующий радужный мосток из брызг и пара.',
  'Старинная улица с колоритными домами и уютными кафе.',
  'Подсолнухи, поворачивающие свои головы за солнцем и создающие живописный пейзаж.',
  'Морской пляж с мягким песком и бирюзовой водой, приглашающий к отдыху и релаксации.',
  'Дикая природа с высокими соснами и горными вершинами на заднем плане.',
  'Разноцветные фейерверки, освещающие ночное небо яркими огнями.',
];

const AVATAR_MAX = 6;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MAX = 30;
const MAX_NUMBER_PHOTO_ID = 25;
const MAX_NUMBER_PHOTO_NAME = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower; // не понимаю эту запись , что тут происходит и для чего.
  return Math.floor(result);
};

const createRandomGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createId = () => {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
};

const generatePhotoId = createRandomGenerator(1, MAX_NUMBER_PHOTO_ID);
const generatePhotoName = createRandomGenerator(1, MAX_NUMBER_PHOTO_NAME);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const commentsId = createId();

const createComments = () =>({
  id: commentsId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR_MAX) }.svg.`,
  message: getRandomArrayElement(MASSEGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id : generatePhotoId(),
  url: `photos/${ generatePhotoName() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments:  Array.from({ length: getRandomInteger(0, COMMENTS_MAX) }, createComments)
});

// eslint-disable-next-line
const photoItems = Array.from({ length: MAX_NUMBER_PHOTO_ID }, createPhoto);
