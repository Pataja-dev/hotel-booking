"use client";

import { useRoom } from "@/hooks/useRoom";
import { useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function AvailableRoomsGallery() {
  const { availableRooms, fetchAvailableRooms } = useRoom();

  useEffect(() => {
    fetchAvailableRooms();
  }, [fetchAvailableRooms]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {availableRooms.map((room, index) => (
        <Card
          key={index}
          className="shadow-lg border rounded-md overflow-hidden group bg-gray-100 hover:bg-gray-200 px-5"
        >
          <div className="relative h-48 ">
            <Image
              src="/bg1.jpg"
              alt={`${room.type} Room`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-md "
            />
            {/* <button className="absolute flex justify-self-center bg-orange-500 text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Book Room
            </button> */}
            <button className="absolute inset-20 bg-orange-300 flex items-center justify-center text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Book Room
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{room.type} Room</h3>
            <p className="text-gray-500 mb-2">Features: Projector, TV</p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{room.pax}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>₱ {room.price}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
