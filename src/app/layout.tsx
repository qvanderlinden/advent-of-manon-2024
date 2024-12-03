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
      <script
        async
        src="https://kit.fontawesome.com/901ba758ee.js"
        crossOrigin="anonymous"
      ></script>
      <body className={`m-0 p-0 min-h-screen w-full ${christmas.className}`}>
        <div className="w-full h-full grid grid-rows-[20px_1fr_20px] grid-cols-[20px_1fr_20px] items-center justify-items-center">
          <div className="row-start-2 col-start-2">{children}</div>
        </div>
        <div className="w-full h-full absolute top-0 left-0">
          {/* <section className="snow">
            <div className="snowflake">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake1">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake2">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake3">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake4">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake5">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake6">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake7">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake8">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake9">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake10">
              <i className="fa-solid fa-snowflake"></i>
            </div>
            <div className="snowflake11">
              <i className="fa-solid fa-snowflake"></i>
            </div>
            <div className="snowflake12">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake13">
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <div className="snowflake14">
              <i className="fa-regular fa-snowflake"></i>
            </div>
          </section> */}
          {/* <section className="mountains">
            <div className="mt1">
              <div className="mtsnow1"></div>
              <div className="snow-peak-1a"></div>
              <div className="snow-peak-1b"></div>
            </div>
            <div className="mt2">
              <div className="snow2"></div>
              <div className="snow-peak-2a"></div>
              <div className="snow-peak-2b"></div>
              <div className="snow-peak-2c"></div>
            </div>
            <div className="mt3">
              <div className="snow3"></div>
              <div className="snow-peak-3a"></div>
              <div className="snow-peak-3b"></div>
              <div className="snow-peak-3c"></div>
              <div className="snow-peak-3d"></div>
            </div>
            <div className="mt4">
              <div className="snow4"></div>
              <div className="snow-peak-4a"></div>
              <div className="snow-peak-4b"></div>
            </div>
            <div className="mt5">
              <div className="snow5"></div>
              <div className="snow-peak-5a"></div>
              <div className="snow-peak-5b"></div>
              <div className="snow-peak-5c"></div>
            </div>
            <div className="mt6">
              <div className="snow6"></div>
              <div className="snow-peak-6a"></div>
              <div className="snow-peak-6b"></div>
              <div className="snow-peak-6c"></div>
              <div className="snow-peak-6d"></div>
            </div>
          </section> */}
        </div>
      </body>
    </html>
  );
}
