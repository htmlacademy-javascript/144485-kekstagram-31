import {onOpenChangePhotoListener} from './upload-photo';
import {validateListener} from './validation-form';
import {scaleListener} from './add-effects-scale';
import {effectCheckedListener} from './slider-effects';
import {getData} from './api';
import {addPhotoThumbnailsUsers, elementPhotoListener} from './create-thumbnails';
import {onShowErrorGetData } from './api/secondary-functions';

getData()
  .then((photos) => {
    addPhotoThumbnailsUsers(photos);
    elementPhotoListener(photos);
  }).catch(() => {
    onShowErrorGetData();
  });

effectCheckedListener();
scaleListener();
validateListener();
onOpenChangePhotoListener();
