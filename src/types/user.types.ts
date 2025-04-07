export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}
export enum Role {
  SUPER_ADMIN = "super_admin",
  CONTROLLER = "controller",
  STAFF = "staff",
  GUEST = "guest",
}

export const RoleTitles = {
  [Role.SUPER_ADMIN]: "Super Admin",
  [Role.CONTROLLER]: "Controller",
  [Role.STAFF]: "Staff",
  [Role.GUEST]: "Guest",
};

export function formatRole(role: string): string {
  const roleMappings: Record<string, string> = {
    super_admin: "Admin",
    guest: "Guest",
    staff: "Staff",
  };

  return roleMappings[role] || role;
}