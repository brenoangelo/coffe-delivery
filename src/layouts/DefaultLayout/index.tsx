import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledDefaultLayout } from "./styles";

export function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <Outlet />
    </StyledDefaultLayout>
  )
}