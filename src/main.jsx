import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
const GOOGLE_ANALYTICS = import.meta.env.VITE_GOOGLE_ANALYTICS;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: false,
    },
  },
});

if (GOOGLE_ANALYTICS) {
  ReactGA.initialize(GOOGLE_ANALYTICS);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
