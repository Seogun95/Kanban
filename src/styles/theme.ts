import { DefaultTheme, css } from 'styled-components';
import { media } from './media';

const blue = {
  brandColor1: '#F9FBFF',
  brandColor2: '#D0E4FF',
  brandColor3: '#A9CEFF',
  brandColor4: '#87BBFF',
  brandColor5: '#5FA4FF',
  brandColor6: '#1479FF',
  brandColor7: '#005EDA',
};

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const wh100 = css`
  width: 100%;
  height: 100%;
`;

const AbsoluteTL = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CursorActive = css`
  pointer-events: auto;
  cursor: pointer;
`;

const DarkBlur = css`
  background: ${props => props.theme.bgColorDeep}cc;
  backdrop-filter: blur(0.1125rem);
`;

const NoPaddingMargin = css`
  margin: 0;
  padding: 0;
`;

const TextEllipsis = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const TextEllipsisMultiline = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const theme = {
  wh100,
  FlexCol,
  FlexRow,
  FlexCenter,
  AbsoluteTL,
  AbsoluteCenter,
  CursorActive,
  DarkBlur,
  NoPaddingMargin,
  TextEllipsis,
  TextEllipsisMultiline,
};

export const Theme: DefaultTheme = {
  media,
  ...theme,
  blue,
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  pointColorLight: '#44c5ac',
  greenColor: '#33bd65',
  transparentBackground: '#f5f6f7a6',
  bgColorDeep: '#f1f1f1',
  bgColor: 'white',
  bgColor2: '#1e1e1e',
  color: '#191A23',
  color2: '#E2E2E2',
  transparentColor: 'rgba(25, 26, 35, 0.65)',
  transitionOption: 'ease-in-out 0.15s',
  shadow: {
    box: '0 0.2rem 0.4rem rgba(10, 10, 10, 0.3);',
    box_Hover: '0 0.2rem 0.75rem rgba(10, 10, 10, 0.4)',
    box1: '0rem .5625rem .75rem -0.4375rem rgba(0, 0, 0, .3);',
    drop: 'drop-shadow(0px 0.2rem 0.3rem rgba(0, 0, 0, 0.5))',
    drop_Hover: 'drop-shadow(0px 0.2rem 0.4rem rgba(0, 0, 0, 0.6))',
    drop1: 'drop-shadow(1px 1px 1px black)',
  },
  scrollbar: {
    bg: 'rgba(181,181,193,.8)',
    hover: 'rgba(145, 145, 158, 1)',
  },
  card: {
    bgColor: '#1479FF',
    boardColor: '#ebecf0',
    cardColor: 'white',
    leave: '#e6fcff',
    over: '#fdeae6',
  },
};

export const DarkTheme: DefaultTheme = {
  media,
  ...theme,
  blue,
  pointColor: '#30B198',
  subColor: '#FFC857',
  accentColor: '#EF476F',
  pointColorLight: '#44c5ac',
  greenColor: '#33bd65',
  transparentBackground: '#21232E',
  bgColorDeep: '#2d2d2d',
  bgColor: '#1e1e1e',
  bgColor2: '#F8FAFB',
  color: '#E2E2E2',
  color2: '#191A23',
  transparentColor: '#f5f6f7a6',
  transitionOption: 'ease-in-out 0.15s',
  shadow: {
    box: '0 0.2rem 0.6rem rgba(0, 0, 0, 1);',
    box_Hover: '0 0.2rem 0.95rem rgba(0, 0, 0, 1)',
    box1: '0 .5625rem .75rem -.4375rem rgba(0, 0, 0, 1);',
    drop: 'drop-shadow(0px 0.15rem 0.3rem rgba(0, 0, 0, .8))',
    drop_Hover: 'drop-shadow(0px 0.15rem 0.4rem rgba(0, 0, 0, 1))',
    drop1: 'drop-shadow(1px 2px 1px (rgba(0, 0, 0, .8))',
  },
  scrollbar: {
    bg: 'rgba(86,88,105,1)',
    hover: 'rgba(172,172,190,1)',
  },
  card: {
    bgColor: '#0f2848',
    boardColor: '#ffffff42',
    cardColor: '#00000096',
    leave: '#007b27bd',
    over: '#85210096',
  },
};
