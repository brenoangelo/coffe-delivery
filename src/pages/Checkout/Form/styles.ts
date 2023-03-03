import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 40rem;
  width: 100%;
`;

export const FormBox = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
`;

export const SectionLabel = styled.label`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  > div {
    > p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  > svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  gap: 1rem;

  > div:nth-of-type(1) {
    grid-area: cep;
  }

  > div:nth-of-type(2) {
    grid-area: street;
  }

  > div:nth-of-type(3) {
    grid-area: number;
  }

  > div:nth-of-type(4) {
    grid-area: complement;
  }

  > div:nth-of-type(5) {
    grid-area: neighborhood;
  }

  > div:nth-of-type(6) {
    grid-area: city;
  }

  > div:nth-of-type(7) {
    grid-area: uf;
  }
`;
