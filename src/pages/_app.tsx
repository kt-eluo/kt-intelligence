import type { AppProps } from "next/app";
import "./globals.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);

export default MyApp;
