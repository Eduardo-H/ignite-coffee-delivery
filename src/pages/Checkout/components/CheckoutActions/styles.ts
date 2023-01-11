import styled from 'styled-components';

export const CheckoutActionsContainer = styled.div`
  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;

    margin-bottom: 1rem;
  }
`;

export const ActionsCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
`;

export const EmptyCartText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`;

export const PurchaseSummary = styled.div`
  margin-top: 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    span:first-child {
      font-size: 0.875rem;
    }

    span:last-child {
      font-size: 1rem;
    }
  }

  div:last-child {
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};

    span {
      font-size: 1.25rem;
    }
  }
`;

export const FinishPurchaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.875rem;
  margin-top: 1.5rem;

  cursor: pointer;
  border: 0; 
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};

  transition: all 0.2s;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  :disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme['yellow-dark']};
  }
`;