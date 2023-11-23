import { Product } from '../reducers/checkout/reducer';

export function getTotalPrice(cart: Product[]) {
  const total = cart.reduce((acc, currentProduct) => {
    acc += currentProduct.count * currentProduct.price;

    return acc;
  }, 0);

  return total;
}
