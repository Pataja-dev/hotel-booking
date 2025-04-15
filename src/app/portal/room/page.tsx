"use client";

import { useState } from "react";
import { useRoom } from "@/hooks/useRoom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { RoomStatus } from "@/types/room.types";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Room() {
  const { errors, roomList, filterRooms } = useRoom();

  const rowsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((roomList?.length ?? 0) / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = roomList?.slice(indexOfFirstRow, indexOfLastRow) ?? [];

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className="relative w-full">Room Management</div>
      </div>
      <div className="text-end">
        <Input onChange={(e) => filterRooms(e.target.value)}></Input>
      </div>
      {errors.room && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errors.room}
        </div>
      )}
      <div className="rounded-lg border overflow-x-auto">
        <Table className="min-w-max w-full">
          <TableCaption className="py-6">A list of Rooms.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-black">Room Number</TableHead>
              <TableHead className="font-black">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-1 cursor-pointer hover:underline">
                    <span>Type</span> <ChevronDown></ChevronDown>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onSelect={() => filterRooms("")}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Standard")}>
                      Standard
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Barkada")}>
                      Barkada
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Family")}>
                      Family
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Executive")}>
                      Executive
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableHead>
              <TableHead className="font-black">Rate</TableHead>
              <TableHead className="font-black">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-1 cursor-pointer hover:underline">
                    <span>Status</span> <ChevronDown></ChevronDown>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onSelect={() => filterRooms("")}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Available")}>
                      Available
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Occupied")}>
                      Occupied
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => filterRooms("Reserved")}>
                      Reserved
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => filterRooms("Maintenance")}
                    >
                      Maintenance
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableHead>
              <TableHead className="font-black">Pax</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRows.map((room, index) => {
              let statusColor = "text-gray-500";

              if (room.status === RoomStatus.AVAILABLE) {
                statusColor =
                  "bg-green-500 hover:bg-green-700 text-white font-bold";
              } else if (room.status === RoomStatus.OCCUPIED) {
                statusColor =
                  "bg-red-500 hover:bg-red-700 text-white font-bold";
              } else if (room.status === RoomStatus.RESERVED) {
                statusColor =
                  "bg-yellow-500 hover:bg-yellow-700 text-white font-bold";
              } else if (room.status === RoomStatus.MAINTENANCE) {
                statusColor =
                  "bg-gray-500 hover:bg-gray-700 text-white font-bold";
              }

              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{room.room}</TableCell>
                  <TableCell className="font-medium">{room.type}</TableCell>
                  <TableCell className="font-medium">
                    ₱ {room.price}.00
                  </TableCell>
                  <TableCell className="font-bold">
                    <Badge className={statusColor}>{room.status}</Badge>
                    {/* <span className={statusColor}>{room.status}</span> */}
                  </TableCell>
                  <TableCell className="font-medium">{room.pax}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
