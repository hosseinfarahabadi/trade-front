"use client";
import NextUIProviderIndex from "@/layout/NextUIProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import "../globals.css";
import { Body } from "@/layout/Body";
import { NavbarComponent } from "@/layout/Navbar";
import { SidebarComponent } from "@/layout/Sidebar";
import { useState } from "react";
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <html className=" font-IranYekanNumber" dir="rtl" lang="en">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
        <title>admin</title>
      </head>
      <body className="bg-asiatech-gray-100 min-h-screen">
        <NextUIProviderIndex>
          <SidebarComponent open={open} setOpen={setOpen} />
          <div
            className={`min-h-screen h-full w-full overflow-hidden transition-all duration-300 main-page ${
              open ? "pr-56" : "pr-14"
            }`}
          >
            <NavbarComponent />
            <Body>{children}</Body>
          </div>
        </NextUIProviderIndex>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
