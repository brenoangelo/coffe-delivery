import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container, ColorDetails } from './styles';

const colorDetailsDefault: ColorDetails = {
  text: 'white',
  background: 'darkPurple',
};

const colorDetailsHoverDefault: ColorDetails = {
  ...colorDetailsDefault,
  background: 'purple',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  topCountNumber?: number | null;
  children: ReactNode;
  colorDetails?: ColorDetails;
  colorDetailsHover?: ColorDetails | boolean;
  fontWeight?: number;
  textTransform?: 'uppercase' | 'capitalize' | 'uppercase' | 'lowercase';
  size?: 'SM' | 'MD';
}

export function Button({
  fontWeight = 400,
  size = 'MD',
  colorDetails = colorDetailsDefault,
  colorDetailsHover = colorDetailsHoverDefault,
  topCountNumber = null,
  textTransform = 'uppercase',
  children,
  ...props
}: ButtonProps) {
  return (
    <Container
      colorDetails={colorDetails}
      colorDetailsHover={colorDetailsHover}
      fontWeight={fontWeight}
      size={size}
      textTransform={textTransform}
      {...props}
    >
      {topCountNumber && <span className="circleCount">{topCountNumber}</span>}
      {children}
    </Container>
  );
}
