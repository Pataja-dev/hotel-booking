import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-500 shadow-md py-6  h-20">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="space-x-8 text-gray-700 text-lg font-medium">
          <Link href="/">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/rooms">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">
              Rooms
            </span>
          </Link>
          <Link href="/booking">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">
              Booking
            </span>
          </Link>
          <Link href="/about">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header