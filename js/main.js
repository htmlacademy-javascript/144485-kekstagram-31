import {onOpenChangePhotoListener} from './upload-photo';
import {validateListener} from './validation-form';
import {scaleListener} from './add-effects-scale';
import {effectCheckedListener} from './slider-effects';
import {getData} from './get-data';
import {addPhotoThumbnailsUsers} from './create-thumbnails';

effectCheckedListener();
scaleListener();
validateListener();
onOpenChangePhotoListener();


getData()
  .then((photos) => {
    addPhotoThumbnailsUsers(photos);
  });
