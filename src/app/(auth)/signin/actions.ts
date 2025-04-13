"use server";

import supabaseServer from "@/lib/supabase/server";

export async function signinUser(formdata: FormData) {
    const supabase = await supabaseServer();
    const { data: signinData, error: signinError } = await supabase.auth.signInWithPassword({
        email: formdata.get("email") as string,
        password: formdata.get("password") as string,
    });
    if(signinData) {
        return { success: true, data: signinData };
    }
    if (signinError) {
        return { success: false, error: signinError.message };
    }
    return { success: false, error: "Unknown error occurred." };
}