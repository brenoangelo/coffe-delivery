import { Trash } from 'phosphor-react';
import { Button } from '../../../../../components/Button';
import { CountInput } from '../../../../../components/CountInput';
import { ProductActions, StyledProductRow } from './styles';
import { Product } from '../../../../../reducers/checkout/reducer';
interface ProductRowProps {
  product: Product;
  handleRemoveProduct: (idProduct: number) => void;
  handleChangeCountProduct: (id: number, count: number) => void;
}

export function ProductRow({
  product,
  handleRemoveProduct,
  handleChangeCountProduct,
}: ProductRowProps) {
  function addCountProduct() {
    handleChangeCountProduct(product.id, product.count + 1);
  }

  function removeCountProduct() {
    if (product.count === 1) return;

    handleChangeCountProduct(product.id, product.count - 1);
  }

  if (!product?.id) {
    return null;
  }

  return (
    <StyledProductRow>
      <img src={product.imgUrl} alt={product.title} />

      <ProductActions>
        <div>
          <span>{product.title}</span>
          <span>R$ {product.priceFormatted}</span>
        </div>
        <div>
          <CountInput
            height="SM"
            count={product.count}
            handleAddCount={addCountProduct}
            handleRemoveCount={removeCountProduct}
          />
          <Button
            onClick={() => handleRemoveProduct(product.id)}
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
