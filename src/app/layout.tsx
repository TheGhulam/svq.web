"use client";
import { initializeStore } from "@/lib/infra/mobx/intiailize-store";
import { StoreProvider } from "@/lib/infra/mobx/root-store.provider";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SVQ.ai</title>
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <StoreProvider value={initializeStore()}>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}