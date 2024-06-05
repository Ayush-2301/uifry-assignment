import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const font = localFont({ src: "../assets/ClashDisplay-Variable.woff2" });

export const metadata: Metadata = {
  title: "Uifry",
  description: "Uifry landing page assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("relative", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className=" md:px-24  sm:px-12 px-6 ">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
