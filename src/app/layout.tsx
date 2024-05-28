import { Roboto, Playfair_Display } from "next/font/google";

import { DarkModeWrapper } from "./context/DarkModeContext";
import { HamburgerWrapper } from "./context/HamburgerContext";
import { PortfolioMOdalWrapper } from "./context/PortfolioModalContext";
import { ReduxWrapper } from "./features/reduxWrapper";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Najmus Shakib",
  description: "Najmus Shakib Portfolio Website",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair-display",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair_display.variable} ${roboto.variable} bg-[#000]`}
      >
        <ReduxWrapper>
          <PortfolioMOdalWrapper>
            <HamburgerWrapper>
              <DarkModeWrapper>
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
              </DarkModeWrapper>
            </HamburgerWrapper>
          </PortfolioMOdalWrapper>
        </ReduxWrapper>
      </body>
    </html>
  );
}
