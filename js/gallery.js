import {addPhotos} from './photo.js';
import {makeFullscreen} from './fullscreen.js';

const makeGallery = () => {
  addPhotos();
  makeFullscreen();
}

export {makeGallery};
