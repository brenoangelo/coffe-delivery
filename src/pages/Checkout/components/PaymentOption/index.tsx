import { FieldValues, UseFormRegister } from 'react-hook-form';
import { METHOD_INFO } from './constants';
import { StyledPaymentOption } from './styles';

type PaymentTypes = 'credit' | 'debit' | 'cash';

interface PaymentOptionProps {
  type: PaymentTypes;
  value: string;
  register: UseFormRegister<FieldValues>;
  isError: boolean;
}

export function PaymentOption({ type, value, register, isError }: PaymentOptionProps) {
  const { icon, title } = METHOD_INFO[type];

  return (
    <StyledPaymentOption htmlFor={type} isError={isError}>
      <input
        type="radio"
        id={type}
        value={value}
        {...register('paymentMethod')}
      />
      <div tabIndex={1}>
        {icon}
        {title}
      </div>
    </StyledPaymentOption>
  );
}
