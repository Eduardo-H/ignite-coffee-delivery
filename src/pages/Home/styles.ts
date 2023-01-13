import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 2rem;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 0;
  gap: 1rem;
  
  @media (max-width: 1200px) {
    img {
      width: 40%;
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 0 4rem 0;

    img {
      display: none;
    }
  }
`;

export const HeroInfo = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bolder;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`;

export const HeroPerks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
`;

interface HeroPerksProps {
  color: 'yellow-dark' | 'base-text' | 'yellow' | 'purple';
}

export const HeroPerk = styled.div<HeroPerksProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  span {
    display: flex;
    padding: 0.75rem;
    border-radius: 50%;
    background: ${(props) => props.theme[props.color]};
    color: ${(props) => props.theme.white};
  }
`;

export const CoffeeListContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    font-weight: bolder;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;

  margin: 3rem 0;

  @media (max-width: 1124px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;