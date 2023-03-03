import { Container } from '../../styles/common';
import { Form } from './Form';
import { ShoppingList } from './ShoppingList';
import { StyledCheckout } from './styles';

export function Checkout() {
  return (
    <Container>
      <StyledCheckout>
        <Form />
        <ShoppingList />
      </StyledCheckout>
    </Container>
  );
}
