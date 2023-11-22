import { useContext } from 'react';
import { CheckoutContext } from '../../contexts/CheckoutContext';

export function useCheckoutModel() {
  const useHook = useContext(CheckoutContext);

  return useHook;
}
