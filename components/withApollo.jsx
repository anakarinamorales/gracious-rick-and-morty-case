import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { fetch } from 'isomorphic-unfetch';

const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  fetch,
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
