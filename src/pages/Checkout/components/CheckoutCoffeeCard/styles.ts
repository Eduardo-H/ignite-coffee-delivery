import styled from 'styled-components';

export const CheckoutCoffeeCardContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  margin: 1.5rem 0;
  padding-bottom: 1.5rem;  

  border-bottom: 1px solid ${(props) => props.theme['base-button']};;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};

      span:last-child {
        color: ${(props) => props.theme['base-text']};
        font-weight: bold;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 100%;

  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  font-size: 0.75rem;
  text-transform: uppercase;

  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme['purple']};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
  }
`;