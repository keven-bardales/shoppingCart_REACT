import { products } from '../mocks/products.json';

export async function getProductsRequest() {
  if (products) {
    const mappedProducts = products.map((product) => {
      return {
        id: product.id,
        brand: product.brand,
        category: product.category,
        description: product.description,
        discountPercent: product.discountPercentage,
        thumbnail: product.thumbnail,
        title: product.title,
        stock: product.stock,
        rating: product.rating,
        price: product.price,
      };
    });

    return mappedProducts;
  } else {
    return null;
  }
}
