"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRoom } from "@/hooks/useRoom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function AddRoom() {
  const { form, onCreateRoom, typeList, isPending } = useRoom();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Button variant={"outline"} onClick={() => setIsDialogOpen(true)}>
          + New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Room Form</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(async (data) => {
              await onCreateRoom(data);
              setIsDialogOpen(false);
            })}
            className="flex flex-col space-y-4"
          >
            <div className="flex gap-5">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="roomNumber"
                  render={({ field }) => (
                    <FormItem className="text-end">
                      <FormLabel>Room Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          placeholder="Room Number"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-start" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="roomType"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Room Type</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value?.toString()}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="w-full py-[22px]">
                            <SelectValue placeholder="Select a Room Type" />
                          </SelectTrigger>
                          <SelectContent>
                            {typeList.map((type) => {
                              return (
                                <SelectItem
                                  key={type.id}
                                  value={type.id.toString()}
                                >
                                  {type.type}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="text-end">
              <Button type="submit" disabled={isPending}>
                {!isPending ? "Add Room" : "Loading..."}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
