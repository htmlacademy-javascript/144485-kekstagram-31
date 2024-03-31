import {effectLevelSliderParrent, effectLevelSlider, effectLevelInput, effectChecked, uploaPreviewImage} from './slider-variables';
import {EFFECTS, DEFAULT_MIN, DEFAULT_MAX, DEFAULT_START } from './effect-data';

const sliderVisableToggle = (isShown = true) => {
  effectLevelSliderParrent.classList.toggle('hidden', isShown);
};

const searhEffect = (value, array) => array.find((element) => element.name === value);

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_MIN,
    max: DEFAULT_MAX,
  },
  start: DEFAULT_START,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const sliderUpdateOptions = (value) => {
  const effect = searhEffect(value, EFFECTS);
  if(!effect){
    sliderVisableToggle();
    uploaPreviewImage.style.removeProperty('filter');
    return;
  }
  const {min, max, start, step, unit} = effect;
  sliderVisableToggle(false);
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step
  });
  effectLevelSlider.noUiSlider.on('update', () => {
    const effectLevelInputValue = effectLevelSlider.noUiSlider.get();
    effectLevelInput.value = effectLevelInputValue;
    uploaPreviewImage.style.filter = `${effect.style}(${effectLevelInputValue}${unit})`;
  });
};

export const effectCheckedListener = () => {
  effectChecked.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderUpdateOptions(evt.target.value);
    }
  });
};
