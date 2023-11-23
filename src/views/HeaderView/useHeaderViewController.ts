import { useHeaderViewModel } from '../../viewsmodel/header/useHeaderViewModel';

export function useHeaderViewController() {
  const { cartCountProducts } = useHeaderViewModel();

  return {
    cartCountProducts,
  };
}
