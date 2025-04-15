export enum RoomStatus {
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  MAINTENANCE = "MAINTENANCE",
  RESERVED = "RESERVED",
}
export interface RoomsProps {
  room: number;
  type: string;
  price: string;
  status: RoomStatus;
  pax: string;
}

export interface TypeProps {
  id: number;
  type: string;
  description: string;
  pax: string;
  price: string;
}
