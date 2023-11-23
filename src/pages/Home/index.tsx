import { MainHeader } from '../../components/MainHeader';
import { CatalogView } from '../../views/CatalogView';
import { StyledHome } from './styles';

export function HomePage() {
  return (
    <StyledHome>
      <MainHeader />
      <CatalogView />
    </StyledHome>
  );
}
