"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddStaff() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="cursor-pointer border border-gray-200 rounded-lg text-inline flex gap-1 py-1.5 px-3 hover:bg-gray-200">
          <span>+</span>
          <span>Staff</span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Staff Form</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
