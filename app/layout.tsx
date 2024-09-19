import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "dela bahmani - portfolio",
  description: "Welcome to dela bahmani's portfolio. Explore my projects, and skills in web development.",
  keywords: ["dela bahmani", "front-end developer", "web developer", "javascript developer", "react developer", "nextjs", "typescript", "html5", "css3", "tailwindcss", "responsive design", "ui/ux design", "web application developer", "front-end projects", "portfolio"],
  authors: [{name: "Dela Bahmani"}],
  creator: "Dela Bahmani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100dvh]">
        <div>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
