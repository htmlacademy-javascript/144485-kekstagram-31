import {effectLevelSliderParrent, effectLevelSlider, effectLevelInput, effectChecked, uploaPreviewImage} from './slider-variables';

const sliderVisableToggle = (isShown = true) => {
  effectLevelSliderParrent.classList.toggle('hidden', isShown);
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  connect: 'lower'
});

const sliderUpdateOptions = (min, max, start, step, addStyleFunction) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step
  });
  effectLevelSlider.noUiSlider.on('update', () => {
    let effectLevelInputValue = effectLevelInput.value;
    effectLevelInputValue = effectLevelSlider.noUiSlider.get();
    effectLevelInput.value = effectLevelInputValue;
    uploaPreviewImage.style.filter = addStyleFunction(effectLevelInputValue);
  });
};

effectChecked.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    switch (evt.target.value) {
      case 'chrome':
        sliderVisableToggle(false);
        sliderUpdateOptions(0, 1, 0, 0.1, (value) => `grayscale(${value})`);
        break;

      case 'sepia':
        sliderVisableToggle(false);
        sliderUpdateOptions(0, 1, 0, 0.1, (value) => `sepia(${value})`);
        break;

      case 'marvin':
        sliderVisableToggle(false);
        sliderUpdateOptions(0, 100, 0, 1, (value) => `invert(${value}%)`);
        break;

      case 'phobos':
        sliderVisableToggle(false);
        sliderUpdateOptions(0, 3, 0, 0.1, (value) => `blur(${value}px)`);
        break;

      case 'heat':
        sliderVisableToggle(false);
        sliderUpdateOptions(0, 3, 1, 0.1, (value) => `brightness(${value})`);
        break;

      default:
        sliderVisableToggle();
        uploaPreviewImage.style.removeProperty('filter');
    }
  }
});
