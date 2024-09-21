import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./convex-client-provider";

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
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
