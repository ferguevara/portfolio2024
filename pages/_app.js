import '../styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CL71BQ2NNY`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CL71BQ2NNY');
          `,
        }}
      />

      {/* Google Search Console Verification */}
      <Script
        id="google-search-console"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            <meta name="google-site-verification" content="2mrPXdIQRZerITtwjUnK5HC9k4YnwkXGrmVvefGbfJs" />
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


