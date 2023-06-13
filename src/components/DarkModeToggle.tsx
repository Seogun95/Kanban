import { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from 'atom';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const toggleDarkMode = useCallback(() => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/sound/click.mp3`);
    audio.play();
    setIsDark(prev => !prev);
  }, [setIsDark]);

  return (
    <>
      <Input
        id="darkModeToggle"
        type="checkbox"
        onChange={toggleDarkMode}
        checked={isDark}
      />

      <Switch htmlFor="darkModeToggle">
        <Button />
        <Background />
      </Switch>
    </>
  );
}

const Switch = styled.label`
  cursor: pointer;
  position: fixed;
  z-index: 99999;
  margin: 0.8rem 0.5rem;
  width: 90px;
  height: 40px;
  bottom: 0px;
  right: 0px;
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    & > .switch__button {
      left: calc(100% - 5px);
      transform: translateX(-100%);
      transition: 0.3s ease-in-out all;
      box-shadow: inset 3px 5px 3px #edf1f9;
      background: #c3c9d2;

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 15px;
        top: 5px;
        height: 9px;
        width: 9px;
        border-radius: 9px;
        background: #949ead;
        box-shadow: inset 2px 1px 1px #848e9b;
        opacity: 1;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 4px;
        top: 13px;
        height: 12px;
        width: 12px;
        border-radius: 12px;
        background: #949ead;
        box-shadow: inset 2px 2px 2px #848e9b;
        opacity: 1;
      }
    }

    & > .switch__background {
      background-position: 20% 0%;

      &:before {
        opacity: 0.9;
      }

      &:after {
        transform: translateY(250%);
        opacity: 0.5;
      }
    }
  }
`;

const Button = styled.div.attrs({ className: 'switch__button' })`
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #f1c530;
  position: absolute;
  transition: 0.3s ease-in-out all;
  box-shadow: inset 3px 5px 3px #f8a100;
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
`;

const Background = styled.div.attrs({ className: 'switch__background' })`
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  background: grey;
  border-radius: 40px;
  position: relative;
  filter: ${({ theme }) => theme.shadow.drop};
  box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.3),
    inset 4px 4px 6px rgba(70, 70, 70, 0.12);
  background: radial-gradient(
    circle at center right,
    #347ab2,
    #347ab2 10%,
    #4886b7 10%,
    #4886b7 20%,
    #5c93bf 20%,
    #5c93bf 30%,
    #699ec6 30%,
    #699ec6 40%,
    #494e5c 40%,
    #494e5c 50%,
    #404350 50%,
    #404350 60%,
    #2d333c 60%,
    #2d333c 70%,
    #242830 70%,
    #242830 80%,
    #111 80%,
    #111 90%
  );
  background-size: 250% 100%;
  background-position: 100% 0%;
  transition: 0.3s ease-in-out background;
  overflow: hidden;

  &:before {
    content: '★';
    display: block;
    position: absolute;
    left: 12px;
    top: 8px;
    font-size: 8px;
    color: white;
    opacity: 0;
    transition: 0.3s ease-in-out all;
    text-shadow: 10px 10px 0px rgba(255, 255, 255, 0.8),
      20px 5px 0px rgba(255, 255, 255, 1);
  }

  &:after {
    content: '';
    display: block;
    transition: 0.3s ease-in-out all;
    position: absolute;
    width: 25px;
    height: 25px;
    left: 5px;
    border-radius: 25px;
    box-shadow: 30px 30px 0px rgba(255, 255, 255, 1),
      50px 20px 0px rgba(255, 255, 255, 1), 65px 25px 0px rgba(255, 255, 255, 1),
      29px 28px 0px rgba(215, 215, 215, 1), 49px 18px 0px rgba(215, 215, 215, 1),
      65px 23px 0px rgba(215, 215, 215, 1);
  }
`;
