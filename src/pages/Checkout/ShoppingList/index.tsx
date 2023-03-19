import { Button } from '../../../components/Button';
import { CartFooter } from './components/CartFooter';
import { ProductRow } from './components/ProductRow';
import {CartFooterContainer, ShoppingCartBox, StyledShoppingList } from './styles';

const cartList = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    priceFormatted: '9,90',
    count: 1,
    imgUrl: '/products/expresso-tradicional.png',
  },
  {
    id: 2,
    title: 'Latte',
    priceFormatted: '19,80',
    count: 1,
    imgUrl: '/products/latte.png',
  },
];

export function ShoppingList() {
  return (
    <StyledShoppingList>
      <h4>Café selecionados</h4>

      <ShoppingCartBox>
        {cartList.map((product) => (
          <ProductRow product={product} />
        ))}

        <CartFooterContainer>
          <CartFooter />

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
