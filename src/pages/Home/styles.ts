import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 0;
  gap: 1rem;
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
`;

export const HeroPerks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
  margin-top: 4.125rem;

  div {
    
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