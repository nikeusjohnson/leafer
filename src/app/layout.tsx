import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  weight: "400 900",
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leafer.co.uk"),
  title: {
    default: "Compare UK medical cannabis clinics | Leafer",
    template: "%s | Leafer",
  },
  description:
    "Compare UK medical cannabis clinics, check published consultation fees and find the regulator record for each service. Explore free UK patient guides.",
  openGraph: { siteName: "Leafer", locale: "en_GB", type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={dmSans.variable}>
      <body className="flex min-h-dvh flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
