"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Bed,
  NotebookPen,
  ChevronDown,
  ChevronRight,
  Users,
  X,
  ClipboardMinus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
// import { useFetchUsers } from "@/hooks/useUser";
// import { Role } from "@/types/user.types";

interface SideBarItemProps {
  icon?: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface SideBarDropDownProps {
  icon?: React.ReactNode;
  label: string;
  children: React.ReactElement[];
}

const SidebarItem = ({
  icon,
  label,
  href,
  isActive = false,
  onClick,
}: SideBarItemProps) => (
  <Link
    href={href}
    className={cn(
      "flex items-center py-2 px-4 space-x-2 rounded-lg hover:bg-gray-100",
      isActive && "bg-gray-100"
    )}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export const SidebarDropdown = ({ icon, label, children }: SideBarDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </Button>
      {isOpen && <div className="ml-6 mt-2 space-y-2">{children}</div>}
    </div>
  );
};

export function Sidebar({
  isOpen,
  isMobile,
  closeSidebar,
}: {
  isOpen: boolean;
  isMobile: boolean;
  closeSidebar: () => void;
}) {
//   const { users, authUserId } = useFetchUsers();
//   const authUser = users.find((user) => user.id === authUserId);

    // const isSuperAdmin = authUser?.role === Role.SUPER_ADMIN;
    // const isStaff = authUser?.role === Role.STAFF;

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-white border-r transition-all duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isMobile ? "w-64" : "w-64 md:w-64 md:translate-x-0"
        )}
      >
        <div className="p-4 bg-[#ACABAC] h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/CARDOOXX.png"
                alt="CRDX Logo"
                priority
                width={100}
                height={100}
                className="h-12 w-12 bg-[#ACABAC] p-1 rounded-full object-contain"
              />
              <h1 className="text-2xl font-bold">CRDX Hotel</h1>
            </div>
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={closeSidebar}>
                <X size={20} />
              </Button>
            )}
          </div>
          <nav className="space-y-2">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              href="/portal/dashboard"
              onClick={isMobile ? closeSidebar : undefined}
            />
            <SidebarItem
              icon={<Bed size={20} />}
              label="Rooms"
              href="/portal/room"
              onClick={isMobile ? closeSidebar : undefined}
            />
            <SidebarItem
              icon={<Users size={20} />}
              label="Staff"
              href="/portal/staff"
              onClick={isMobile ? closeSidebar : undefined}
            />
            <SidebarItem
              icon={<NotebookPen size={20} />}
              label="Booking List"
              href="/portal/booking-list"
              onClick={isMobile ? closeSidebar : undefined}
            />
            <SidebarItem
              icon={<ClipboardMinus size={20} />}
              label="Report"
              href="/portal/report"
              onClick={isMobile ? closeSidebar : undefined}
            />
            {/* <SidebarDropdown
              icon={<HandCoins size={20} />}
              label="Transactions"
            >
              <SidebarItem
                label="Donation Transactions"
                href="/portal/dashboard/treasurer/church-donations"
                onClick={isMobile ? closeSidebar : undefined}
              />
              <SidebarItem
                label="Failed Transactions"
                href="/portal/dashboard/treasurer/failed-transactions"
                onClick={isMobile ? closeSidebar : undefined}
              />
            </SidebarDropdown>
            <SidebarDropdown icon={<CreditCard size={20} />} label="Xendit">
              <SidebarItem
                label="Payments"
                href="/portal/xendit/payments"
                onClick={isMobile ? closeSidebar : undefined}
              />
              <SidebarItem
                label="Invoices"
                href="/portal/xendit/transactions"
                onClick={isMobile ? closeSidebar : undefined}
              />
            </SidebarDropdown> */}
            {/* {isSuperAdmin && (
              <SidebarItem
                icon={<Building2 size={20} />}
                label="Districts"
                href="/portal/districts"
                onClick={isMobile ? closeSidebar : undefined}
              />
            )}
            {isSuperAdmin && (
              <SidebarItem
                icon={<Church size={20} />}
                label="Church"
                href="/portal/church"
                onClick={isMobile ? closeSidebar : undefined}
              />
            )}
            {isSuperAdmin && (
              <SidebarItem
                icon={<Users size={20} />}
                label="Users"
                href="/portal/users"
                onClick={isMobile ? closeSidebar : undefined}
              />
            )}
            {isSuperAdmin && (
              <SidebarItem
                icon={<Archive size={20} />}
                label="Archive"
                href="/portal/archive"
                onClick={isMobile ? closeSidebar : undefined}
              />
            )} */}
          </nav>
        </div>
      </div>
    </>
  );
}
