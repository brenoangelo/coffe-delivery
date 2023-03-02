import { Catalog } from "./components/Catalog";
import { MainHeader } from "./components/MainHeader";
import { StyledHome } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <MainHeader />
      <Catalog />
    </StyledHome>
  );
}
