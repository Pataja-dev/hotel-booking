"use client";
import { useState, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/portal/header";
import { Sidebar } from "@/components/portal/sidebar";
import { Toaster } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/sonner";

export default function PortalLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        isOpen={sidebarOpen}
        isMobile={isMobile}
        closeSidebar={() => setSidebarOpen(false)}
      />
      <div
        className={cn(
          "flex flex-col flex-1",
          sidebarOpen && !isMobile ? "md:ml-64" : "ml-0"
        )}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        {/* <Toaster richColors /> */}
        <Toaster expand={true} richColors position="top-right" theme="light" />
      </div>
    </div>
  );
}
