import { useCheckoutModel } from '../../models/checkout/useCheckoutModel';

export function useHeaderViewModel() {
  const { cart } = useCheckoutModel();

  return {
    cartCountProducts: cart?.length,
  };
}
