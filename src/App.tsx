// style files
import '@/assets/styles/main.scss';

import { useMemo } from 'react';

// providers & routers
import { routes } from './navigation/routes';
import { MantineProvider } from '@mantine/core';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <MantineProvider>
        <ApplicationRouter />
      </MantineProvider>
    </>
  );
}

const ApplicationRouter = () => {
  const router = useMemo(() => createBrowserRouter(routes), [routes]);

  return <RouterProvider router={router} />;
};

export default App;
