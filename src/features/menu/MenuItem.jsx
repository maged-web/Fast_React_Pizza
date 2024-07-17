/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers'
import  Button  from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../card/cartSlice';
import DeleteItem from '../card/DeleteItem';
import UpdateItemQuantity from '../card/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const {id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch()
  const currentQuantity = useSelector(getCurrentQuantityById(id))

  const isInCart=currentQuantity>0;
  function handleAddToCart()
  {
    const newItem=
    {
      pizzaId:id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice*1,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?'opacity-70 grayscale':''}`}/>
      <div className='flex flex-col grow pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(", ")}</p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? <p className='text-xs'>{formatCurrency(unitPrice)}</p> : <p className='text-sm uppercase font-medium text-stone-500'>Sold out</p>}
          {isInCart&&<div className='flex items-center gap-3 sm:gap-8'>
            <UpdateItemQuantity currentQuantity={currentQuantity} pizzaId={id}/>
            <DeleteItem pizzaId={id} type='small'>Delete</DeleteItem>
            </div>}

          {!soldOut&&!isInCart&&<Button onClick={handleAddToCart} type='small'>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
