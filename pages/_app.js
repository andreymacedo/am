import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import '/styles/main.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-out-sine',
      delay: 100,
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
