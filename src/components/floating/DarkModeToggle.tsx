import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from 'atom';
import { HiSun } from 'react-icons/hi';
import { Keyframes } from 'assets';
import lightMode from 'assets/img/lightMode.png';
import darkMode from 'assets/img/darkMode.png';
import _ from 'lodash';

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const [isClickAllowed, setIsClickAllowed] = useState(true);

  const toggleDarkMode = useCallback(() => {
    if (isClickAllowed) {
      const audio = new Audio(`${process.env.PUBLIC_URL}/sound/click.mp3`);
      audio.play();
      setIsDark(prev => !prev);
      setIsClickAllowed(false);
      _.delay(() => setIsClickAllowed(true), 750);
    }
  }, [isClickAllowed, setIsDark]);

  return (
    <>
      <Input
        id="darkModeToggle"
        type="checkbox"
        onChange={toggleDarkMode}
        checked={isDark}
      />

      <Switch htmlFor="darkModeToggle">
        <Button isDark={isDark}>
          <Moon>
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}></li>
            ))}
          </Moon>
          {!isDark && <HiSun />}
        </Button>
        <Background isDark={isDark}>
          {isDark ? <StyledStar /> : <StyledSun />}
        </Background>
      </Switch>
    </>
  );
};

interface IisDarkProps {
  isDark: boolean;
}

const Button = styled.div.attrs({ className: 'switch__button' })<IisDarkProps>`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  overflow: hidden;
  top: 0.3125rem;
  left: 0.3125rem;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background: #f1c530;
  position: absolute;
  transition: 0.3s ease-in-out all;
  box-shadow: inset 0.1875rem 0.3125rem 0.1875rem #f8a100;
  animation: ${({ isDark }) =>
      isDark ? Keyframes.darkHover : Keyframes.lightHover}
    0.4s ease 0.2s;
  transform: ${({ isDark }) =>
    isDark ? `translateX(160%)` : `translateX(0%)`};
  filter: ${({ theme }) => theme.shadow.drop};
  &:before {
    content: '';
    opacity: 0;
    transition: 0.5s ease;
  }
  &:after {
    content: '';
    opacity: 0;
    transition: 0.5s ease;
  }
  svg {
    color: white;
    width: 100%;
    height: 80%;
  }
`;

const Moon = styled.ul`
  ${({ theme }) => theme.AbsoluteTL};
  ${({ theme }) => theme.wh100};
  padding: 0;
  margin: 0;
  opacity: 0;
  li {
    list-style: none;
    border-radius: 50px;
    background-color: #949ead;
    position: absolute;
  }

  li:first-child {
    width: 7px;
    height: 7px;
    left: 0px;
    top: 0px;
    background: linear-gradient(131deg, #becce1 38%, #626a77 100%);
  }

  li:nth-child(2) {
    width: 5px;
    height: 5px;
    right: 0;
    bottom: 4px;
  }

  li:nth-child(3) {
    width: 3px;
    height: 3px;
    right: 10px;
    bottom: 0px;
  }

  li:nth-child(4) {
    width: 2px;
    height: 2px;
    left: 9px;
    top: 0;
  }
`;
const Background = styled.div.attrs({
  className: 'switch__background',
})<IisDarkProps>`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  background: grey;
  border-radius: 2.5rem;
  position: relative;
  box-shadow: inset -0.25rem -0.25rem 0.375rem rgba(255, 255, 255, 0.3),
    inset 0.25rem 0.25rem 0.375rem rgba(70, 70, 70, 0.22);
  background-image: ${({ isDark }) =>
    isDark ? `url(${darkMode})` : `url(${lightMode})`};
  background-size: cover;
  background-position: 100% 0%;
  transition: 0.3s ease-in-out all;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    transition: 0.3s ease-in-out all;
    position: absolute;
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 1.5625rem;
    left: -0.125rem;
    top: 0.4rem;
    z-index: 0;
    box-shadow: 1.875rem -1.875rem 0rem rgba(255, 255, 255, 1),
      3.125rem -1.25rem 0rem rgba(255, 255, 255, 1),
      4.0625rem -1.5625rem 0rem rgba(255, 255, 255, 1),
      1.8125rem -1.75rem 0rem rgba(255, 255, 255, 1),
      3.0625rem -1.125rem 0rem rgba(255, 255, 255, 1),
      4.0625rem -1.4375rem 0rem rgba(255, 255, 255, 1);
    filter: drop-shadow(0px 0.2rem 0.3rem rgba(155, 160, 179, 0.6));
  }
`;

const StyledStar = styled.span`
  position: absolute;
  left: 1.7rem;
  top: 0.8rem;
  transition: 0.3s ease-in-out 0.2s;
  width: 0.125rem;
  height: 0.125rem;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0.0625rem 0.125rem rgba(255, 255, 255, 0.1),
    0 0 0.1875rem 0.1875rem rgba(255, 255, 255, 0.4);
  animation: ${Keyframes.shooting} 0.7s forwards
    cubic-bezier(0.8, 0.5, 0.2, 1.2) 0.3s;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 0.0625rem;
    background: linear-gradient(90deg, #fff, transparent);
  }
`;

const StyledSun = styled.span`
  position: absolute;
  right: 1rem;
  top: 0.6rem;
  width: 0.825rem;
  height: 0.825rem;
  transform-origin: 3.3125rem 0.625rem;
  animation: ${Keyframes.sun} 0.8s forwards ease;
  border-radius: 1.5625rem;
  opacity: 1;
`;

const Switch = styled.label`
  cursor: pointer;
  position: fixed;
  z-index: 99999;
  margin: 0.8rem 0.5rem;
  width: 5.625rem;
  height: 2.5rem;
  bottom: 0rem;
  right: 0rem;
  filter: ${({ theme }) => theme.shadow.drop};
  transition: 0.2s ease;
  &:hover {
    filter: ${({ theme }) => theme.shadow.drop_Hover};
  }
  &:active {
    filter: ${({ theme }) => theme.shadow.drop} grayscale(0.3);
  }

  ${({ theme }) => theme.media.mobile`
    display: none;
  `}
`;

const Input = styled.input`
  display: none;
  &:checked + ${Switch} {
    & > .switch__button {
      transition: 0.3s ease-in-out all;
      box-shadow: inset 0.1875rem 0.3125rem 0.1875rem #edf1f9;
      background: #c3c9d2;
      ul {
        opacity: 1;
        transition: 1s ease;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0.9375rem;
        top: 0.3125rem;
        height: 0.5625rem;
        width: 0.5625rem;
        border-radius: 0.5625rem;
        background: #949ead;
        box-shadow: inset 0.125rem 0.0625rem 0.0625rem #848e9b;
        opacity: 1;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0.25rem;
        top: 0.8125rem;
        height: 0.75rem;
        width: 0.75rem;
        border-radius: 0.75rem;
        background: #949ead;
        box-shadow: inset 0.125rem 0.125rem 0.125rem #848e9b;
        opacity: 1;
      }
    }

    & > .switch__background {
      background-position: 20% 0%;
      &:before {
        content: '';
        width: 0.9375rem;
        height: 0.9375rem;
        border-radius: 50%;
        position: absolute;
        left: -4.8rem;
        top: 0.5rem;
        transform-origin: 3.3125rem 0.625rem;
        animation: ${Keyframes.moon} 0.4s forwards ease;
        transform: rotate(170deg);
      }
      &:after {
        transform: translateY(-250%);
        opacity: 0.5;
      }
    }
  }
`;
