import { Geist, Oswald } from "next/font/google";
import AnnouncementBar from "@/components/navbar/AnnouncementBar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { getCatalogMenu, getSearchIndex } from "@/lib/catalog";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "JD Sportswear | Custom Team Uniforms",
  description:
    "Custom sublimated jerseys and team uniforms for basketball, football, soccer, baseball and volleyball. Get a free custom design in 48 hours.",
};

export default async function RootLayout({ children }) {
  const [menu, searchIndex] = await Promise.all([getCatalogMenu(), getSearchIndex()]);

  return (
    <html lang="en" className={`${geistSans.variable} ${oswald.variable} h-full scroll-smooth antialiased`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add attributes to <body> */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <AnnouncementBar />
        <Navbar menu={menu} searchIndex={searchIndex} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
