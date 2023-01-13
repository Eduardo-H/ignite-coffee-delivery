import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
  margin: 2.5rem 0;
  padding: 0 2rem;

  @media (max-width: 1300px) {
    margin: 1.5rem 0;

    grid-template-columns: 1fr;
  }
`;
