import {generateData} from './generate-data.js';

const dataList = generateData();
const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.querySelector('#picture').content;
const template = pictureFragment.querySelector('.picture');
const fragment = document.createDocumentFragment();


for (let i = 0; i < dataList.length; i++) {
  const pictureClone = template.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = dataList[i].url;
  pictureClone.querySelector('.picture__likes').textContent = dataList[i].likes;
  pictureClone.querySelector('.picture__comments').textContent = dataList[i].comments.length;
  fragment.append(pictureClone);
}

pictureContainer.append(fragment);

