import { useQuery, useQueryClient } from "@tanstack/react-query";
import RoomCard from "./RoomCard";
import { fetchRoomList } from "./CartContext";

export type Room = {
  beds: number;
  hotel: { id: number; name: string };
  id: number;
  name: string;
  pets_allowed: boolean;
  price_in_cents: number;
};

function RoomList() {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ["rooms"],
    fetchRoomList
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: </span>;
  }
  console.log(data);
  return (
    <>
      {data.rooms.map((room: Room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          name={room.name}
          beds={room.beds}
          pets={room.pets_allowed}
          price={room.price_in_cents}
        />
      ))}
    </>
  );
}

export default RoomList;

//