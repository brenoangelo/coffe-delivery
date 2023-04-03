import { Container } from '../../../../styles/common';
import { ProductCard } from '../ProductCard';
import { coffeeList } from './constants';
import { CoffeeList, StyledCatalog } from './styles';

export function Catalog() {
  return (
    <StyledCatalog>
      <Container>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffeeList.map((coffee) => (
            <ProductCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </Container>
    </StyledCatalog>
  );
}
