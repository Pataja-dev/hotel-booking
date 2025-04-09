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