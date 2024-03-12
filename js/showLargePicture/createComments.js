import {buttonShowMore, socialCommentsList, commentShownCount, socialCommentChild} from './elementVariables';
const LIMITED_DISPLAY_COMMENTS = 5;
const arrayComments = [];


const createComment = (comments) => {
  const socialComment = document.createElement('li');
  socialComment.classList.add('social__comment');

  const socialPicture = document.createElement('img');
  socialPicture.classList.add('social__picture');
  socialPicture.src = comments.avatar;
  socialPicture.alt = comments.name;
  socialPicture.width = '35';
  socialPicture.height = '35';

  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = comments.message;

  socialComment.append(socialPicture, socialText);
  return socialComment;
};

const onShowMoreComments = () =>{
  const currentShowedComments = socialCommentsList.childElementCount;
  const commentsCount = currentShowedComments + LIMITED_DISPLAY_COMMENTS;
  const commentsLimited = arrayComments.length >= commentsCount ? commentsCount : arrayComments.length;
  const commentsList = arrayComments.slice(currentShowedComments, commentsLimited);

  commentsList.forEach((item) =>{
    const commentElement = createComment(item);
    socialCommentsList.append(commentElement);
    commentShownCount.textContent = socialCommentChild.length;
  });

  if(socialCommentChild.length === arrayComments.length){
    buttonShowMore.classList.add('hidden');
  }

};

buttonShowMore.addEventListener('click', onShowMoreComments);

const renderComments = (element) => {
  arrayComments.splice(0, arrayComments.length) ;
  arrayComments.push(...element);
  socialCommentsList.innerHTML = '';
  onShowMoreComments();
};


export {renderComments};
