import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg';
import { useCheckout } from '../../hooks/useCheckout';
import { Container } from '../../styles/common';
import { Button } from '../Button';
import { CartLink, Logo, MenuContainer, StyledHeader } from './styles';

export function Header() {
  const { cart } = useCheckout();

  return (
    <Container>
      <StyledHeader>
        <Logo>
          <Link to="/">
            <img src={LogoIcon} alt="Coffee Delivery Logo" />
          </Link>
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

          <CartLink productCount={cart?.length}>
            <Link to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </Link>

            <span className="circleCount">{cart?.length}</span>
          </CartLink>
        </MenuContainer>
      </StyledHeader>
    </Container>
  );
}
