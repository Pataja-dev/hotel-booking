"use server";

import supabaseServer from "@/lib/supabase/server";
import { paths } from "@/routes/paths";
import { redirect } from "next/navigation";

export async function signupUser(formdata: FormData) {
  const supabase = await supabaseServer();
  const {data:signupData, error:signupError} = await supabase.auth.signUp({
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
    options: {
      emailRedirectTo: 'https://hotel-booking-navy-three.vercel.app/',
      data: {
        first_name: formdata.get("firstName") as string,
        last_name: formdata.get("lastName") as string,
        address: formdata.get("address") as string,
        phone: formdata.get("phone") as string,
        role: "guest",
      }
    },
  });
  
  if (signupData) {
    return { success: true, data: signupData };
  }

  if (signupError) {
    return { success: false, error: signupError.message };
  }

  redirect(paths.home)
}