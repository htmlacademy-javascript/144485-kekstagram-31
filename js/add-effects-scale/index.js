const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const onIncreaseScale = () => {
  const scaleValue = parseInt(scaleControlValue.value, 10);
  const scaleCount = scaleValue + STEP_SCALE;
  const scaleLimited = scaleValue >= MAX_SCALE ? MAX_SCALE : scaleCount;
  scaleControlValue.value = `${scaleLimited}%`;
  uploadPreviewImage.style.transform = `scale(${scaleLimited / 100})`;
};

const onDecreaseScale = () => {
  const scaleValue = parseInt(scaleControlValue.value, 10);
  const scaleCount = scaleValue - STEP_SCALE;
  const scaleLimited = scaleValue <= MIN_SCALE ? MIN_SCALE : scaleCount;
  scaleControlValue.value = `${scaleLimited}%`;
  uploadPreviewImage.style.transform = `scale(${scaleLimited / 100})`;
};

const scaleListener = () => {
  scaleControlBigger.addEventListener('click', onIncreaseScale);
  scaleControlSmaller.addEventListener('click', onDecreaseScale);
};

export {scaleListener};
