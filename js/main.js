import {addPhotoThumbnailsUsers} from './create-thumbnails';
import {onOpenChangePhotoListener} from './upload-photo';
import {validateListener} from './validation-form';
import {scaleListener} from './add-effects';
import {effectCheckedListener} from './slider-effects';

effectCheckedListener();
scaleListener();
validateListener();
onOpenChangePhotoListener();
addPhotoThumbnailsUsers();
