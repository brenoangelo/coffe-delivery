import { useMemo } from 'react';
import { useProductsModel } from '../../models/products/useProductsModel';
import { formatCurrency } from '../../utils/format-currency';
import { useCheckoutModel } from '../../models/checkout/useCheckoutModel';

export function useProductsViewModel() {
  const { populateProducts, products, productsLoading } = useProductsModel();
  const { addNewProduct } = useCheckoutModel();

  const productsFormatted = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        priceFormatted: formatCurrency(product.price),
      })),
    [products],
  );

  return {
    products: productsFormatted,
    populateProducts,
    productsLoading,
    addNewProduct,
  };
}
