import styled from 'styled-components';

export const StyledPaymentOption = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    height: 3rem;
    width: 100%;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-700']};

    border-radius: 0.375rem;

    font-size: 0.75rem;
    text-transform: uppercase;

    cursor: pointer;

    transition: color, background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme['gray-800']};
    }
  }

  > input {
    display: none;

    &:checked + div {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
      background-color: ${(props) => props.theme['purple-100']};

      svg {
        color: ${(props) => props.theme['purple-300']};
      }
    }
  }
`;
