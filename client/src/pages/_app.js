import "../sass/main.scss";

import { Provider } from "react-redux";
import { useStore } from "../state/store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
