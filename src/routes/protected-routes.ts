import { paths } from "./paths"
import { Role } from "../types/roles"

export const protectedRoutes = [
  {
    path: paths.portals.guest,
    role: [Role.GUEST],
  },
  {
    path: paths.portals.guest,
    role: [Role.ADMIN],
  },
  {
    path: paths.portals.staff,
    role: [Role.STAFF, Role.ADMIN],
  }
]