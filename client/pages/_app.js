import "../sass/main.scss";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/state/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
