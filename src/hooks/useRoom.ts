import { useEffect, useState } from "react";
import supabaseBrowser from "@/lib/supabase/client";

export interface RoomsProps {
  room: number;
  type: string;
  price: string;
  status: string;
  pax: string;
}

export function useRoom() {
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
        room: ""
    });
    
    useEffect(() => {
        const fetchRooms = async () => {
        const supabase = supabaseBrowser();

            const { data, error } = await supabase
                .from("room_details")
                .select("room, type, price, status, pax");
            console.log(data);

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
                    status: room.status,
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
        errors
    };
}
  