import Zero from './images/ZeroReploid.png';
import Ciel from './images/Ciel.png';
import Fefnir from './images/mmzFefnir.jpg';
import Elpizo from './images/mmzElpizo.jpg';

const imgInfo = [
  [Zero, 'Former Maverick Hunter'],
  [Ciel, 'Ciel and a cyberelf'],
  [Fefnir, 'Fighting Fefnir'],
  [Elpizo, 'Elpizo'],
];

function insertImages() {
  const container = document.querySelector('.slide-container');
  imgInfo.forEach((data) => {
    const img = document.createElement('img');
    [img.src, img.alt] = data;
    img.classList.add('slider-img');
    container.append(img);
  });
}

export default insertImages;
