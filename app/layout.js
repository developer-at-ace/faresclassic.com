import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fareclassic.com"),
  title: "FareClassic | Flight Search & Travel Information",
  description:
    "Search flight offers and review travel information with FareClassic. Bookings and payments are completed with the airline or ticket seller.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="appBody">{children}</body>
    </html>
  );
}
