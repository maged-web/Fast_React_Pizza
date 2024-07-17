/* eslint-disable react/prop-types */

import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder({order}) {
    console.log(order)
    const fetcher=useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
        <Button type='primary'>Make Priority</Button>
    </fetcher.Form>    
  )
}

export async function action({params})
{
    const data={priority:true}
    await updateOrder(params.orderId,data)
    return null
}