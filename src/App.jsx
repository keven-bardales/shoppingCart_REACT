import { useState } from 'react';
import Products from './Components/Products';
import { Header } from './Components/Header';
import { products as InitialProducts } from './mocks/products.json';
import { useFilters } from './hooks/useFilters';
import { Cart } from './Components/Cart';
import { CartContextProvider } from './context/cart';

function App() {
  const [products] = useState(InitialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartContextProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
    </CartContextProvider>
  );
}

export default App;
