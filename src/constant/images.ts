import { StaticImageData } from 'next/image';

import arrowdown from '../assets/images/arrowdown.png';
import arrowup from '../assets/images/arrowup.png';
import call from '../assets/images/call.png';
import confetti from '../assets/images/confetti.png';

type VerifydImages = {
  confetti: StaticImageData;
  arrowdown: StaticImageData;
  arrowup: StaticImageData;
  call: StaticImageData;
};

const Images: VerifydImages = {
  confetti,
  arrowdown,
  arrowup,
  call,
};

export default Images;
