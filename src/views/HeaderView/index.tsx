import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg';
import { Container } from '../../styles/common';

import { CartLink, Logo, MenuContainer, StyledHeader } from './styles';
import { Button } from '../../components/ui/Button';
import { useHeaderViewController } from './useHeaderViewController';

export function HeaderView() {
  const { cartCountProducts } = useHeaderViewController();

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

          <CartLink productCount={cartCountProducts}>
            <Link to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </Link>

            <span className="circleCount">{cartCountProducts}</span>
          </CartLink>
        </MenuContainer>
      </StyledHeader>
    </Container>
  );
}
