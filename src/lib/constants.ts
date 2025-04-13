import { PasswordRule } from "@/types/password.types";
import { z } from "zod";

export const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const mustIncludeUppercaseValidation = new RegExp(
  /(?=.*?[A-Z])/
);

export const mustIncludeLowercaseValidation = new RegExp(
  /(?=.*?[a-z])/
);

export const mustIncludeNumberValidation = new RegExp(
  /(?=.*?[0-9])/
);

export const mustIncludeSpecialCharacterValidation = new RegExp(
  /(?=.*?[#?!@$%^&*-])/
);

export const nameValidation = z
  .string()
  .min(2, { message: "This field is required" })
  .max(100, { message: "This should be less than 100 characters" })
  .regex(/^[a-zA-Z\s]+$/, {
    message: "Must contain only alphabetic characters",
  });

export const addressValidation = z
  .string()
  .min(2, { message: "This field is required" })
  .max(200, { message: "This should be less than 200 characters" })
  .regex(/^[a-zA-Z0-9\s.,-]+$/, {
    message: "Must contain only alphanumeric characters and spaces",
  });

export const middleNameValidation = z
  .string()
  .optional()
  .or(z.literal(""))
  .refine((value) => !value || /^[A-Za-z\s]+$/.test(value), {
    message: "Middle Name can only contain letters",
  });

export const phoneValidation = z
  .string()
  .min(11, { message: "Phone number must be at least 11 digits" })
  .regex(/^\d+$/, { message: "Phone number must contain only numbers" });

export const emailValidation = z
  .string()
  .min(4, { message: "Email is required" })
  .email({ message: "Email is invalid" });

export const passwordValidationSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(mustIncludeUppercaseValidation, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(mustIncludeLowercaseValidation, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(mustIncludeNumberValidation, {
    message: "Password must contain at least one number",
  })
  .regex(mustIncludeSpecialCharacterValidation, {
    message: "Password must contain at least one special character",
  })

export const getPasswordRules = (password: string): PasswordRule[] => [
    {
      label: "Password must be at least 8 characters long.",
      isValid: password.length >= 8,
    },
    {
      label: "Password must contain at least one uppercase letter.",
      isValid: mustIncludeUppercaseValidation.test(password),
    },
    {
      label: "Password must contain at least one lower letter.",
      isValid: mustIncludeLowercaseValidation.test(password),
    },
    {
      label: "Password must contain at least one number.",
      isValid: mustIncludeNumberValidation.test(password),
    },
    {
      label: "Password must contain at least one special character.",
      isValid: mustIncludeSpecialCharacterValidation.test(password),
    },
  ];

export const hanldeSpaceValidation = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const inputValue = e.currentTarget.value;
    if (e.key === " " && (!inputValue || inputValue.endsWith(" "))) {
    e.preventDefault();
  }
}

export const cleanInputValue = (value: string) => {
  return value.replace(/\s{2,}/g, " ");
};