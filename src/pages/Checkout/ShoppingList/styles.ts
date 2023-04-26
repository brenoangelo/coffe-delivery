import styled from 'styled-components';

export const ProductsList = styled.div`
  // (total height / 2) + footer margin-top
  max-height: calc((36.93rem / 2) + 1.5rem);
  overflow: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme['gray-300']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme['gray-500']};
  }
`

export const CartFooterContainer = styled.footer`
  margin-top: 1.5rem;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
`