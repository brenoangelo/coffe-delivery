import { MapPin } from 'phosphor-react';
import { Container } from '../../styles/common';

import DeliveryImg from '../../assets/illustration.svg';

import {
  Details,
  DetailsGradientBox,
  InfoWrapper,
  StyledSuccess,
} from './styles';
import { useCheckout } from '../../hooks/useCheckout';

export function Success() {
  const { customerDetails } = useCheckout();

  const paymentMethodTitle = {
    credit: 'Cartão de credito',
    debit: "Cartão de debito",
    cash: "Dinheiro"
  }[customerDetails.paymentMethod ?? ""]

  return (
    <Container>
      <StyledSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <Details>
          <DetailsGradientBox>
            <InfoWrapper iconColor="purple">
              <div>
                <MapPin weight="fill" size={16} />
              </div>

              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {customerDetails.street}, {customerDetails.number}
                  </strong>
                </span>

                <span>
                  {customerDetails.neighborhood} - {customerDetails.city},{' '}
                  {customerDetails.state}
                </span>
              </div>
            </InfoWrapper>

            <InfoWrapper iconColor="yellow">
              <div>
                <MapPin weight="fill" size={16} />
              </div>

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </InfoWrapper>

            <InfoWrapper iconColor="darkYellow">
              <div>
                <MapPin weight="fill" size={16} />
              </div>

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethodTitle}</strong>
              </div>
            </InfoWrapper>
          </DetailsGradientBox>

          <img src={DeliveryImg} alt="Entregador a caminho" />
        </Details>
      </StyledSuccess>
    </Container>
  );
}
