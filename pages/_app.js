import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Google Search Console */}
      <Script
        id="google-search-console"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;