import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { useCheckout } from '../../hooks/useCheckout';
import { Container } from '../../styles/common';
import { ShoppingList } from './ShoppingList';
import {
  CheckoutForm,
  FormBox,
  FormFields,
  InputGroup,
  OptionGroup,
  SectionLabel,
  ShoppingCartBox,
  StyledShoppingList,
} from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderValidationSchema } from './helpers/orderValidationSchema';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { ADDRESS_INPUTS } from './constants';
import { Input } from './components/Input';
import { PaymentOption } from './components/PaymentOption';

export function Checkout() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderValidationSchema),
  });
  const navigate = useNavigate();
  const { submitOrder } = useCheckout();

  console.log({
    errors,
  });

  function handleSubmitOrder(data) {
    submitOrder(data);

    navigate('/success');
  }

  return (
    <Container>
      <CheckoutForm onSubmit={handleSubmit(handleSubmitOrder)}>
        <FormFields>
          <h4>Complete seu pedido</h4>

          <FormBox>
            <SectionLabel iconColor="yellow">
              <MapPinLine size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </SectionLabel>
            <InputGroup>
              {ADDRESS_INPUTS.map((input) => (
                <Input
                  key={input.name}
                  errorMessage={
                    errors[input.name] && String(errors[input.name]?.message)
                  }
                  {...input}
                  register={register}
                />
              ))}
            </InputGroup>
          </FormBox>

          <FormBox>
            <SectionLabel iconColor="purple">
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </SectionLabel>

            <OptionGroup>
              <PaymentOption
                type="credit"
                value="credit"
                register={register}
                isError={!!errors.paymentMethod}
              />
              <PaymentOption
                type="debit"
                value="debit"
                register={register}
                isError={!!errors.paymentMethod}
              />
              <PaymentOption
                type="cash"
                value="cash"
                register={register}
                isError={!!errors.paymentMethod}
              />
            </OptionGroup>
          </FormBox>
        </FormFields>

        <StyledShoppingList>
          <h4>Café selecionados</h4>
          <ShoppingCartBox>
            <ShoppingList />

            <Button
              height="XL"
              colorDetails={{
                background: 'yellow',
                text: 'white',
              }}
              colorDetailsHover={{
                background: 'darkYellow',
              }}
              type="submit"
            >
              Confirmar Pedido
            </Button>
          </ShoppingCartBox>
        </StyledShoppingList>
      </CheckoutForm>
    </Container>
  );
}
