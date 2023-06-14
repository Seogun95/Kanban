import { keyframes } from 'styled-components';
const lightModeBtn = require('./img/lightMode.png');
const darkModeBtn = require('./img/darkMode.png');

const darkImageOn = keyframes`
  0% {
    background-image: url(${lightModeBtn});
  }
  100% {
    background-image: url(${darkModeBtn});
  }
`;

const darkImageOff = keyframes`
  0% {
    background-image: url(${darkModeBtn});
  }
  100% {
    background-image: url(${lightModeBtn});
  }
`;

const moon = keyframes`
  0% {
    transform: rotate(0deg);

  }
  90% {
    background-color: transparent;
    box-shadow: .3125rem -0.0625rem 0 white;
    filter: blur(0);
  }
  100% {
    transform: rotate(170deg);
    background-color: transparent;
    box-shadow: .3125rem -0.0625rem 0 white;
    filter: blur(0);
  }
`;

const sun = keyframes`
  0% {
    transform: rotate(120deg);
    background-color: transparent;
    filter: blur(0);
  }
  50% {
    background-color: transparent;

    filter: blur(0);
  }
  90% {
    background-color: #f5daaa;
    box-shadow: 0 0 .625rem #f5deb4, 0 0 1.25rem #f5deb4, 0 0 1.875rem #f5deb4, inset 0 0 .125rem #efd3a3;
    filter: blur(.0625rem);
  }
  100% {
    transform: rotate(0deg);
    background-color: #f5daaa;
    box-shadow: 0 0 .625rem #f5deb4, 0 0 1.25rem #f5deb4, 0 0 1.875rem #f5deb4, inset 0 0 .125rem #efd3a3;
    filter: blur(.0625rem);
  }
`;

const shooting = keyframes`
  0% {
    transform: rotate(315deg) translateX(100px);
      opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotate(321deg) translateX(0);
      opacity: 1;
  }
`;

export const Keyframes = {
  darkImageOn,
  darkImageOff,
  moon,
  shooting,
  sun,
};
