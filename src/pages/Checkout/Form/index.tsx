import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { Input } from './components/Input';
import { PaymentOption } from './components/PaymentOption';
import { FormBox, InputGroup, OptionGroup, SectionLabel, StyledForm } from './styles';

export function Form() {
  return (
    <StyledForm>
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
          <Input type="text" placeholder="CEP" />
          <Input type="text" placeholder="Rua" />
          <Input type="number" placeholder="Número" />
          <Input type="text" placeholder="Complemento" isOptional />
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" maxLength={2} />
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
          <PaymentOption type="credit" value="" onChange={() => {}}/>
          <PaymentOption type="debit" value="" onChange={() => {}}/>
          <PaymentOption type="cash" value="" onChange={() => {}}/>
        </OptionGroup>
      </FormBox>
    </StyledForm>
  );
}
