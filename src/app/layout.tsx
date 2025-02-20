import bottom from "@/assets/images/bottom_bg_img.png";
import top from "@/assets/images/top_bg_img.png";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "EAGLEAI",
  description:
    "EAGLEAI Research is a platform that provides AI-driven insights for trading and investing.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#000614]`}>
        <Toaster />
        <div className="relative min-h-screen">
          <Image
            src={top}
            alt="background-image-1"
            className="absolute z-0 top-0 left-0 3xl:w-full"
          />
          <Image
            src={bottom}
            alt="background-image-2"
            className="absolute z-0 bottom-0 right-0"
          />

          <div className="relative">
            <Navbar />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
