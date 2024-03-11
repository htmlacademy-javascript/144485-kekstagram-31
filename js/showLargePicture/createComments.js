import {buttonShowMore, socialCommentsList, commentShownCount} from './elementVariables';


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

const onShowMoreComments = (element) =>{
  let limit = 5;
  const commentsList = element.splice(0, limit);
  const socialCommentChild = socialCommentsList.children;
  commentShownCount.textContent = socialCommentChild.length;

  commentsList.forEach((item) =>{
    const commentElement = createComment(item);
    socialCommentsList.append(commentElement);
    commentShownCount.textContent = socialCommentChild.length;
  });
  buttonShowMore.addEventListener('click', () =>{
    limit += 5;
    onShowMoreComments(element);
  });

};

const renderComments = (element, limit) => {
  const minLimit = limit;
  socialCommentsList.innerHTML = '';
  onShowMoreComments(element,minLimit);


};


export {renderComments};
