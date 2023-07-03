import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './icons';
import '../styles/Cart.css';
import { useCart } from '../hooks/useCart';
import { Cartitem } from './Cartitem';

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart } = useCart();
  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <strong>{cart.length}</strong>
        <CartIcon></CartIcon>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((item) => {
            return <Cartitem key={item.id} item={item}></Cartitem>;
          })}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon></ClearCartIcon>
        </button>
      </aside>
    </>
  );
}
