import '@/styles/globals.css'
import '../styles/component.css';
import LoadingPage from "../components/Loading.jsx"

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? <LoadingPage />: <> </>}
      <Component {...pageProps} />
    </>
  );
}
