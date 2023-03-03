import { MapPinLine } from 'phosphor-react';
import { Input } from './Input';
import { FormBox, InputGroup, SectionLabel, StyledForm } from './styles';

export function Form() {
  return (
    <StyledForm>
      <h4>Complete seu pedido</h4>

      <FormBox>
        <SectionLabel>
          <MapPinLine weight="regular" size={22} />
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
    </StyledForm>
  );
}
