import { useMemo } from 'react';
import { useCheckout } from '../../../hooks/useCheckout';

import { CartFooter } from './components/CartFooter';
import { ProductRow } from './components/ProductRow';
import {
  CartFooterContainer,
  ProductsList,
} from './styles';
import { formatCurrency } from '../utils/format-currency';
import { getTotalPrice } from '../utils/get-total-price';

export function ShoppingList() {
  const { cart, removeProduct, changeCountProduct } = useCheckout();

  const totalPrice = useMemo(() => formatCurrency(getTotalPrice(cart)), [cart]);

  function handleChangeCountProduct(productId: number, newCount: number) {
    changeCountProduct(productId, newCount);
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <>
      <ProductsList>
        {cart?.map((product) => (
          <ProductRow
            key={product?.id}
            product={product}
            handleChangeCountProduct={handleChangeCountProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </ProductsList>

      <CartFooterContainer>
        <CartFooter totalPrice={totalPrice} />
      </CartFooterContainer>
    </>
  );
}
