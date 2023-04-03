import { createContext, ReactNode, useReducer } from 'react';
import { ActionTypes } from '../reducers/checkout/action';
import { checkoutReducer, Product } from '../reducers/checkout/reducer';
import { toast } from 'react-toastify';

interface CheckoutContextValues {
  addNewProduct: (newCartProduct: Product) => void;
  removeProduct: (id: number) => void;
  cart: Product[];
}

interface CheckoutContextProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextValues);

export function CheckoutContextProvider({ children }: CheckoutContextProps) {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    cart: [],
    productId: null,
  });

  const { cart } = checkoutState;

  function addNewProduct(newProduct: Product) {
    dispatch({
      type: ActionTypes.ADD_NEW_PRODUCT,
      payload: {
        newProduct,
      },
    });

    toast.success("Café adicionado com sucesso!")
  }

  function removeProduct(productId: number) {
    dispatch({
      type: ActionTypes.ADD_NEW_PRODUCT,
      payload: {
        productId,
      },
    });
  }

  return (
    <CheckoutContext.Provider value={{ addNewProduct, removeProduct, cart }}>
      {children}
    </CheckoutContext.Provider>
  );
}
