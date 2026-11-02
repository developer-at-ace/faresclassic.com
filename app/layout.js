import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fareclassic.com"),
  title: "FareClassic | Flight Search & Travel Information",
  description:
    "Search flight offers and review travel information with FareClassic. Bookings and payments are completed with the airline or ticket seller.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18527164363');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18527164363"
        />
      </head>
      <body className="appBody">{children}</body>
    </html>
  );
}
