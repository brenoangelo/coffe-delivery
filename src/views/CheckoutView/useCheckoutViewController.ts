import { useMemo } from 'react';
import { useCheckoutViewModel } from '../../viewsmodel/checkout/useCheckoutViewModel';
import { CustomerDetails, Product } from '../../reducers/checkout/reducer';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderValidationSchema } from './validation/schemas/orderValidationSchema';
import { formatCurrency } from '../../utils/format-currency';
import { getTotalPrice } from '../../utils/get-total-price';

export function useCheckoutViewController() {
  const { cart, changeCountProduct, removeProduct, submitOrder } =
    useCheckoutViewModel();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderValidationSchema),
  });

  const totalPrice = useMemo(totalPriceFunction, [cart]);

  function totalPriceFunction() {
    return formatCurrency(getTotalPrice(cart));
  }

  function handleSubmitOrder(customerDetails: CustomerDetails) {
    submitOrder(customerDetails);

    navigate('/success')
  }

  return {
    removeProduct,
    changeCountProduct,
    cart,
    handleSubmit: handleSubmit(handleSubmitOrder),
    register,
    errors,
    totalPrice,
  };
}
