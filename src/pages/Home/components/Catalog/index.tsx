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
            <ProductCard
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              categories={coffee.categories}
              imgUrl={coffee.imgUrl}
              priceFormatted={coffee.priceFormatted}
            />
          ))}
        </CoffeeList>
      </Container>
    </StyledCatalog>
  );
}
