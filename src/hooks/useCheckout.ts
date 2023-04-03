import { CheckoutContext } from './../contexts/CheckoutContext';
import { useContext } from "react";

export function useCheckout() {
  const useHook = useContext(CheckoutContext)

  return useHook
}