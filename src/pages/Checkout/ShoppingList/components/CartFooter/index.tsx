import { StyledCartFooter } from './styles';

export function CartFooter() {
  return (
    <StyledCartFooter>
      <div>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>

      <div>
        <span>Total</span>
        <span>R$ 33,20</span>
      </div>
    </StyledCartFooter>
  );
}
