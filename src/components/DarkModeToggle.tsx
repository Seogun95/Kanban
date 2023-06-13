import { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from 'atom';
import { HiSun } from 'react-icons/hi';
import { WiStars } from 'react-icons/wi';

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
        <Button>{!isDark && <HiSun />}</Button>
        <Background>
          <StyledStar />
        </Background>
      </Switch>
    </>
  );
}

const Switch = styled.label`
  cursor: pointer;
  position: fixed;
  z-index: 99999;
  margin: 0.8rem 0.5rem;
  width: 5.625rem;
  height: 2.5rem;
  bottom: 0rem;
  right: 0rem;
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    & > .switch__button {
      left: calc(100% - 0.3125rem);
      transform: translateX(-100%);
      transition: 0.3s ease-in-out all;
      box-shadow: inset 0.1875rem 0.3125rem 0.1875rem #edf1f9;
      background: #c3c9d2;

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
      svg {
        opacity: 1;
      }
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
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  top: 0.3125rem;
  left: 0.3125rem;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background: #f1c530;
  position: absolute;
  transition: 0.3s ease-in-out all;
  box-shadow: inset 0.1875rem 0.3125rem 0.1875rem #f8a100;
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

const Background = styled.div.attrs({ className: 'switch__background' })`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  background: grey;
  border-radius: 2.5rem;
  position: relative;
  filter: ${({ theme }) => theme.shadow.drop};
  box-shadow: inset -0.25rem -0.25rem 0.375rem rgba(255, 255, 255, 0.3),
    inset 0.25rem 0.25rem 0.375rem rgba(70, 70, 70, 0.12);
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

  &:after {
    content: '';
    display: block;
    transition: 0.3s ease-in-out all;
    position: absolute;
    width: 1.5625rem;
    height: 1.5625rem;
    left: 0.3125rem;
    border-radius: 1.5625rem;
    box-shadow: 1.875rem 1.875rem 0rem rgba(255, 255, 255, 1),
      3.125rem 1.25rem 0rem rgba(255, 255, 255, 1),
      4.0625rem 1.5625rem 0rem rgba(255, 255, 255, 1),
      1.8125rem 1.75rem 0rem rgba(215, 215, 215, 1),
      3.0625rem 1.125rem 0rem rgba(215, 215, 215, 1),
      4.0625rem 1.4375rem 0rem rgba(215, 215, 215, 1);
  }
`;

const StyledStar = styled(WiStars)`
  position: absolute;
  left: 0.3125rem;
  top: 0rem;
  font-size: 1.875rem;
  color: white;
  opacity: 0;
  transition: 0.3s ease-in-out all;
  text-shadow: 0.625rem 0.625rem 0rem rgba(255, 255, 255, 0.8),
    1.25rem 0.3125rem 0rem rgba(255, 255, 255, 1);
`;
