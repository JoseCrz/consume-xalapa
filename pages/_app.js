import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
