import { ShoppingCartSimple } from 'phosphor-react';
import { useMemo, useRef, useState } from 'react';
import { Button } from '../../../../components/Button';
import { CountInput } from '../../../../components/CountInput';
import { useCheckout } from '../../../../hooks/useCheckout';
import { Coffee, CoffeeCatalog } from '../../types';

import {
  ActionButtons,
  CardFooter,
  CardInfo,
  CategoryFlag,
  CategoryWrapper,
  Price,
  StyledProductCard,
} from './styles';

interface CardProps {
  coffee: Coffee;
  key: number;
}

export function ProductCard({
  coffee: {
    categories,
    description,
    imgUrl,
    price,
    priceFormatted,
    title,
    id
  },
}: CardProps) {
  const { addNewProduct } = useCheckout();
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
          R$ <h5>{priceFormatted}</h5>
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
