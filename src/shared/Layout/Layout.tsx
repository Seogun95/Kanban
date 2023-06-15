import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import { DarkModeToggle, ScrollToTop } from 'components';

export function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <Wrapper>
          <Header />
          <Outlet />
          <ScrollToTop />
          <DarkModeToggle />
        </Wrapper>
      </Suspense>
    </>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 5.125rem 10px 1rem;
`;
