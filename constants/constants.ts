import whiteColor from '../public/model/textures/NEW White Texture.png';
import redColor from '../public/model/textures/NEW RED TEXTURE.png';
import blackColor from '../public/model/textures/New Black Texture.png';

export const ModelsInfo = [
  {
    id: 1,
    title: 'Phillips Senseo Deep Black Mat',
    color: ['#000000', '#000000', '#000000'],
    img: blackColor
  },
  {
    id: 2,
    title: 'Phillips Senseo White Cream',
    color: ['#E7E7E7', '#E7E7E7', '#E7E7E7'],
    img: whiteColor
  },
  {
    id: 3,
    title: 'Phillips Senseo Candy Red',
    color: ['#BC1527', '#BC1527', '#BC1527'],
    img: redColor
  }
];

export const sizes = [
  { label: '1.5L', value: 'small' },
  { label: '3L', value: 'large' }
];

export const footerLinks = ['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map'];
