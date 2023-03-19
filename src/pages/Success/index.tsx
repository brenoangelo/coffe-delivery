import { MapPin } from 'phosphor-react';
import { Container } from '../../styles/common';

import DeliveryImg from '../../assets/illustration.svg'

import {
  Details,
  DetailsGradientBox,
  InfoWrapper,
  StyledSuccess,
} from './styles';

export function Success() {
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
                  Entrega em <strong>Rua João Daniel, 102</strong>
                </span>

                <span>Farrapos - Porto Alegre, RS</span>
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

                <strong>Cartão de Crédito</strong>
              </div>
            </InfoWrapper>
          </DetailsGradientBox>

          <img src={DeliveryImg} alt="Entregador a caminho"/>
        </Details>
      </StyledSuccess>
    </Container>
  );
}
