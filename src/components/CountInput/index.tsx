import { Minus, Plus } from 'phosphor-react';
import { StyledCountInput } from './styles';

interface CountInputProps {
  height?: 'MD' | 'SM';
  count: number;
  handleAddCount: () => void
  handleRemoveCount: () => void
}

export function CountInput({
  height = 'MD',
  count,
  handleAddCount,
  handleRemoveCount,
}: CountInputProps) {
  return (
    <StyledCountInput height={height}>
      <button onClick={handleRemoveCount}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        value={count}
        min={1}
        max={99}
        disabled
      />
      <button onClick={handleAddCount}>
        <Plus size={14} weight="bold" />
      </button>
    </StyledCountInput>
  );
}
