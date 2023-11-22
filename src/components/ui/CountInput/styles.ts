import styled from 'styled-components';

interface StyledCountInputProps {
  height: 'MD' | 'SM';
}

export const StyledCountInput = styled.div<StyledCountInputProps>`
  background-color: ${(props) => props.theme['gray-400']};
  display: flex;

  width: 4.5rem;
  height: ${(props) => (props.height === 'MD' ? '2.375rem' : '2rem')};
  border-radius: 0.375rem;

  button {
    width: calc(4.5rem / 2);
    border: 0;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 0.2s;

    color: ${(props) => props.theme['purple-300']};

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  input {
    border: 0;
    background-color: transparent;
    width: 1.25rem;

    text-align: center;
    color: ${(props) => props.theme['gray-900']};

    :focus {
      outline: 0;
    }

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
