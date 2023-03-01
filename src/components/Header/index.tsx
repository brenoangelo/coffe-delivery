import { MapPin, ShoppingCart } from 'phosphor-react';
import LogoIcon from '../../assets/logo.svg';
import { Button } from '../Button';
import { Container, Logo, MenuContainer } from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoIcon} alt="Coffee Delivery Logo" />
      </Logo>

      <MenuContainer>
        <Button>
          <MapPin size={22} /> Timon, MA
        </Button>
        <Button
          colorDetails={{
            background: 'lightYellow',
            icon: 'darkYellow',
          }}
          colorDetailsHover={false}
        >
          <ShoppingCart size={22} />
        </Button>
      </MenuContainer>
    </Container>
  );
}
