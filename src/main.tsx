import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: e => {
      console.error(e);
    }
  }),
  mutationCache: new MutationCache({
    onError: e => {
      console.error(e);
    }
  })
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
