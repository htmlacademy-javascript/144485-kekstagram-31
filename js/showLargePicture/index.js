import { bigPictureBlock, bigPictureCancel, bigPictureImg, likesCount, commentTotalCount, socialCaption, socialCommentsList, buttonShowMore} from './elementVariables';
import {renderComments, onShowMoreComments} from './createComments';


const toggleClass = (isOpened = true) =>{
  document.body.classList.toggle('modal-open');
  bigPictureBlock.classList.toggle('hidden', !isOpened);
};

const onCloseBigPicture = () => {
  toggleClass(false);
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
  toggleClass();
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

