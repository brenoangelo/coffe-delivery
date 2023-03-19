import styled from 'styled-components';
import { BoxBase } from '../styles';

export const StyledShoppingList = styled.aside`
  width: 100%;
  max-width: 28rem;
  > h4 {
    margin-bottom: 0.93rem;
    font-size: 1.125rem;
  }
`;

export const ShoppingCartBox = styled(BoxBase)`
  width: 100%;
`;

export const CartFooterContainer = styled.footer`
  margin-top: 1.5rem;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
`