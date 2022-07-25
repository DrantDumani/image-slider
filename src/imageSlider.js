function slideImages(container) {
  let slidePos = Number(getComputedStyle(container).right.match(/\d+/)[0]);
  const containerWidth = container.offsetWidth;
  const numOfImgs = container.querySelectorAll('img').length;
  const imgWidth = containerWidth / numOfImgs;
  let intervalId;

  const getInfo = () => [slidePos, containerWidth, imgWidth];

  const shiftSlides = (num) => {
    container.style.right = `${num}px`;
  };

  const setPos = (num) => {
    slidePos = num;
    shiftSlides(slidePos);
  };

  const slideRight = () => {
    slidePos += 800;
    shiftSlides(slidePos);
  };

  const slideLeft = () => {
    slidePos -= 800;
    shiftSlides(slidePos);
  };

  const resetSlide = () => {
    slidePos = 0;
    shiftSlides(slidePos);
  };

  const autoSlide = () => {
    intervalId = setInterval(() => {
      if (slidePos < containerWidth - imgWidth) {
        slideRight();
      } else {
        resetSlide();
      }
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalId);
  };

  return {
    getInfo, setPos, shiftSlides, slideRight, slideLeft, resetSlide, autoSlide, resetAutoSlide,
  };
}

export default slideImages;
