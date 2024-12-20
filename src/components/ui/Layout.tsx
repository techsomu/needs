"use client";
import React from "react";

import Footer from "./Footer";
import BottomBar from "./BottomBar";
import Navbar from "./Navbarr";
import SmallNavbar from "./SmallNavbar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <body>
        <div>
          <SmallNavbar />
        </div>
        <html lang="en">
          <main>{children}</main>

          <Footer />
          <BottomBar />
        </html>
      </body>
    </>
  );
}
