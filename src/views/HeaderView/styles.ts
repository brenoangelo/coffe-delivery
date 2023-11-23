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

interface CartLinkProps {
  productCount: number;
}

export const CartLink = styled.div<CartLinkProps>`
  position: relative;

  > a {
    display: block;
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2.375rem;

    background-color: ${({ theme }) => theme['yellow-100']};
    color: ${({ theme }) => theme['yellow-700']};
    border-radius: 0.375rem;

    &:focus {
      color: inset;
    }
  }

  &:before {
    position: absolute;
    right: -8px;
    top: -8px;

    content: ${({ productCount }) => productCount};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: 700;

    height: 1.25rem;
    width: 1.25rem;
    background-color: ${({ theme }) => theme['yellow-700']};
    color: ${({ theme }) => theme['white']};
  }

  .circleCount {
    position: absolute;
    right: -8px;
    top: -8px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.25rem;
    width: 1.25rem;

    border-radius: 50%;

    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['white']};
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
