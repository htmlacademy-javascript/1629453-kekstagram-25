import {generateData} from './generate-data.js';

const dataList = generateData();
const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.querySelector('#picture').content;
const template = pictureFragment.querySelector('.picture');
const fragment = document.createDocumentFragment();


for (let i = 0; i < dataList.length; i++) {
  const pictureClone = template.cloneNode(true);
  pictureClone.children[0].src = dataList[i].url;
  pictureClone.children[1].children[0].textContent = dataList[i].likes;
  pictureClone.children[1].children[1].textContent = dataList[i].comments.length;
  fragment.append(pictureClone);
}

pictureContainer.append(fragment);
