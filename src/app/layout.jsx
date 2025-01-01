import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Made by Rohit Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  );
}
