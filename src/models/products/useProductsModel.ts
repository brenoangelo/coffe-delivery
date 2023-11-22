import { useCallback, useState } from 'react';
import { ProductResponse, getProducts } from './api/products';

export function useProductsModel() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const populateProducts = useCallback(populateProductsFunction, []);

  async function populateProductsFunction() {
    setProductsLoading(true);

    const data = await getProducts();

    setProductsLoading(false);

    if (!data) return;

    setProducts(data);
  }

  return {
    populateProducts,
    products,
    productsLoading
  };
}
