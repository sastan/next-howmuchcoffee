import "../css/index.css";

import { createClient, Provider } from "urql";
const client = createClient({
  url: "https://graphql.fauna.com/graphql",
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`,
      },
    };
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
