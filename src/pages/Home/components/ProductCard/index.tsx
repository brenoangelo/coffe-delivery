import { ShoppingCartSimple } from 'phosphor-react';
import { Button } from '../../../../components/Button';
import { CountInput } from '../../../../components/CountInput';

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
  title: string;
  description: string;
  categories: {
    title: string;
    name: string;
  }[];
  priceFormatted: string;
  imgUrl: string;
}

export function ProductCard({
  title,
  description,
  categories,
  priceFormatted,
  imgUrl,
}: CardProps) {
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
          R$ <strong>{priceFormatted}</strong>
        </Price>

        <ActionButtons>
          <CountInput />
          <Button>
            <ShoppingCartSimple weight="fill" size={22} />
          </Button>
        </ActionButtons>
      </CardFooter>
    </StyledProductCard>
  );
}
