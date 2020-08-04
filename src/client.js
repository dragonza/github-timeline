import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
