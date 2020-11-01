import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
