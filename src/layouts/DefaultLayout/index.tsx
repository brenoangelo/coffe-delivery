import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { StyledDefaultLayout } from './styles';

import { ToastContainer } from 'react-toastify';

export function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StyledDefaultLayout>
  );
}
