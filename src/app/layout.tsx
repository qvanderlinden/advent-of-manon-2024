import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const christmas = localFont({
  src: "./fonts/ChristmasBell.otf",
});

export const metadata: Metadata = {
  title: "Advent Of Manon 2024",
  description: "Advent of Manon 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 min-h-screen w-full ${christmas.className}`}>
        <div className="w-full h-full grid grid-rows-[20px_1fr_20px] grid-cols-[20px_1fr_20px] items-center justify-items-center">
          <div className="row-start-2 col-start-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
