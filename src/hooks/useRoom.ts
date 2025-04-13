import { useEffect, useState } from "react";
import supabaseBrowser from "@/lib/supabase/client";
import { RoomsProps } from "@/types/room.types";



export function useRoom() {
    //TO-DO
    // const [roomData, setRoomData] = useState({
    //     room: "",
    //     type: "",
    //     price: "",
    //     status: "",
    //     pax: "",
    // });
    const [availableRooms, setAvailableRooms] = useState<RoomsProps[]>([]);
    const [roomList, setRoomList] = useState<RoomsProps[]>([]);
    const [errors, setErrors] = useState({
        room: ""
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

    return {
        setRoomList,
        availableRooms,
        roomList,
        fetchAvailableRooms,
        errors
    };
}
  