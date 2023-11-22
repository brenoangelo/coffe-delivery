import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  AdvantageSection,
  StyledMainHeader,
  HeroSection,
  ImageContainer,
  TitleContainer,
} from './styles';
import CoffeeImage from '../../assets/images/coffee.png';
import { Container } from '../../styles/common';


export function MainHeader() {
  return (
    <StyledMainHeader>
      <Container>
        <HeroSection>
          <TitleContainer>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <AdvantageSection>
              <div>
                <span>
                  <ShoppingCart weight="fill" />
                </span>
                Compra simples e segura
              </div>
              <div>
                <span>
                  <Package weight="fill" />
                </span>{' '}
                Embalagem mantém o café intacto
              </div>
              <div>
                <span>
                  <Timer weight="fill" />
                </span>{' '}
                Entrega rápida e rastreada
              </div>
              <div>
                <span>
                  <Coffee weight="fill" />
                </span>{' '}
                O café chega fresquinho até você
              </div>
            </AdvantageSection>
          </TitleContainer>
          <ImageContainer>
            <img src={CoffeeImage} />
          </ImageContainer>
        </HeroSection>
      </Container>
    </StyledMainHeader>
  );
}
