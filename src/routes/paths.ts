export const paths = {
  index: "/",
  signup: "/signup",
  signin: "/signin",
  unauthorized: "/unauthorized",
  resetPassword: "/reset-password",
  portals: {
    guest: {
      dashboard: "/guest/dashboard",
      bookings: "/guest/bookings",
      rooms: "/guest/rooms",
      profile: "/guest/profile",
    },
    admin: {
      dashboard: "/admin/dashboard",
      bookings: "/admin/bookings",
      rooms: "/admin/rooms",
      users: "/admin/users",
      profile: "/admin/profile",
    },
    staff: {
      dashboard: "/staff/dashboard",
      bookings: "/staff/bookings",
      rooms: "/staff/rooms",
      profile: "/staff/profile",
    },
  },
};