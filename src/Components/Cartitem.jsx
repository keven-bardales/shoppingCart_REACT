import { useCart } from '../hooks/useCart';
import { RemoveFromCartIcon } from './icons';

export function Cartitem({ item }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <li>
      <img src={item.thumbnail} />
      <div>
        <strong>{item.title}</strong>
      </div>
      <footer>
        <small>Qty: {item.quantity}</small>
        <button onClick={() => addToCart(item)}>+</button>
        <button onClick={() => removeFromCart(item)}>
          <RemoveFromCartIcon></RemoveFromCartIcon>
        </button>
      </footer>
    </li>
  );
}
