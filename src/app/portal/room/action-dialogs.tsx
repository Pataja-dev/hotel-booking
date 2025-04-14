"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EllipsisVertical, FolderPen, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z.object({
  roomNumber: z.string(),
});

export type SignupFormValue = z.infer<typeof signupSchema>;

export function ActionDialogs({ roomNumber }: { roomNumber: number }) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const form = useForm<SignupFormValue>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      roomNumber: "",
    },
  });

  function onUpdateRoom(data: SignupFormValue) {
    console.log("Update Room Number: ", data.roomNumber);
  }

  function onDeleteRoom() {
    console.log("Delete Room Number: ", roomNumber);
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="space-y-1">
          <DropdownMenuItem
            onClick={() => setIsEditDialogOpen(true)}
            className="text-blue-500 hover:text-white flex gap-1 items-center"
          >
            <FolderPen color="blue" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setIsDeleteDialogOpen(true)}
            className="text-red-500 hover:text-white flex gap-1 items-center"
          >
            <Trash2 color="red" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onUpdateRoom)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Room Form</DialogTitle>
              </DialogHeader>
              <FormField
                control={form.control}
                name="roomNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="button"
                  onClick={() => setIsEditDialogOpen(false)}
                  variant={"outline"}
                  className="bg-gray-200"
                >
                  Cancel
                </Button>
                <Button
                  variant={"outline"}
                  className="bg-blue-500 text-white"
                  type="submit"
                >
                  Update
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Form>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action will delete room {roomNumber}.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => setIsDeleteDialogOpen(false)}
              variant={"outline"}
              className="bg-gray-200"
              type="button"
            >
              Cancel
            </Button>
            <Button
              onClick={onDeleteRoom}
              variant={"outline"}
              className="bg-red-500 text-white"
              type="button"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
