import {onOpenChangePhotoListener} from './upload-photo';
import {scaleListener} from './add-effects-scale';
import {effectCheckedListener} from './slider-effects';
import {getData} from './api';
import {addPhotoThumbnailsUsers, elementPhotoListener} from './create-thumbnails';
import {onShowErrorGetData } from './api/secondary-functions';
import {listenerButtonsFilter} from './filters';

getData()
  .then((photos) => {
    addPhotoThumbnailsUsers(photos);
    elementPhotoListener(photos);
    listenerButtonsFilter(photos);
  }).catch(() => {
    onShowErrorGetData();
  });

effectCheckedListener();
scaleListener();
onOpenChangePhotoListener();
