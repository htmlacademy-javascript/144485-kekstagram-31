const bigPictureBlock = document.querySelector('.big-picture');
const pictureList = document.querySelector('.pictures');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

//функция закрытия

const onCloseBigPicture = () => {
  bigPictureBlock.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', onCloseBigPicture);
};

const onOpenBigPicture = (evt) => {
  evt.preventDefault();

  if(evt.target.closest('.picture')){
    bigPictureBlock.classList.remove('hidden');
    bigPictureCancel.addEventListener('click', onCloseBigPicture);
  }
};


pictureList.addEventListener('click', onOpenBigPicture);
