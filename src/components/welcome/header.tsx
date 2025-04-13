"use client";
import { ArrowRight } from "lucide-react";

export function Header() {

  return (
    <>
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">CRDelux</div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          {/* <button className="text-white hover:text-gray-200">Sign In</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100">
              Sign Up
            </button> */}
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-800 transition flex items-center mx-auto">
            Book Now
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </header>
    </>
  );
}
    