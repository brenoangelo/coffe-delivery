import styled from 'styled-components';

export const StyledProductRow = styled.div`
  display: flex;
  gap: 1.25rem;

  padding-bottom: 1.65rem;
  border-bottom: 1px solid ${props => props.theme['gray-400']};

  & + div {
    padding-top: 1.65rem;
  }

  > img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ProductActions = styled.div`
  width: 100%;
  > span {
    display: block;
    margin-bottom: 0.5rem;
  }

  > div {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      span:last-child {
        font-weight: 700;
      }
    }

    &:last-of-type {
      display: flex;
      gap: 0.5rem;
    }
  }
`;
