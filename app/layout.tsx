import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: `${process.env.NODE_ENV === "development" ? "(dev) " : ""}Michiel Leunens`,
  description:
    "Uw hybride creative & developer. Wees mee in het digitale tijdperk voor een appel en een ei.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE">
      <body>{children}</body>
    </html>
  );
}
