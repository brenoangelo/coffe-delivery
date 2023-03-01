import { ReactNode } from 'react';
import { Container, ColorDetails } from './styles';

const colorDetailsDefault: ColorDetails = {
  text: 'white',
  background: 'darkPurple',
};

const colorDetailsHoverDefault: ColorDetails = {
  ...colorDetailsDefault,
  background: 'purple',
};

interface ButtonProps {
  topCountNumber?: number | null;
  children: ReactNode;
  colorDetails?: ColorDetails;
  colorDetailsHover?: ColorDetails | boolean;
  fontWeight?: number;
  size?: 'SM' | 'MD';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  fontWeight = 400,
  size = 'MD',
  colorDetails = colorDetailsDefault,
  colorDetailsHover = colorDetailsHoverDefault,
  topCountNumber = null,
  onClick,
  children,
}:
ButtonProps) {
  return (
    <Container
      colorDetails={colorDetails}
      colorDetailsHover={colorDetailsHover}
      fontWeight={fontWeight}
      size={size}
      onClick={onClick}
    >
      {topCountNumber && <span className="circleCount">{topCountNumber}</span>}
      {children}
    </Container>
  );
}
