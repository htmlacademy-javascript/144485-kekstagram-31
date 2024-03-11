import {buttonShowMore, socialCommentsList} from './elementVariables';


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

const onShowMoreComments = (element, minLimit) =>{
  const limit = minLimit;
  const commentsList = element.slice(0, limit);


  commentsList.forEach((item) =>{
    const commentElement = createComment(item);
    socialCommentsList.append(commentElement);
  });


};

const renderComments = (element, limit) => {
  const minLimit = limit;
  socialCommentsList.innerHTML = '';
  onShowMoreComments(element,minLimit);


};


buttonShowMore.addEventListener('click', () =>{
});

export {renderComments};
