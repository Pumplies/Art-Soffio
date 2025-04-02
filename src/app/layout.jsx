import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";

import ClientWrapper from "./components/clientWrapper";
import { metadata } from "./metadata";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
        <meta property="og:image" content="https://artsoffio-b2b.com/logoBurger.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Косметика ART SOFFIO оптом" />
        <meta property="og:description" content="Надежная косметика для бизнеса" />
        <meta property="og:url" content="https://artsoffio-b2b.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16969659650"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16969659650');
            `,
          }}
        />
      </head>
      <body className={`antialiased ${montserrat.className}`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}