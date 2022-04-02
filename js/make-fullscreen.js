import {generateData} from './generate-data.js';
import {addPhotos} from './add-photos.js';

addPhotos();

const generatedData = generateData();
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImgContainer = bigPicture.querySelector('.big-picture__img');
const bigPictureImg = bigPictureImgContainer.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsCountContainer = bigPicture.querySelector('.social__comment-count');
const commentsCount = commentsCountContainer.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentFragment = document.createDocumentFragment();
const photoDescription = bigPicture.querySelector('.social__caption');

// Делаю из 25 фоток коллекцию → массив
const pictureCollection = document.querySelectorAll('.picture');
const pictureList = Array.from(pictureCollection);


// Меняю данные большой фотки на данные выбранной фотографии
const replaceData = (picture) => {
  bigPictureImg.src = picture.querySelector('img').src;
  likesCount.textContent = picture.querySelector('.picture__likes').textContent;
  commentsCount.textContent = picture.querySelector('.picture__comments').textContent;

  bigPicture.classList.remove('hidden');
  commentsCountContainer.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
};


// Добавить комментарии при открытии фото
const addComments = (index) => {
  photoDescription.textContent = generatedData[index].description;

  for (let i = 0; i < generatedData[index].comments.length; i++) {
    const currentData = generatedData[index].comments[i];
    const comment = bigPicture.querySelector('.social__comment').cloneNode(true);

    comment.querySelector('.social__picture').src = currentData.avatar;
    comment.querySelector('.social__picture').alt = currentData.name;
    comment.querySelector('.social__text').textContent = currentData.message;
    commentFragment.append(comment);
  }
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentFragment);
};

const makeFullscreen = () => {
  // добавляю каждой картинке событие
  pictureList.forEach((picture, index) => {
    picture.addEventListener('click', () => {
      replaceData(picture);
      addComments(index);
    });
  });


  // закрытие большой фотографии
  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};

export {makeFullscreen};
