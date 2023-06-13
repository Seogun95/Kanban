import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from 'App';

import { Home } from 'pages';
import { Layout, NotFound } from 'shared';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: (
        <Suspense fallback={null}>
          <NotFound />
        </Suspense>
      ),
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
