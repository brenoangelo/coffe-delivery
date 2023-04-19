import { StyledCartFooter } from './styles';

interface CartFooterProps {
  totalPrice: string;
}

export function CartFooter({ totalPrice }: CartFooterProps) {
  return (
    <StyledCartFooter>
      <div>
        <span>Total de itens</span>
        <span>{totalPrice}</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>

      <div>
        <span>Total</span>
        <span>{totalPrice}</span>
      </div>
    </StyledCartFooter>
  );
}
