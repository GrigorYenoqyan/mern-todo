import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TodoApp from 'components/TodoApp/TodoApp';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import 'styles/styles.output.css';
import { PanelContextProvider } from 'components/PanelContext';

const queryClient = new QueryClient();

const apolloClient = new ApolloClient({
  uri: `${process.env.API_URL}/graphql`,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  console.log('App');
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <PanelContextProvider>
          <p>{new Date().toDateString()}</p>
          <TodoApp />
        </PanelContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export default App;
