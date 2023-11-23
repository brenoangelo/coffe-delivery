import { useEffect } from 'react';
import { useProductsViewModel } from '../../viewsmodel/products/useProductsViewModel';
import { Product } from '../../reducers/checkout/reducer';
import { toast } from 'react-toastify';

export function useCatalogViewController() {
  const { populateProducts, products, productsLoading, addNewProduct } =
    useProductsViewModel();

  useEffect(() => {
    populateProducts();
  }, [populateProducts]);

  function handleAddNewProduct(newCartProduct: Product) {
    addNewProduct(newCartProduct);
    toast.success('Produto adicionado ao carrinho com sucesso!');
  }

  return {
    products,
    productsLoading,
    handleAddNewProduct,
  };
}
