import { ShoppingCartSimple } from 'phosphor-react';
import { useMemo, useRef, useState } from 'react';

import { CountInput } from '../ui/CountInput';
import { Coffee, CoffeeCatalog } from '../../pages/Home/types';

import {
  ActionButtons,
  CardFooter,
  CardInfo,
  CategoryFlag,
  CategoryWrapper,
  Price,
  StyledProductCard,
} from './styles';
import { Button } from '../ui/Button';
import { Product } from '../../reducers/checkout/reducer';

interface CardProps {
  coffee: Coffee;
  addNewProduct: (newCoffee: Product) => void;
}

export function ProductCard({
  coffee: { categories, description, imgUrl, price, priceFormatted, title, id },
  addNewProduct,
}: CardProps) {
  const [productCount, setProductCount] = useState(1);

  function handleAddNewProduct() {
    const newCoffee = {
      id,
      price,
      title,
      imgUrl,
      description,
      categories,
      priceFormatted,
      count: productCount,
    };

    addNewProduct(newCoffee);

    setProductCount(1);
  }

  function handleAddCount() {
    setProductCount((state) => state + 1);
  }

  function handleRemoveCount() {
    if (productCount === 1) {
      return;
    }

    setProductCount((state) => state - 1);
  }

  return (
    <StyledProductCard>
      <img src={imgUrl} alt={title} />
      <CardInfo>
        <CategoryWrapper>
          {categories.map((category) => (
            <CategoryFlag key={category.name}>{category.title}</CategoryFlag>
          ))}
        </CategoryWrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardInfo>

      <CardFooter>
        <Price>
          <h5>{priceFormatted}</h5>
        </Price>

        <ActionButtons>
          <CountInput
            count={productCount}
            handleAddCount={handleAddCount}
            handleRemoveCount={handleRemoveCount}
          />
          <Button onClick={handleAddNewProduct}>
            <ShoppingCartSimple weight="fill" size={22} />
          </Button>
        </ActionButtons>
      </CardFooter>
    </StyledProductCard>
  );
}
