import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

const roboto = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony Haunschmidt",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${roboto.className} text-black dark:text-white dark:bg-black ease-in-out duration-300 transition-[background-color] antialiased`}
      >
        <div className="transition-none duration-0 ease-linear">{children}</div>
      </body>
    </html>
  );
}
