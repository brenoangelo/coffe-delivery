import { createContext, ReactNode, useCallback, useReducer } from 'react';
import { ActionTypes } from '../reducers/checkout/action';
import { checkoutReducer, Product } from '../reducers/checkout/reducer';
import { toast } from 'react-toastify';

interface CheckoutContextValues {
  addNewProduct: (newCartProduct: Product) => void;
  removeProduct: (id: number) => void;
  changeCountProduct: (id: number, newCount: number) => void;

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

  const addNewProduct = useCallback(addNewProductFunction, []);
  const removeProduct = useCallback(removeProductFunction, []);
  const changeCountProduct = useCallback(changeCountProductFunction, []);

  function addNewProductFunction(newProduct: Product) {
    dispatch({
      type: ActionTypes.ADD_NEW_PRODUCT,
      payload: {
        newProduct,
      },
    });

    toast.success('Café adicionado com sucesso!');
  }

  function removeProductFunction(productId: number) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT,
      payload: {
        productId,
      },
    });
  }

  function changeCountProductFunction(productId: number, newCount: number) {
    dispatch({
      type: ActionTypes.CHANGE_COUNT_PRODUCT,
      payload: {
        productId,
        newCount,
      },
    });
  }

  return (
    <CheckoutContext.Provider
      value={{ addNewProduct, removeProduct, changeCountProduct, cart }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
