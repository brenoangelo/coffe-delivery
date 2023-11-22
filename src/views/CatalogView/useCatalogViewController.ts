import { useCallback, useEffect } from 'react';
import { useProductsViewModel } from '../../viewsmodel/products/useProductsViewModel';
import { CustomerDetails, Product } from '../../reducers/checkout/reducer';
import { ActionTypes } from '../../reducers/checkout/action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCheckoutModel } from '../../models/checkout/useCheckoutModel';

export function useCatalogViewController() {
  const navigate = useNavigate();
  const {
    populateProducts,
    products,
    productsLoading,
    addNewProduct
  } = useProductsViewModel();

  useEffect(() => {
    populateProducts();
  }, [populateProducts]);

  return {
    products,
    productsLoading,
    addNewProduct,
  };
}
