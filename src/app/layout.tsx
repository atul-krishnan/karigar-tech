import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/provider";

export const metadata: Metadata = {
  title: "Karigar",
  description: "Procurement OS for Indian MSMEs. Launching first across textile clusters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
