"use client";

import { getPasswordRules } from "@/lib/constants";
import { CheckCircle, XCircle } from "lucide-react";
import { useMemo } from "react";

interface PasswordRulesProps {
  password: string;
}

export const PasswordRules: React.FC<PasswordRulesProps> = ({ password }) => {
  const rules = useMemo(() => getPasswordRules(password), [password]);

  return (
    <div className="items-center justify-center">
      <ul className="text-[12px] text-black list-none space-y-1">
        {rules.map((rule, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 text-[12px] ${
              rule.isValid ? "text-green-600" : "text-red-500"
            }`}
          >
            {rule.isValid ? (
              <CheckCircle size={12} className="text-green-600" />
            ) : (
              <XCircle size={12} className="text-red-500" />
            )}
            <span >{rule.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
