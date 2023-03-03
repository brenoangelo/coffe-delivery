import { Minus, Plus } from 'phosphor-react';
import { StyledCountInput } from './styles';

export function CountInput() {
  return (
    <StyledCountInput>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" value={0} />
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </StyledCountInput>
  );
}
