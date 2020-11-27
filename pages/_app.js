import "../css/index.css";
import { createClient, Provider, defaultExchanges } from "urql";
import client from "@client";
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
