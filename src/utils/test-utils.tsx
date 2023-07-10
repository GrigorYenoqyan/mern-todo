import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <MockedProvider mocks={[]} addTypename={false}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </MockedProvider>
);

const customRender = (ui: JSX.Element) => render(ui, { wrapper: Wrapper });

// eslint-disable-next-line import/prefer-default-export
export { customRender as render };
