"use client";

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

export function AddRoom() {
  const { form, onCreateRoom } = useRoom();

  return (
    <Dialog>
      <DialogTrigger>+ New</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Room</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onCreateRoom)}>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="text-end">
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="input"
                    />
                  </FormControl>
                  <FormMessage className="text-xs me-5 -mt-8" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
