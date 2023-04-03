import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton, ColorDetails } from './styles';

const colorDetailsDefault: ColorDetails = {
  text: 'white',
  background: 'darkPurple',
};

const colorDetailsHoverDefault: ColorDetails = {
  ...colorDetailsDefault,
  background: 'purple',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  colorDetails?: ColorDetails;
  colorDetailsHover?: ColorDetails | boolean;
  fontWeight?: number;
  textTransform?: 'uppercase' | 'capitalize' | 'uppercase' | 'lowercase';
  size?: 'SM' | 'MD';
  height?: 'SM' | 'MD' | 'XL';
}

export function Button({
  fontWeight = 400,
  size = 'MD',
  height = 'MD',
  colorDetails = colorDetailsDefault,
  colorDetailsHover = colorDetailsHoverDefault,
  textTransform = 'uppercase',
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      colorDetails={colorDetails}
      colorDetailsHover={colorDetailsHover}
      fontWeight={fontWeight}
      size={size}
      height={height}
      textTransform={textTransform}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
