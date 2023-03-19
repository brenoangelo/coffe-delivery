import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
`;

export const Logo = styled.div`
  > a {
    transition: opacity 0.3s;
    &:focus {
      box-shadow: none;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;
