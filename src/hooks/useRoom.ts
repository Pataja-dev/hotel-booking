import { useEffect, useState, useTransition } from "react";
import supabaseBrowser from "@/lib/supabase/client";
import { RoomsProps, TypeProps } from "@/types/room.types";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRoom } from "@/app/portal/room/actions";
// import { toast } from "sonner";

const createRoomSchema = z.object({
  roomNumber: z.string().min(1, { message: "Must be greater than 1" }),
  roomType: z.string(),
});

export type CreateRoomFormValue = z.infer<typeof createRoomSchema>;

export function useRoom() {
  const [availableRooms, setAvailableRooms] = useState<RoomsProps[]>([]);
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreateRoomFormValue>({
    mode: "onChange",
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      roomType: undefined,
    },
  });

  const onCreateRoom = (data: CreateRoomFormValue) => {
    const formData = new FormData();
    formData.append("roomNumber", data.roomNumber);
    formData.append("roomType", data.roomType);

    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const result = await createRoom(formData);

        if (result?.success) {
          setSuccess("Room created.");
          setError(null);
          // toast.success("Room created.");
        } else {
          setError("Failed to create a room.");
          // toast.error(result?.error || "Failed to create a room.");
        }
      } catch {
        setError("An error occured while creating room.");
        // toast.error("An error occured while creating room.");
      }
    });
  };

  const [roomList, setRoomList] = useState<RoomsProps[]>([]);
  const [typeList, setTypeList] = useState<TypeProps[]>([]);
  const [errors, setErrors] = useState({
    room: "",
    type: "",
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const supabase = supabaseBrowser();

      const { data, error } = await supabase
        .from("room_details")
        .select("room, type, price, status, pax")
        .order("room", { ascending: true });
      const { data, error } = await supabase
        .from("room_details")
        .select("room, type, price, status, pax")
        .order("room", { ascending: true });

      if (error) {
        setErrors((prev) => ({
          ...prev,
          room: "Error fetching rooms. Please try again later.",
        }));
        return;
      }
      const transformedData: RoomsProps[] = data.map((room) => {
        return {
          room: room.room,
          type: room.type,
          price: room.price,
          status: room.status.toUpperCase(),
          pax: room.pax,
        };
      });

      setRoomList(transformedData);
    };
    fetchRooms();

    const fetchTypes = async () => {
      const supabase = supabaseBrowser();

      const { data, error } = await supabase.from("room_types").select("*");

      if (error) {
        setErrors((prev) => ({
          ...prev,
          type: "Error fetching room types.",
        }));
        return;
      }

      const transformedData: TypeProps[] = data.map((types) => {
        return {
          id: types.id,
          type: types.type,
          description: types.description,
          pax: types.pax,
          price: types.price,
        };
      });

      setTypeList(transformedData);
    };
    fetchTypes();
  }, []);

  const fetchAvailableRooms = async () => {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("room_details")
      .select("room, type, price, status, pax")
      .eq("status", "available")
      .order("room", { ascending: true });

    if (error) {
      setErrors((prev) => ({
        ...prev,
        room: "Error fetching available rooms. Please try again later.",
      }));
      return;
    }

    const transformedAvailableRooms: RoomsProps[] = data.map((room) => ({
      room: room.room,
      type: room.type,
      price: room.price,
      status: room.status.toUpperCase(),
      pax: room.pax,
    }));

    setAvailableRooms(transformedAvailableRooms);
  };

  const filterRooms = async (searchFilter: string) => {
    const supabase = supabaseBrowser();

    const { data: filteredRoomsData, error } = await supabase
      .from("room_details")
      .select("*")
      .or(`status.ilike.%${searchFilter}%, type.ilike.%${searchFilter}%`)
      .order("room", { ascending: true });

    if (filteredRoomsData) {
      const transformedData: RoomsProps[] = filteredRoomsData.map((room) => {
        return {
          room: room.room,
          type: room.type,
          price: room.price,
          status: room.status.toUpperCase(),
          pax: room.pax,
        };
      });
      setRoomList(transformedData);
    } else {
      console.log("Filter Error: ", error);
    }
  };

  return {
    setRoomList,
    availableRooms,
    roomList,
    fetchAvailableRooms,
    errors,
    filterRooms,
  };
}
