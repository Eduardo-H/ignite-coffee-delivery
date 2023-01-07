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