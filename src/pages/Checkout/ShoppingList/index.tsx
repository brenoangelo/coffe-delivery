import { useMemo } from 'react';
import { Button } from '../../../components/Button';
import { useCheckout } from '../../../hooks/useCheckout';
import { Product } from '../../../reducers/checkout/reducer';
import { CartFooter } from './components/CartFooter';
import { ProductRow } from './components/ProductRow';
import {
  CartFooterContainer,
  ShoppingCartBox,
  StyledShoppingList,
} from './styles';
import { formatCurrency } from '../utils/format-currency';

export function ShoppingList() {
  const { cart, removeProduct, changeCountProduct } = useCheckout();

  const totalPrice = useMemo(getTotalPrice, [cart]);

  function getTotalPrice() {
    const total = cart.reduce((acc, currentProduct) => {
      acc += currentProduct.count * currentProduct.price;

      return acc;
    }, 0);

    return formatCurrency(total)
  }

  function handleChangeCountProduct(productId: number, newCount: number) {
    changeCountProduct(productId, newCount);
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <StyledShoppingList>
      <h4>Café selecionados</h4>
      <ShoppingCartBox>
        {cart?.map((product) => (
          <ProductRow
            key={product?.id}
            product={product}
            handleChangeCountProduct={handleChangeCountProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}

        <CartFooterContainer>
          <CartFooter totalPrice={totalPrice}/>

          <Button
            height="XL"
            colorDetails={{
              background: 'yellow',
              text: 'white',
            }}
            colorDetailsHover={{
              background: 'darkYellow',
            }}
          >
            Confirmar Pedido
          </Button>
        </CartFooterContainer>
      </ShoppingCartBox>
    </StyledShoppingList>
  );
}
