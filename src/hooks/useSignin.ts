"use client";

import { signinUser } from "@/app/(auth)/signin/actions";
import { emailValidation, passwordValidationSchema } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signinSchema = z.object({
    email: emailValidation,
    password: passwordValidationSchema,
})
export type SigninFormValue = z.infer<typeof signinSchema>;

export function useSigninHook() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<SigninFormValue>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SigninFormValue) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    startTransition(async () => {
      try {
        const result = await signinUser(formData);
        if (result.success) {
          setSuccess("Signin successful! Please check your email for verification.");
          setError(null);
        } else {
          setError(result.error || "Failed to sign in.");
        }
      } catch {
        setError("An error occurred during signin.");
      }
    });
  };

  return { form, onSubmit, isPending, error, success };
}