import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Artistly",
  description: "Performing Artist Booking Platform",
};
//layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
