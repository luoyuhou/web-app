import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../helper/config/config";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
