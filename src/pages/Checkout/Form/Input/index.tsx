import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
}

export function Input({ isOptional = false, ...props }: InputProps) {
  return (
    <StyledInput isOptional={isOptional}>
      <input type="text" {...props} />
    </StyledInput>
  );
}
