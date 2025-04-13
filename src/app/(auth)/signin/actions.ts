"use server";

import supabaseServer from "@/lib/supabase/server";
import { paths } from "@/routes/paths";
import { Role } from "@/types/roles";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signinUser(formdata: FormData) {
    const supabase = await supabaseServer();
    const { data: signinData, error: signinError } = await supabase.auth.signInWithPassword({
        email: formdata.get("email") as string,
        password: formdata.get("password") as string,
    });
    if (signinError) {
        return { success: false, error: signinError.message };
    }
    const user = signinData.user;
    console.log("User", user);
    if(!user) {
        return { success: false, error: "User not found" };
    }
    const { data: userData, error: userError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
    console.log("User Data", userData);
    console.log("User Error", userError);

    if (userError) {
        return { success: false, error: userError.message };
    }
    if (!userData) {
        return { success: false, error: "User data not found" };
    }

    const role = userData.role;
    console.log("User Role", role);
    switch (role) {
        case Role.ADMIN:
            redirect(paths.portals.admin.dashboard);
        case Role.STAFF:
            redirect(paths.portals.staff.dashboard);
        case Role.GUEST:
            redirect(paths.index);
        default:
            revalidatePath("/", "layout");
    }
}