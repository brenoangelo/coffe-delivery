import { Container } from '../../styles/common';

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

import { CurrencyDollar, MapPinLine } from 'phosphor-react';

import { Input } from '../../components/ui/Input';
import { PaymentOption } from '../../components/ui/PaymentOption';
import { ShoppingList } from '../../components/ShoppingList';
import { Button } from '../../components/ui/Button';
import { ADDRESS_INPUTS } from './constants';
import { useCheckoutViewController } from './useCheckoutViewController';

export function CheckoutView() {
  const {
    cart,
    submitOrder,
    changeCountProduct,
    removeProduct,
    handleSubmit,
    register,
    errors,
    totalPrice,
  } = useCheckoutViewController();

  return (
    <Container>
      <CheckoutForm onSubmit={handleSubmit(submitOrder)}>
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
                  disabled={!cart.length}
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
                $type="credit"
                value="credit"
                register={register}
                isError={!!errors.paymentMethod}
                disabled={!cart.length}
              />
              <PaymentOption
                $type="debit"
                value="debit"
                register={register}
                isError={!!errors.paymentMethod}
                disabled={!cart.length}
              />
              <PaymentOption
                $type="cash"
                value="cash"
                register={register}
                isError={!!errors.paymentMethod}
                disabled={!cart.length}
              />
            </OptionGroup>
          </FormBox>
        </FormFields>

        <StyledShoppingList>
          <h4>Café selecionados</h4>
          <ShoppingCartBox>
            <ShoppingList
              changeCountProduct={changeCountProduct}
              removeProduct={removeProduct}
              totalPrice={totalPrice}
              cart={cart}
            />

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
              disabled={!cart.length}
            >
              Confirmar Pedido
            </Button>
          </ShoppingCartBox>
        </StyledShoppingList>
      </CheckoutForm>
    </Container>
  );
}
