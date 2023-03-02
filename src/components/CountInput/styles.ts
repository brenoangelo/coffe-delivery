import styled from 'styled-components';

export const StyledCountInput = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  display: flex;

  width: 4.5rem;
  height: 2.375rem;
  border-radius: 0.375rem;

  button {
    width: calc(4.5rem / 2);
    border: 0;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme['purple-300']};
  }

  input {
    border: 0;
    background-color: transparent;
    width: 1.25rem;

    text-align: center;
    color: ${props => props.theme['gray-900']};


    :focus {
      outline: 0;
    }

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
