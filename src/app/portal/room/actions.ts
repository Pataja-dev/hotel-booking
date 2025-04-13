"use server";

import supabaseServer from "@/lib/supabase/server";

export async function createRoom(formData: FormData) {
  const supabase = await supabaseServer();

  const { data: roomData, error: roomError } = await supabase
    .from("rooms")
    .insert({
      room_number: formData.get("roomNumber"),
      room_type: formData.get("roomType"),
      status: "maintenance",
    });

  console.log("Room Data", roomData);
  console.log("Room Error", roomError);

  if (!roomError) {
    return {
      success: true,
      data: roomData || "Insertion successful, no data returned",
    };
  }

  if (roomError) {
    return { success: false, error: roomError.message };
  }
}

// "use server";

// import supabaseServer from "@/lib/supabase/server";

// // export async function fetchRooms() {
// //     const supabase = await supabaseServer();
// //     const { data, error } = await supabase.from("rooms").select("*");

// //      if (error) {
// //        return { success: false };
// //      }
// //      return { success: true, data };
// // }

// export const fetchRooms = async () => {
//       const supabase = await supabaseServer();

//   const { data, error } = await supabase
//     .from("room_details")
//     .select("id, type, price, status, pax")
//     .is("deleted_at", null);

//   if (error) {
//     return { success: false };
//   }

//   const transformedData: RoomProps[] = data.map((church) => {
//     const district = Array.isArray(church.districts)
//       ? church.districts[0]
//       : church.districts;
//     return {
//       id: church.id,
//       church: church.name,
//       district: district?.name || "Unknown District",
//       area: district?.area?.toString() || "N/A",
//       is_active: church.is_active,
//     };
//   });

//   setChurchList(transformedData);
// };
