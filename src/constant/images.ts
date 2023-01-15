import { StaticImageData } from 'next/image';

import confetti from '../assets/images/confetti.png';
import arrowdown from '../assets/images/arrowdown.png';
import arrowup from '../assets/images/arrowup.png';

type VerifydImages = {
  confetti: StaticImageData;
  arrowdown: StaticImageData;
  arrowup: StaticImageData;
};

const Images: VerifydImages = {
  confetti,
  arrowdown,
  arrowup,
};

export default Images;
