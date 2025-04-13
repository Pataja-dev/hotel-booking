import { useEffect, useState } from "react";
import supabaseBrowser from "@/lib/supabase/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface RoomsProps {
  room: number;
  type: string;
  price: string;
  status: string;
  pax: string;
}

const createRoomSchema = z.object({});

export type CreateRoomFormValue = z.infer<typeof createRoomSchema>;

export function useRoom() {
  const form = useForm<CreateRoomFormValue>({
    mode: "onChange",
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      roomNumber: "",
    },
  });

  const onCreateRoom = (data: CreateRoomFormValue) => {
    console.log(data);
    const formData = new FormData();
  };

  //TO-DO
  // const [roomData, setRoomData] = useState({
  //     room: "",
  //     type: "",
  //     price: "",
  //     status: "",
  //     pax: "",
  // });
  const [roomList, setRoomList] = useState<RoomsProps[]>([]);
  const [errors, setErrors] = useState({
    room: "",
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const supabase = supabaseBrowser();

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
  }, []);

  return {
    setRoomList,
    roomList,
    errors,
    form,
    onCreateRoom,
  };
}
