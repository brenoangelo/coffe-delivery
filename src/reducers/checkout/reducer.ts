import { ActionTypes } from './action';

export interface Product {
  id: number;
  title: string;
  description: string;
  categories: {
    title: string;
    name: string;
  }[];
  imgUrl: string;
  price: number;
  priceFormatted: string;
  count: number;
}

interface CheckoutState {
  cart: Product[];
  productId: number | null;
}

export function checkoutReducer(state: CheckoutState, action: any) {
  console.log({
    state,
    action
  })

  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const { newProduct } = action.payload;
      const itemExistsIndex = state.cart.findIndex(
        (item) => item.id === newProduct.id,
      );
      let cartUpdated = Array.from(state.cart);

      if (itemExistsIndex !== -1) {
        cartUpdated.splice(itemExistsIndex, 1, {
          ...cartUpdated[itemExistsIndex],
          count: cartUpdated[itemExistsIndex].count + newProduct.count,
        });

        return {
          ...state,
          cart: cartUpdated,
        };
      }

      return {
        ...state,
        cart: [...cartUpdated, action.payload.newProduct],
      };
    }

    case ActionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.productId,
        ),
      };
    }

    case ActionTypes.CHANGE_COUNT_PRODUCT: {
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              count: action.payload.newCount,
            };
          }

          return product;
        }),
      };
    }

    default:
      return state;
  }
}
