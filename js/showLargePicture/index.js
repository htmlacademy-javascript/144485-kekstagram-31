import { bigPictureBlock, bigPictureCancel, bigPictureImg, likesCount, commentTotalCount, socialCaption, socialCommentsList} from './elementVariables';
import {renderComments} from './createComments';


const toggleClass = (isOpened = true) =>{
  document.body.classList.toggle('modal-open');
  bigPictureBlock.classList.toggle('hidden', !isOpened);
};

const onCloseBigPicture = () => {
  toggleClass(false);
  socialCommentsList.innerHTML = '';
  bigPictureCancel.removeEventListener('click', onCloseBigPicture);
};


const addInformation = ({url, description, likes, comments}) =>{
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
};

const onOpenBigPicture = (element) => {
  const limited = 5;
  addInformation(element);
  toggleClass();
  renderComments(element.comments, limited);

  bigPictureCancel.addEventListener('click', onCloseBigPicture);
};

document.addEventListener('keydown', (evt) =>{
  if(evt.key === 'Escape'){
    evt.preventDefault();
    onCloseBigPicture();
  }
});

export {onOpenBigPicture};

