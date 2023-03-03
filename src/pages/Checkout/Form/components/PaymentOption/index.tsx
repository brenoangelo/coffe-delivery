import { METHOD_INFO } from './constants';
import { StyledPaymentOption } from './styles';

type PaymentTypes = 'credit' | 'debit' | 'cash';

interface PaymentOptionProps {
  type: PaymentTypes;
  onChange: (method: PaymentTypes) => void;
  value: string;
}

export function PaymentOption({ type, value }: PaymentOptionProps) {
  const { icon, title } = METHOD_INFO[type];

  return (
    <StyledPaymentOption htmlFor={type}>
      <input type="radio" id={type} name="payment_method" />
      <div tabIndex={1}>
        {icon}
        {title}
      </div>
    </StyledPaymentOption>
  );
}
