import { bigPictureBlock, bigPictureCancel, bigPictureImg, likesCount, commentTotalCount, socialCaption, socialCommentsList, buttonShowMore} from './elementVariables';
import {renderComments, onShowMoreComments} from './createComments';
import {toggleClass} from '../util';

const onCloseBigPicture = () => {
  toggleClass(bigPictureBlock, false);
  socialCommentsList.innerHTML = '';
  buttonShowMore.classList.remove('hidden');

  buttonShowMore.removeEventListener('click', onShowMoreComments);
  bigPictureCancel.removeEventListener('click', onCloseBigPicture);
  document.removeEventListener('keydown', onCloseBigPictureEsc);
};

const addInformation = ({url, description, likes, comments}) =>{
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
};

const onOpenBigPicture = (element) => {
  addInformation(element);
  toggleClass(bigPictureBlock);
  renderComments(element.comments);

  document.addEventListener('keydown', onCloseBigPictureEsc);
  bigPictureCancel.addEventListener('click', onCloseBigPicture);
};

function onCloseBigPictureEsc(evt){
  if(evt.key === 'Escape'){
    evt.preventDefault();
    onCloseBigPicture();
  }
}


export {onOpenBigPicture};

