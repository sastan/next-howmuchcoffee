import { createClient, Provider, defaultExchanges } from "urql";
import { devtoolsExchange } from "@urql/devtools";
const client = createClient({
  url: "https://graphql.fauna.com/graphql",
  exchanges: [devtoolsExchange, ...defaultExchanges],

  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`,
      },
    };
  },
});

export default client;
