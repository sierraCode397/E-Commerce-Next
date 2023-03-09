import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DN9FGTX7KE" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());    
          gtag('config', 'G-DN9FGTX7KE');`}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default App;
