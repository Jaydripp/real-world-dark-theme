import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real World Dark Theme App",
  description: "TRW Gym Member Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <meta property="og:image" content="https://bolt.new/static/og_default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
