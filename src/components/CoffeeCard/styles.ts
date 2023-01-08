import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem;
  background: ${(styled) => styled.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -3.75rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    color: ${(styled) => styled.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    font-weight: normal;
    color: ${(styled) => styled.theme['base-label']};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin: 1rem auto 1.25rem auto;
`;

export const Tag = styled.span`
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;

  background: ${(styled) => styled.theme['yellow-light']};
  color: ${(styled) => styled.theme['yellow-dark']};
  border-radius: 2rem;
`;

export const CardFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bolder;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: normal;
    }
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  display: flex;
  border: 0;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 0.5rem;

  transition: background-color 0.2s;

  :hover {
    background: ${(props) => props.theme['purple']};
  }
`;