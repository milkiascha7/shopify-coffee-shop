// import {
//   blackImg,
//   blueImg,
//   highlightFirstVideo,
//   highlightFourthVideo,
//   highlightSecondVideo,
//   highlightThirdVideo,
//   whiteImg,
//   yellowImg
// } from '../utils';

import whiteColor from '../public/model/textures/NEW White Texture.png';
import redColor from '../public/model/textures/NEW RED TEXTURE.png';
import blackColor from '../public/model/textures/New Black Texture.png';

export const navLists = ['Store', 'Mac', 'iPhone', 'Support'];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ['Enter A17 Pro.', 'Game‑changing chip.', 'Groundbreaking performance.'],
    // video: highlightFirstVideo,
    videoDuration: 4
  },
  {
    id: 2,
    textLists: ['Titanium.', 'So strong. So light. So Pro.'],
    // video: highlightSecondVideo,
    videoDuration: 5
  },
  {
    id: 3,
    textLists: ['iPhone 15 Pro Max has the', 'longest optical zoom in', 'iPhone ever. Far out.'],
    // video: highlightThirdVideo,
    videoDuration: 2
  },
  {
    id: 4,
    textLists: ['All-new Action button.', 'What will yours do?.'],
    // video: highlightFourthVideo,
    videoDuration: 3.63
  }
];

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
    // color: ['#8F8A81', '#ffe7b9', '#6f6c64']
    color: ['#E7E7E7', '#E7E7E7', '#E7E7E7'],
    img: whiteColor
  },
  {
    id: 3,
    title: 'iPhone 15 Pro in Candy Red',
    // color: ['#C9C8C2', '#ffffff', '#C9C8C2']
    color: ['#BC1527', '#BC1527', '#BC1527'],
    img: redColor
  }
];

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' }
];

export const footerLinks = ['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map'];
