"use client";
import { Search, Calendar, Users } from "lucide-react";

export default function Welcome() {
  return (
    <>
      <main className="flex-grow flex">
          {/* Left Column - Search Form */}
          <div className="w-1/2 flex items-center justify-center px-12">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Find your perfect suite
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <Users
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="number"
                    placeholder="Room for?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // value={destination}
                    // onChange={(e) => setDestination(e.target.value)}
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
                      // value={checkIn}
                      // onChange={(e) => setCheckIn(e.target.value)}
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
                      // value={checkOut}
                      // onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <Users
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  {/* <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">Number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select> */}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition flex justify-center items-center">
                  <Search size={20} className="mr-2" />
                  Search Hotels
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Mantra */}
          <div className="w-1/2 flex  items-center justify-center">
            <div className="text-center px-12">
              <p className="text-xl text-white mb-8 ">
                CRDelux
              </p>
              <h1 className="text-5xl font-bold text-white text-start mb-6 leading-tight">
                Relax. Unwind. Discover comfort, luxury, and unforgettable
                travel moments.
              </h1>
              {/* <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-800 transition flex items-center mx-auto">
                Book Now
                <ArrowRight size={20} className="ml-2" />
              </button> */}
            </div>
          </div>
      </main>
    </>
  );
}
