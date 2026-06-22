import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Andrew Graff Leota | Software, Data, Cybersecurity & AI",
  description:
    "Portfolio of Andrew Graff Leota, a Wellington-based developer working across software engineering, data engineering, cybersecurity, AI automation and content creation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
