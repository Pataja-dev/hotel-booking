"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useSignupHook(){
    const FormSchema = z.object({
        firstName: z.string().min(2, {
            message: "This field is required",
        }),
        lastName: z.string().min(2, {
            message: "This field is required",
        }),
        address: z.string().min(2, {
            message: "This field is required",
        }),
        phone: z.string().min(2, {
            message: "This field is required",
        }),
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters long",
        }),
        confirmPassword: z.string().min(8, {
            message: "Password must be at least 8 characters long",
        }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Form Data", data);
    } 

    return { form, onSubmit}
}