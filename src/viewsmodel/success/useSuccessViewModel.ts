import { useCheckoutModel } from '../../models/checkout/useCheckoutModel';

export function useSuccessViewModel() {
  const { customerDetails } = useCheckoutModel();

  return {
    customerDetails,
  };
}
