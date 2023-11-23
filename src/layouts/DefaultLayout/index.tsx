import { Outlet } from 'react-router-dom';

import { StyledDefaultLayout } from './styles';

import { ToastContainer } from 'react-toastify';
import { HeaderView } from '../../views/HeaderView';

export function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <HeaderView />
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
