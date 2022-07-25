import './style.scss';
import insertImages from './imageSlides';
import imageSlider from './imageSlider';
import favIcon from './images/faviconZero.png';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favIcon;
const head = document.querySelector('head');
head.append(link);

insertImages();
const slides = document.querySelector('.slide-container');
const manageSlider = imageSlider(slides);

window.addEventListener('load', () => {
  manageSlider.autoSlide();
  handleImgBtnStyle.autoAssignClassToBtn();
});

function handleNext() {
  const [pos, containerWidth, imgWidth] = manageSlider.getInfo();
  if (pos < containerWidth - imgWidth) {
    manageSlider.slideRight();
    handleImgBtnStyle.incIndex();
    handleImgBtnStyle.selectNewClass();
  }
  manageSlider.resetAutoSlide();
  manageSlider.autoSlide();
  handleImgBtnStyle.removeInterval();
  handleImgBtnStyle.autoAssignClassToBtn();
}

function handlePrev() {
  const [pos, _, imgWidth] = manageSlider.getInfo();
  if (pos >= imgWidth) {
    manageSlider.slideLeft();
    handleImgBtnStyle.decIndex();
    handleImgBtnStyle.selectNewClass();
  }
  manageSlider.resetAutoSlide();
  manageSlider.autoSlide();
  handleImgBtnStyle.removeInterval();
  handleImgBtnStyle.autoAssignClassToBtn();
}

const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', handlePrev);

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', handleNext);

const imgBtns = Array.from(document.querySelectorAll('.img-nav-button'));
imgBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    const [_, __, imgWidth] = manageSlider.getInfo();
    manageSlider.setPos(imgWidth * index);
    manageSlider.resetAutoSlide();
    manageSlider.autoSlide();

    handleImgBtnStyle.setIndex(e.target);
    handleImgBtnStyle.selectNewClass();
    handleImgBtnStyle.removeInterval();
    handleImgBtnStyle.autoAssignClassToBtn();
  });
});

const handleImgBtnStyle = (function btnStyleManager() {
  let currIndex = 0;
  let prevIndex;
  let intervalId = 0;
  imgBtns[currIndex].classList.add('selected');

  const incIndex = () => {
    prevIndex = currIndex;
    currIndex = (prevIndex + 1) % imgBtns.length;
  };

  const decIndex = () => {
    prevIndex = currIndex;
    currIndex -= 1;
  };

  const selectNewClass = () => {
    imgBtns[prevIndex].classList.remove('selected');
    imgBtns[currIndex].classList.add('selected');
  };

  const autoAssignClassToBtn = () => {
    intervalId = setInterval(() => {
      incIndex();
      selectNewClass();
    }, 5000);
  };

  const removeInterval = () => {
    clearInterval(intervalId);
  };

  const setIndex = (elem) => {
    prevIndex = currIndex;
    currIndex = imgBtns.indexOf(elem);
  };

  return {
    autoAssignClassToBtn, removeInterval, setIndex, incIndex, decIndex, selectNewClass,
  };
}());
