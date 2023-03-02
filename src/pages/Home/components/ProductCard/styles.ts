import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;

  padding: 1.25rem;
  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 0.375rem 2.25rem;

  > img {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const CardInfo = styled.main`
  margin: calc(7.5rem - 20px) 0 2rem 0;

  text-align: center;

  h3 {
    font-size: 1.25rem;
  }

  > p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const CategoryFlag = styled.span`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;

  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.375rem;
`;

export const Price = styled.div`
  color: ${props => props.theme['gray-700']};

  font-size: 0.875rem;

  > strong {
    font-size: 1.5rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;
