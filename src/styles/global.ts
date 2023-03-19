import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Baloo 2', cursive;
  }

  p, span, input {
    color: ${props => props.theme['gray-800']};
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: default;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
    border-radius: 0.25rem;
  }
`;
