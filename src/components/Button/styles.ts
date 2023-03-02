import styled from 'styled-components';
import { ThemeType } from '../../@types/styled';

const colors = {
  lightPurple: 'purple-100',
  purple: 'purple-300',
  darkPurple: 'purple-700',
  lightYellow: 'yellow-100',
  yellow: 'yellow-300',
  darkYellow: 'yellow-700',
  white: 'white',
};

export type ColorTypes = keyof typeof colors;

export interface ColorDetails {
  text?: ColorTypes;
  background?: ColorTypes;
  icon?: ColorTypes;
}

interface ContainerProps {
  colorDetails: ColorDetails;
  colorDetailsHover: ColorDetails | boolean;
  fontWeight: number;
  size: 'SM' | 'MD';
  textTransform: 'uppercase' | 'capitalize' | 'uppercase' | 'lowercase';
}

const setColorDetails = (
  { colorDetails, colorDetailsHover }: ContainerProps,
  state: 'default' | 'hover',
  type: 'text' | 'background' | 'icon',
) => {
  type ColorStateKeysType = keyof typeof colorState;
  const colorState = state === 'default' ? colorDetails : colorDetailsHover;

  return colors[
    colorState[(type as ColorStateKeysType) ?? 'default']
  ] as keyof ThemeType;
};

export const StyledButton = styled.button<ContainerProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
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

  .circleCount {
    position: absolute;
    right: -8px;
    top: -8px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.25rem;
    width: 1.25rem;

    border-radius: 50%;

    background-color: ${(props) =>
      props.theme[setColorDetails(props, 'default', 'icon')]};
    color: ${(props) => props.theme['white']};
    font-size: 0.75rem;
    font-weight: 700;

  }

  transition: color, background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.theme[setColorDetails(props, 'hover', 'background')]};

    color: ${(props) => props.theme[setColorDetails(props, 'hover', 'text')]};
  }
`;
