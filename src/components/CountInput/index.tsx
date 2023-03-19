import { Minus, Plus } from 'phosphor-react';
import { StyledCountInput } from './styles';

interface CountInputProps {
  height?: 'MD' | 'SM';
}

export function CountInput({ height = 'MD' }: CountInputProps) {
  return (
    <StyledCountInput height={height}>
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
