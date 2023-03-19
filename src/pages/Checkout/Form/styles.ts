import styled from 'styled-components';
import { BoxBase } from '../styles';

export const StyledForm = styled.form`
  max-width: 40rem;
  width: 100%;

  > h4 {
    margin-bottom: 0.93rem;
    font-size: 1.125rem;
  }
`;

export const FormBox = styled(BoxBase)`
  &:first-of-type {
    margin-bottom: 0.75rem;
  }
`;

interface SectionLabelProps {
  iconColor: 'purple' | 'yellow';
}

export const SectionLabel = styled.label<SectionLabelProps>`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  > div {
    > span {
      display: block;
      margin-bottom: 0.25rem;
    }

    > p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  > svg {
    color: ${({ theme, iconColor }) =>
      theme[iconColor === 'yellow' ? 'yellow-700' : 'purple-300']};
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

export const OptionGroup = styled.fieldset`
  border: 0;
  display: flex;
  flex: 1;
  gap: 0.75rem;
`
