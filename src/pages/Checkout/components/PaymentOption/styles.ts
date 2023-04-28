import styled, { css } from 'styled-components';

interface StyledPaymentOptionProps {
  isError: boolean;
}

export const StyledPaymentOption = styled.label<StyledPaymentOptionProps>`
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

    ${(props) =>
      props.isError &&
      css`
        box-shadow: 0 0 0 1px ${props.theme['red-300']};
      `}

    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme['gray-800']};
    }
  }

  > input {
    display: none;

    &:disabled + div {
      cursor: not-allowed;
      box-shadow: none;
      opacity: 0.5;

      &:hover {
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-700']};
      }
    }

    &:checked + div {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
      background-color: ${(props) => props.theme['purple-100']};

      svg {
        color: ${(props) => props.theme['purple-300']};
      }
    }
  }
`;
