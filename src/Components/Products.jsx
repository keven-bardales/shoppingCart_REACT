import { useCart } from '../hooks/useCart';
import '../styles/Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';

function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <>
      <main className='products'>
        <ul>
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li key={product.id}>
                <img alt={product.title} src={product.thumbnail} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <p>{product.category}</p>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: isProductInCart ? 'red' : '#09f',
                    }}
                    onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon></RemoveFromCartIcon>
                    ) : (
                      <AddToCartIcon></AddToCartIcon>
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default Products;
