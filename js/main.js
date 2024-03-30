import {onOpenChangePhotoListener} from './upload-photo';
import {validateListener} from './validation-form';
import {scaleListener} from './add-effects-scale';
import {effectCheckedListener} from './slider-effects';
import {getData} from './api';
import {addPhotoThumbnailsUsers, elementPhotoListener} from './create-thumbnails';
import {onShowErrorGetData } from './api/secondary-functions';
import {showFilterPanel, listenerButtonsFilter} from './filters';
import {debounce} from './filters/debounce';

getData()
  .then((photos) => {
    addPhotoThumbnailsUsers(photos);
    elementPhotoListener(photos);
    showFilterPanel();
    listenerButtonsFilter(photos, debounce(addPhotoThumbnailsUsers));
  }).catch(() => {
    onShowErrorGetData();
  });

effectCheckedListener();
scaleListener();
validateListener();
onOpenChangePhotoListener();
