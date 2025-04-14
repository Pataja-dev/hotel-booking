"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetchUsers } from "@/hooks/useUser";
import { Pagination } from "@/components/pagination";
import { Switch } from "@/components/ui/switch";
import { AddStaff } from "./add-staff";

export default function Staff() {
  const { users } = useFetchUsers();

  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((users?.length ?? 0) / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users?.slice(indexOfFirstRow, indexOfLastRow) ?? [];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-full">Staff User Management</div>
        <AddStaff />
      </div>
      <div className="rounded-lg border overflow-x-auto">
        <Table className="min-w-max w-full">
          <TableCaption className="py-6">List of Staffs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRows
              .filter((users) => users.role === "staff")
              .map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {user.first_name} {user.last_name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      <Switch checked={true} />
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
