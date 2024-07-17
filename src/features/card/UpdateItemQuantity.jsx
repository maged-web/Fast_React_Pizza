/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, icreaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({pizzaId,currentQuantity}) {
    const disbatch=useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type='round' onClick={()=>disbatch(icreaseItemQuantity(pizzaId))}>+</Button>
      <span className="text-sm font-medium gap-2 md:gap-3">{currentQuantity}</span>
      <Button type='round' onClick={()=>disbatch(decreaseItemQuantity(pizzaId))}>-</Button>

    </div>
  )
}
