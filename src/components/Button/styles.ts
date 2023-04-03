import styled from 'styled-components';
import { colors, heightSizes, setColorDetails } from './constants';

export type ColorTypes = keyof typeof colors;
export interface ColorDetails {
  text?: ColorTypes;
  background?: ColorTypes;
  icon?: ColorTypes;
}

export interface ContainerProps {
  colorDetails: ColorDetails;
  colorDetailsHover: ColorDetails | boolean;
  fontWeight: number;
  size: 'SM' | 'MD';
  height: 'SM' | 'MD' | 'XL';
  textTransform: 'uppercase' | 'capitalize' | 'uppercase' | 'lowercase';
}

export const StyledButton = styled.button<ContainerProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: ${props => heightSizes[props.height]};

  padding: 0 0.5rem;
  border-radius: 0.375rem;
  border: none;

  text-transform: ${({ textTransform }) => textTransform};

  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ size }) => (size === 'MD' ? '0.875rem' : '0.75rem')};

  background-color: ${(props) =>
    props.theme[setColorDetails(props, 'default', 'background')]};
  color: ${(props) => props.theme[setColorDetails(props, 'default', 'text')]};

  svg {
    color: ${(props) => props.theme[setColorDetails(props, 'default', 'icon')]};
  }

  transition: color, background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.theme[setColorDetails(props, 'hover', 'background')]};

    color: ${(props) => props.theme[setColorDetails(props, 'hover', 'text')]};
  }
`;
