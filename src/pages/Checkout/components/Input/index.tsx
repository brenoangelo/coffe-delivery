import { InputHTMLAttributes, forwardRef } from 'react';
import { ErrorMessage, StyledInput } from './styles';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string;
}

function InputComponent({
  isOptional = false,
  register,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <StyledInput isOptional={isOptional} isError={!!errorMessage}>
      <input type="text" {...props} {...register(props.name ?? '')} />

      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
    </StyledInput>
  );
}

export const Input = forwardRef(InputComponent);
