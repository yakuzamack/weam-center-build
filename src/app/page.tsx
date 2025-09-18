// Static root page with meta refresh redirect to default locale
export default function IndexRedirect() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="refresh" content="0; url=/en" />
        <link rel="canonical" href="/en" />
        <title>Al WEAM Medical Centre - Redirecting...</title>
        <meta name="robots" content="noindex,follow" />
        <style>{`
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: system-ui, sans-serif;
            text-align: center;
            margin: 0;
          }
          a { color: #4f46e5; }
        `}</style>
      </head>
      <body>
        <div>
          <h1>Al WEAM Medical Centre</h1>
          <p>Redirecting to English site...</p>
          <p>
            <a href="/en">Click here if not redirected automatically</a>
          </p>
          <p>
            <a href="/ar">العربية</a>
          </p>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (!window.location.pathname.startsWith('/en') && !window.location.pathname.startsWith('/ar')) {
              const preferArabic = navigator.language && navigator.language.startsWith('ar');
              window.location.href = preferArabic ? '/ar' : '/en';
            }
          `,
          }}
        />
      </body>
    </html>
  );
}
