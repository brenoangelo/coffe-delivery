import styled, { css } from 'styled-components';

interface StyledInputProps {
  isOptional: boolean;
  isError: boolean;
}

export const StyledInput = styled.div<StyledInputProps>`
  position: relative;
  height: 2.625rem;

  input {
    width: 100%;
    height: 100%;
    padding-left: 0.75rem;

    ${(props) =>
      props.isOptional
        ? css`
            padding-right: 4rem;
          `
        : ''}

    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;

    border: 1px solid ${(props) => props.isError ? props.theme['red-300'] : props.theme['gray-400']};

    border-radius: 0.25rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  ${(props) =>
    props.isOptional
      ? css`
          &:before {
            content: 'Opcional';
            display: block;
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);

            font-style: italic;
            font-size: 0.75rem;
            box-shadow:  ${(props) => props.theme['gray-600']};
          }
        `
      : ''}
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  display: block;

  color: ${props => props.theme['red-300']};

  margin-top: 0.05rem;
`
