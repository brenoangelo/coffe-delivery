import styled from 'styled-components';
import { ThemeType } from '../../@types/styled';

export const StyledSuccess = styled.main`
  > h1 {
    color: ${({theme}) => theme['yellow-700']};
  }
`;

export const Details = styled.section`
  display: flex;
  gap: 6.375rem;
  align-items: center;
  justify-content: space-between;

  > img {
    max-width: 30.75rem;
    width: 100%;
  }
`;

export const DetailsGradientBox = styled.div`
  position: relative;
  padding: 2.5rem;

  border-radius: 6px 36px;

  background-clip: text;

  width: 100%;
  height: 100%;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    border-radius: 6px 36px;

    z-index: -1;
    content: '';
    display: block;
    background-image: ${({ theme }) =>
      `linear-gradient(102.89deg, ${theme['yellow-300']} 2.61%, ${theme['purple-300']} 98.76%)`};
  }

  &:after {
    content: '';
    background: ${(props) => props.theme['gray-100']};
    border-radius: 6px 36px;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    position: absolute;
    z-index: -1;
  }
`;

const colors = {
  yellow: 'yellow-300',
  darkYellow: 'yellow-700',
  purple: 'purple-300',
};

interface InfoWrapperProps {
  iconColor: 'yellow' | 'darkYellow' | 'purple';
}

export const InfoWrapper = styled.div<InfoWrapperProps>`
  display: flex;
  gap: 0.75rem;

  & + div {
    margin-top: 2rem;
  }

  > div {
    color: ${(props) => props.theme['gray-700']};

    &:first-child {
      color: ${(props) => props.theme['white']};
      background-color: ${({ theme, iconColor }) =>
        theme[colors[iconColor] as keyof ThemeType]};
      height: 2rem;
      width: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
    }

    &:last-child {
      span {
        display: block;
      }
    }
  }
`;
