import { useCheckoutModel } from '../../models/checkout/useCheckoutModel';

export function useCheckoutViewModel() {
  const { cart, changeCountProduct, removeProduct, submitOrder } =
    useCheckoutModel();

  return {
    cart,
    changeCountProduct,
    removeProduct,
    submitOrder,
  };
}
