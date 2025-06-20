import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../component/Layout";
import theme from "../lib/theme";
import "../styles.css";


function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
              <Component {...pageProps} />
          </Layout>
    
    </ThemeProvider>
  );
}

export default App;
