import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
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
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={`antialiased ${montserrat.className}`}>
        <ClientWrapper>
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
