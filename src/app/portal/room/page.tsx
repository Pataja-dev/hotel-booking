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
      <div className="flex space-x-2">
        <div className="relative w-full">Room Management</div>
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
              <TableHead>Room Number</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Pax</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRows.map((room, index) => {
              let statusColor = "text-gray-500";

              if (room.status === "available") {
                statusColor = "text-green-500";
              } else if (room.status === "occupied") {
                statusColor = "text-red-500";
              } else if (room.status === "reserved") {
                statusColor = "text-yellow-500";
              } else if (room.status === "maintenance") {
                statusColor = "text-gray-500";
              }

              return (
                <TableRow key={index}>
                  <TableCell>{room.room}</TableCell>
                  <TableCell>{room.type}</TableCell>
                  <TableCell>₱{room.price}.00</TableCell>
                  <TableCell>
                    <span className={statusColor}>{room.status}</span>
                  </TableCell>
                  <TableCell>{room.pax}</TableCell>
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
