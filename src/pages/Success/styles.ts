import styled from 'styled-components';

export const SuccessContainer = styled.main`
  margin-top: 5rem;
  padding: 0 2rem;

  header {
    h1 {
      font-size: 2rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      color: ${(props) => props.theme['yellow-dark']};
      line-height: 130%;
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 130%;
    }
  }
`;

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;

  margin-top: 2.5rem;

  img {
    justify-self: end;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    img {
      width: 25rem;
      justify-self: center;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 15rem;
      justify-self: center;
    }
  }
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: fit-content;

  padding: 2.5rem;
  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;

  background: 
    linear-gradient(${((props) => props.theme['background'])}, ${((props) => props.theme['background'])}) padding-box, 
    linear-gradient(to bottom right, ${(props => props.theme['yellow'])}, ${(props => props.theme['purple'])}) border-box;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      flex-direction: column;

      color: ${(props) => props.theme['base-text']};

      span {
        line-height: 130%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

interface SummaryCardIconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark';
}

export const SummaryCardIcon = styled.span<SummaryCardIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.variant]};
  border-radius: 50%;
`;