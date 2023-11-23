import { useSuccessViewModel } from '../../viewsmodel/success/useSuccessViewModel';

export function useSuccessViewController() {
  const { customerDetails } = useSuccessViewModel();

  const paymentMethodTitle = {
    credit: 'Cartão de credito',
    debit: 'Cartão de debito',
    cash: 'Dinheiro',
  }[customerDetails.paymentMethod ?? ''];

  return {
    paymentMethodTitle,
    customerDetails,
  };
}
