"use client";

import { signupUser } from "@/app/(auth)/signup/actions";
import { addressValidation, emailValidation, nameValidation, passwordValidationSchema, phoneValidation } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z.object({
    firstName: nameValidation,
    lastName: nameValidation,
    address: addressValidation,
    phone: phoneValidation,
    email: emailValidation,
    password: passwordValidationSchema,
    confirmPassword: passwordValidationSchema,
})
export type SignupFormValue = z.infer<typeof signupSchema>;

export function useSignupHook(){
    const [isPending, startTransition] = useTransition();
    
    const form = useForm<SignupFormValue>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: SignupFormValue) => {
        const formData = new FormData()
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("address", data.address);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("password", data.password);

        startTransition(async () => {
            try {
                const result = await signupUser(formData);
                if (result.success) {
                    console.log("Signup successful:", result.data);
                } else {
                    console.error("Signup error:", result.error);
                }
              } catch {
                console.error("An error occurred during signup.");
              }
        });

    }

    return { form, onSubmit, isPending}
}