"use client";

import supabaseBrowser from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
};

export function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [authUserId, setAuthUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const { data: sessionData } = await supabaseBrowser().auth.getSession();
    const authUserId = sessionData?.session?.user.id || null;
    setAuthUserId(authUserId);

    const { data, error } = await supabaseBrowser()
      .from("profiles")
      .select(
        "id, first_name, last_name, email, role, phone, status, deleted_at"
      )
      .order("id", { ascending: true })
      .is("deleted_at", null);

    if (!error && data) {
      setUsers(data);
    } else if (error) {
      setError(`Error fetching users:, ${error}`);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  return { users, authUserId, refetch: fetchUsers, loading, error };
}
