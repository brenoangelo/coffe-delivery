import { CartFooter } from '../CartFooter';

import { CartFooterContainer, ProductsList } from './styles';
import { ProductRow } from '../ProductRow';
import { Product } from '../../reducers/checkout/reducer';

interface ShoppingListProps {
  totalPrice: string;
  changeCountProduct: (productId: number, newCount: number) => void;
  removeProduct: (productId: number) => void;
  cart: Product[];
}

export function ShoppingList({
  totalPrice,
  changeCountProduct,
  removeProduct,
  cart,
}: ShoppingListProps) {
  return (
    <>
      <ProductsList>
        {cart?.map((product) => (
          <ProductRow
            key={product?.id}
            product={product}
            handleChangeCountProduct={changeCountProduct}
            handleRemoveProduct={removeProduct}
          />
        ))}
      </ProductsList>

      <CartFooterContainer>
        <CartFooter totalPrice={totalPrice} />
      </CartFooterContainer>
    </>
  );
}
