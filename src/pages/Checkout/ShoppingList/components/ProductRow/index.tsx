import { Trash } from 'phosphor-react';
import { Button } from '../../../../../components/Button';
import { CountInput } from '../../../../../components/CountInput';
import { ProductActions, StyledProductRow } from './styles';

interface ProductRowProps {
  product: {
    title: string;
    imgUrl: string;
    priceFormatted: string;
  };
}

export function ProductRow({ product }: ProductRowProps) {
  return (
    <StyledProductRow>
      <img src={product.imgUrl} alt={product.title} />

      <ProductActions>
        <div>
          <span>{product.title}</span>
          <span>R$ {product.priceFormatted}</span>
        </div>
        <div>
          <CountInput height="SM" />
          <Button
            colorDetails={{
              background: 'lightGray',
              text: 'mediumGray',
              icon: 'purple',
            }}
            colorDetailsHover={{
              background: 'gray',
              text: 'darkGray',
            }}
            size="SM"
            height="SM"
          >
            <Trash size={16} />
            Remover
          </Button>
        </div>
      </ProductActions>
    </StyledProductRow>
  );
}
