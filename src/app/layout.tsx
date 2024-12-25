import type { Metadata } from "next";
import localFont from "next/font/local";
import ChristmasBackground from "@/components/christmas-background/background";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <body
        className={`m-safe pr-0 min-h-screen w-full ${christmas.className}`}
      >
        <div className="absolute w-full h-full overflow-hidden z-0">
          <ChristmasBackground />
        </div>
        <div className="w-full h-full grid grid-rows-[20px_1fr_20px] grid-cols-[20px_1fr_20px] items-center justify-items-center z-10">
          <div className="w-full h-full row-start-2 col-start-2 text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
