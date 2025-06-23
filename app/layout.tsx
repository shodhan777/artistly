import "../styles/globals.css";
import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Artistly",
  description: "Performing Artist Booking Platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}
