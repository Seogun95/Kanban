import { useState, useEffect, useCallback } from 'react';
import { ScrollUp } from 'assets/svg';
import styled from 'styled-components';
import { throttle } from 'lodash';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = throttle(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 500);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollToTopContainer visible={isVisible} onClick={handleScrollToTop}>
      <ScrollToTopIcon />
    </ScrollToTopContainer>
  );
};

const ScrollToTopContainer = styled.button<{ visible: boolean }>`
  position: fixed;
  z-index: 99999;
  margin: 0.8rem 0.5rem;
  padding: 0;
  bottom: 2.8rem;
  right: 0.2rem;
  background-color: transparent;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(2rem)'};

  ${({ theme, visible }) => theme.media.mobile`
    margin: 0.4rem 0;
    right: .3rem;
    bottom: 0;
    opacity: .8;
    transform: ${visible ? 'translateY(0)' : 'translateY(4rem)'};
    &:hover { opacity: 1 }
  `}
`;

const ScrollToTopIcon = styled(ScrollUp)`
  width: 2.425rem;
  height: 2.425rem;
  transition: 0.2s ease;
  filter: ${({ theme }) => theme.shadow.drop};
  &:hover {
    filter: ${({ theme }) => theme.shadow.drop_Hover};
  }
  &:active {
    filter: ${({ theme }) => theme.shadow.drop} grayscale(0.3);
    transform: scale(0.98);
  }
  ${({ theme }) => theme.media.mobile`
    &:hover, &:active {
      filter: ${theme.shadow.drop};
    }
  `}
`;
