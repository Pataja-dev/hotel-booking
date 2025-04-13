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
import { Button } from "@/components/ui/button";
import { AddRoom } from "./add-room";

export default function Room() {
  const { errors, roomList } = useRoom();

  const rowsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((roomList?.length ?? 0) / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = roomList?.slice(indexOfFirstRow, indexOfLastRow) ?? [];
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>Room Management</div>
        <AddRoom />
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
              <TableHead className="font-black text-center">
                Room Number
              </TableHead>
              <TableHead className="font-black">Type</TableHead>
              <TableHead className="font-black text-center">Pax</TableHead>
              <TableHead className="font-black text-end">Rate</TableHead>
              <TableHead className="font-black">Status</TableHead>
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
                  <TableCell className="font-medium text-center">
                    {room.room}
                  </TableCell>
                  <TableCell className="font-medium">{room.type}</TableCell>
                  <TableCell className="font-medium text-center">
                    {room.pax}
                  </TableCell>
                  <TableCell className="font-medium text-end">
                    ₱ {room.price}.00
                  </TableCell>
                  <TableCell className="font-bold text-center">
                    <Badge className={statusColor}>{room.status}</Badge>
                    {/* <span className={statusColor}>{room.status}</span> */}
                  </TableCell>
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
