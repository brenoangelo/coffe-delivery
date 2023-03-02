import { MapPin, ShoppingCart } from 'phosphor-react';
import LogoIcon from '../../assets/logo.svg';
import { Container } from '../../styles/common';
import { Button } from '../Button';
import { Logo, MenuContainer, StyledHeader } from './styles';

export function Header() {
  return (
    <Container>
      <StyledHeader>
        <Logo>
          <img src={LogoIcon} alt="Coffee Delivery Logo" />
        </Logo>

        <MenuContainer>
          <Button
            colorDetails={{
              background: 'lightPurple',
              icon: 'purple',
              text: 'darkPurple',
            }}
            colorDetailsHover={false}
            textTransform="capitalize"
            disabled
          >
            <MapPin size={22} weight="fill" /> Timon, MA
          </Button>
          <Button
            colorDetails={{
              background: 'lightYellow',
              icon: 'darkYellow',
            }}
            colorDetailsHover={false}
            topCountNumber={3}
          >
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </MenuContainer>
      </StyledHeader>
    </Container>
  );
}
