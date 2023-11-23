import { ThemeType } from "../../../@types/styled";
import { ContainerProps } from "./styles";

export const colors = {
  lightPurple: 'purple-100',
  purple: 'purple-300',
  darkPurple: 'purple-700',
  lightYellow: 'yellow-100',
  yellow: 'yellow-300',
  darkYellow: 'yellow-700',
  white: 'white',
  lightGray: 'gray-400',
  gray: 'gray-500',
  mediumGray: 'gray-700',
  darkGray: 'gray-800'
};

export const setColorDetails = (
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

export const heightSizes = {
  SM: "2rem",
  MD: '2.375rem',
  XL: '2.875rem'
}