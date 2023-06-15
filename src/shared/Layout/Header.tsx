import { logoActive, logoHover, logo } from 'assets/svg';
import { isDarkAtom } from 'atom';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import _ from 'lodash';

interface IHeader {
  isScrolled: boolean;
  isScrollTop: boolean;
}
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = useRecoilValue(isDarkAtom);

  const [scroll, setScroll] = useState<IHeader>({
    isScrolled: false,
    isScrollTop: true,
  });
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const homeCheck = location.pathname === '/';
  const scrollTop = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScroll(prevState => {
        if (scrollTop > lastScrollTop && scrollTop > 0) {
          return { ...prevState, isScrolled: true };
        } else {
          return { isScrollTop: false, isScrolled: false };
        }
      });
      setLastScrollTop(scrollTop);
    };

    const handleResize = _.debounce(() => {
      if (scrollTop === 0) {
        setScroll({ isScrollTop: true, isScrolled: false });
      }
      setLastScrollTop(scrollTop);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollTop, scrollTop]);

  useEffect(() => {
    if (scrollTop === 0) {
      setScroll({ isScrollTop: true, isScrolled: false });
    }
    setLastScrollTop(scrollTop);
  }, [location, scrollTop]);

  const scrollToTop = () => {
    if (homeCheck && scrollTop === 0) return;
    if (!homeCheck && scrollTop === 0) {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderStyles
      className={scroll.isScrolled ? 'isHidden' : ''}
      scrollTop={`${scroll.isScrollTop}`}
    >
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLink
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? 'active' : ''}
          >
            <LogoImg src={logo} isDark={isDark} />
          </HeaderLink>
        </HeaderLogoContainer>
      </HeaderContainer>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header<{ scrollTop: string }>`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: 99999;
  ${({ scrollTop }) =>
    scrollTop === 'true'
      ? css`
          background-color: transparent;
        `
      : css`
          ${props => props.theme.DarkBlur}
        `}
  &.isHidden {
    transform: translateY(-100%);
    border: none;
  }
`;
const HeaderContainer = styled.div`
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  width: 100%;
  padding: 0 1rem;
`;
const HeaderLogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  div {
    ${props => props.theme.CursorActive};
  }
`;

const LogoImg = styled.img<{ isDark: boolean }>`
  content: url(${logo});
  width: 2.5rem;
  height: 100%;
  padding: 0.2rem;
  filter: ${({ isDark }) => isDark && 'invert(1)'};
`;

const HeaderLink = styled.a`
  font-weight: 900;
  font-size: 1.2rem;
  transition: 0.1s ease-in;
  &:hover {
    color: ${props => props.theme.accentColor};
  }
  &:before {
    content: '';
    ${({ theme }) => theme.AbsoluteTL};
    ${({ theme }) => theme.wh100};
  }
  &.active {
    &:hover ${LogoImg} {
      content: url(${logoHover});
    }
    &:active ${LogoImg} {
      content: url(${logoActive});
    }
  }
`;
