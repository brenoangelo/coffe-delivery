import { HTMLAttributes } from 'react';

import { FieldValues, UseFormRegister } from 'react-hook-form';
import { METHOD_INFO } from './constants';
import { StyledPaymentOption } from './styles';

type PaymentTypes = 'credit' | 'debit' | 'cash';

interface PaymentOptionProps {
  $type: PaymentTypes;
  value: string;
  register: UseFormRegister<FieldValues>;
  isError: boolean;
  disabled: boolean;
}

export function PaymentOption({
  $type,
  register,
  isError,
  disabled,
  value
}: PaymentOptionProps) {
  const { icon, title } = METHOD_INFO[$type];

  return (
    <StyledPaymentOption htmlFor={$type} isError={isError}>
      <input
        type="radio"
        id={$type}
        {...register('paymentMethod')}
        disabled={disabled}
        value={value}
      />
      <div tabIndex={1}>
        {icon}
        {title}
      </div>
    </StyledPaymentOption>
  );
}
