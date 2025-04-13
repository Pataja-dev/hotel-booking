"use client";
import { type ReactNode } from "react";
import Background from "@/components/welcome/background";
import { Header } from "@/components/welcome/header";

export default function PortalLayout({ children }: { children: ReactNode }) {


  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <Background />
        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          {/* <Header toggleSidebar={toggleSidebar} /> */}
            <Header/>

          {/* Welcome Content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
