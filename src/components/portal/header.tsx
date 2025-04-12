"use client";
import { Button } from "@/components/ui/button";
import { useFetchUsers } from "@/hooks/useUser";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { users, authUserId } = useFetchUsers();

  const currentUser = users.find((user) => user.id === authUserId);
  const username = currentUser
    ? `${currentUser.first_name} ${currentUser.last_name}`
    : "Username";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getPageTitle = () => {
    switch (pathname) {
      case "/portal/dashboard":
        return "Dashboard";
      case "/portal/user-profile":
        return "Profile";
      case "/portal/booking-list":
        return "Booking List";
      case "/portal/room":
        return "Rooms";
      case "/portal/staff":
        return "Staffs";
      case "/portal/report":
        return "Reports";
      case "/portal/guest":
        return "Guests";
    }
  };

  return (
    <header className="bg-white border-b p-4 flex justify-between items-center w-full sticky top-0 z-10">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="mr-4 md:hidden text-white"
        >
          <Menu size={20} />
        </Button>
        <h2 className="text-xl font-semibold text-black">{getPageTitle()}</h2>
      </div>
      <div className="relative flex items-center space-x-4" ref={dropdownRef}>
        <div
          className="flex items-center cursor-pointer text-white hover:text-gray-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mr-2 font-medium text-gray-900">{username}</span>
          <ChevronDown
            className={`text-gray-900 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <div className="absolute top-10 right-0 w-40 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <Link href="/portal/user-profile" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-right px-2 py-2 hover:bg-gray-100 transition-colors"
              >
                Profile
              </Button>
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-right px-2 py-2 hover:bg-gray-100 transition-colors"
              >
                Logout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
