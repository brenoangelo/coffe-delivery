import styled from 'styled-components';
import { container } from '../../styles/utils/container';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.5rem;

  ${container}
`;

export const Logo = styled.div`
  > img {
    width: 5.31rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;
