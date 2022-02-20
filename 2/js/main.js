// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (min < max && min >= 0) ? Math.floor(Math.random() * (max - min + 1)) + min : 'Диапазон задан неверно';
}

getRandomIntInclusive();

function isCommentMaxLengthExceeded(comment, maxLength) {
  return comment.length <= maxLength;
}

isCommentMaxLengthExceeded();