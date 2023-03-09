import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>E-Commerce</title>

      </Head>
      <body>
        <Main />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DN9FGTX7KE"></script>
        <script dangerouslySetInnerHTML={{
          html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());    
          gtag('config', 'G-DN9FGTX7KE');`
        }} />
        <NextScript />
      </body>
    </Html>
  )
}