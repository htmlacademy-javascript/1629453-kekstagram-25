// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive();

function isCommentMaxLengthExceeded(comment, maxLength) {
  return comment.length <= maxLength;
}

isCommentMaxLengthExceeded();
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(x, y) {
  const lower = Math.ceil(Math.min(Math.abs(x), Math.abs(y)));
  const upper = Math.floor(Math.max(Math.abs(x), Math.abs(y)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger();

function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('Привет, мир!', 200);

const PHOTO_DESCRIPTIONS = [
  'Он любил гулять, прохаживаясь по набережной.',
  'Изучая историю, мы глубже понимаем свою страну.',
  'Сделав домашнее задание, мы пошли на тренировку.',
  'Выступая перед аудиторией, не размахивай руками.',
  'Готовясь к экзамену, мы делали краткие записи по каждому вопросу.',
  'Приехав на станцию, мы с трудом нашли такси.',
  'Прибежав к финишу, он еле дышал от усталости.',
  'Увидев брата, я быстро подошла к нему.',
  'Приехав в деревню, мы наслаждались тишиной.',
  'Дожидаясь выхода на сцену, он заметно нервничал.',
  'После слов учителя все замолчали, задумавшись о будущем.',
  'Она слушала его, закрыв глаза.',
  'Утром, выпив сок, мы пошли на прогулку.',
  'Заметив меня, Николай улыбнулся.',
  'Приехав в пансионат, мы сразу же пошли на море.',
  'Вечером, прогулявшись по берегу моря, мы пошли ужинать.',
  'Учитель, проверяя наши домашние задания, был слишком строг в своих оценках.',
  'Забывая о данных обещаниях, человек вызывает недоверие к себе.',
  'Рассказывая содержание фильма, он слишком волновался.',
  'Пролежав полдня на диване, кот решил поесть.',
  'Петров вышел из класса, громко хлопнув дверью.',
  'Ученик отвечал у доски, волнуясь и глотая слова.',
  'Набирая скорость, поезд отошел от станции.',
  'Не зная броду, не суйся в воду.',
  'Собака подошла и , не глядя на хозяина, легла у его ног.',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Андрей',
  'Иван',
  'Лиза',
  'Полина',
  'Сергей',
  'Миша',
  'Надежда',
  'Аля',
  'Паша',
  'Илья',
];
const PHOTO_ITEM_QUANTITY = 25;
const COMMENT_ITEM_QUANTITY = 6;

const createCommentItem = () => {
  const commentItem = {
    id: '',
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: COMMENTS[getRandomPositiveInteger(0, COMMENTS.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  };
  return commentItem;
};

const comments = Array.from({ length: COMMENT_ITEM_QUANTITY }, createCommentItem);
comments.forEach(() => {
  const count = comments.length;
  const range = 1000;
  const m = {};
  const a = [];

  for (let i = 0; i < count; ++i) {
    const r = Math.floor(Math.random() * (range - i));
    a.push(((r in m) ? m[r] : r) + 1);
    const l = range - i - 1;
    m[r] = (l in m) ? m[l] : l;
  }

  for (let j = 0; j <= comments.length - 1; j++) {
    comments[j].id = a[j];
  }
}
);

const createPhotoItem = () => {
  const photoItem = {
    id: '',
    url: '',
    description: '',
    likes: getRandomPositiveInteger(0, 200),
    comments: comments,
  };
  return photoItem;
};

const photoList = Array.from({ length: PHOTO_ITEM_QUANTITY }, createPhotoItem);

photoList.forEach((currentElement, index) => {
  currentElement.id = index + 1;
  currentElement.url = `photos/${index + 1}.jpg`;
  currentElement.description = PHOTO_DESCRIPTIONS[index];
}
);

createCommentItem();
createPhotoItem();

