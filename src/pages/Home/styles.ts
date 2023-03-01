import styled from 'styled-components';
import { container } from '../../styles/utils/container';

export const FullSection = styled.div`
  background-image: url(src/assets/background.svg);
  background-repeat: no-repeat;
  min-height: 34rem;


`

export const Container = styled.main`
  ${container}
`

export const HeroSection = styled.div`
  display: flex;
  gap: 3.5rem;
`

export const TitleContainer = styled.div`
  h1 {
    line-height: 3.9rem;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
  }
`

export const AdvantageSection = styled.div`
  display: flex;
  gap: 2.5rem;

  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${props => props.theme['gray-700']};

    > span {
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${props => props.theme['white']};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    &:nth-of-type(1) > span{
        background-color: ${props => props.theme['yellow-700']};
    }

    &:nth-of-type(2) > span{
      background-color: ${props => props.theme['gray-700']};
    }

    &:nth-of-type(3) > span{
      background-color: ${props => props.theme['yellow-300']};
    }

    &:nth-of-type(4) > span{
      background-color: ${props => props.theme['purple-300']};
    }
  }
`

export const ImageContainer = styled.div`
  > img {
    max-width: 29rem;
  }
`