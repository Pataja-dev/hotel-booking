"use client";
import { useState } from "react";
import  Image  from "next/image";
// import { Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import {  ArrowRight } from "lucide-react";
import { Header } from "./portal/header";

export default function Welcome() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [destination, setDestination] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState("");
const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src="/bg.jpg" alt="Beautiful hotel view" fill />
        <div className="absolute inset-0 bg-gray-700 opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Header toggleSidebar={toggleSidebar} />
        {/* <header className="py-6 px-8 flex justify-between items-center">
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
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Deals
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button className="text-white hover:text-gray-200">Sign In</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100">
              Sign Up
            </button>
          </div>
        </header> */}

        {/* Main Content */}
        <main className="flex-grow flex">
          {/* Left Column - Search Form */}
          {/* <div className="w-1/2 flex items-center justify-center px-12">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Find your perfect stay
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="date"
                      placeholder="Check in"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="date"
                      placeholder="Check out"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <Users
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">Number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition flex justify-center items-center">
                  <Search size={20} className="mr-2" />
                  Search Hotels
                </button>
              </div>
            </div>
          </div> */}

          {/* Right Column - Mantra */}
          <div className="w-full flex  items-center justify-center">
            <div className="text-center px-12">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Relax. Unwind. Discover comfort, luxury, and unforgettable
                travel moments.
              </h1>
              {/* <p className="text-xl flex text-white mb-8 max-w-lg items-center justify-center">
                Unforgettable experiences await. Find extraordinary
                accommodations tailored just for you, anywhere in the world.
              </p> */}
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-800 transition flex items-center mx-auto">
                Book Now
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
