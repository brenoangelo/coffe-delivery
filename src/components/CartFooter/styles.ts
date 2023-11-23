import styled from 'styled-components';

export const StyledCartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.84rem;

  > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    &:last-child {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;
