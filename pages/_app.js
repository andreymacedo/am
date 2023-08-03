import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '/styles/main.css';
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-out-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PH8Q3E6HMR`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PH8Q3E6HMR', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>


      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
