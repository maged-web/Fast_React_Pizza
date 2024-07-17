import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from '../card/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from '../card/EmptyCart'
/* eslint-disable react/prop-types */


function Cart() {
  const username=useSelector((state)=>state.user.username)

  const cart = useSelector(getCart);

  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart/>

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 px-2 border-b mt-3">
      {cart.map((item)=><CartItem item={item} key={item.pizzaId}></CartItem>)}
      </ul>
      <div className='mt-6 space-x-2'>
        <Button type='primary' to="/order/new">Order pizzas</Button>
        <Button onClick={()=>dispatch(clearCart())} type='secondary'>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
