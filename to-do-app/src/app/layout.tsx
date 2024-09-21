import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-Do App",
  description: "App to manage to-do list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
