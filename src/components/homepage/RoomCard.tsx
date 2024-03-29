import { useContext } from "react";
import { roomImg, petsIco } from "../roomData";
import { CartContext } from "../dataAndFeatures/CartContext";

function RoomCard(props: {
  id: number;
  name: string;
  price: number;
  beds: number;
  pets: boolean;
}) {
  const cart = useContext(CartContext);
  let roomSrc = roomImg.find((x) => x.name === props.name)?.src;
  let roomDescription = roomImg.find((x) => x.name === props.name)?.description;
  let isAddedToCart = cart?.items.some((item) => item.id === props.id);

  const productQuantity = cart?.getCartItems(props.id);

  return (
    <div className="card lg:card-side max-w-[375px] lg:max-w-[800px] m-5 bg-base-100 shadow-xl ">
      <figure>
        <img className="w-96 max-w-sm" src={roomSrc} alt="roomImg" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">{props.name}</h2>
        <p>{roomDescription}</p>

        <div className="flex row justify-between">
          <div>
            {props.pets ? (
              <img src={petsIco.yes} alt="przyjazne dla zwierząt" width={50} />
            ) : (
              <img src={petsIco.no} alt="tylko dla ludzi" width={50} />
            )}
          </div>
          <div>
            <div className="flex col justify-between">
              <span>Liczba łóżek:</span>
              <div> {props.beds}</div>
            </div>
            <div className="flex col justify-between gap-2">
              <span>Cena pokoju:</span>
              <div> {props.price / 100}$/ noc</div>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn bg-emerald-500 border-none"
            onClick={() => {
              return cart?.addToCart(props.id);
            }}
            disabled={isAddedToCart}
          >
            Zarezerwuj
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
