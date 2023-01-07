import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
  margin: 2.5rem 0;
`;

export const FormContainer = styled.div`
  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const FormCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      line-height: 130%;

      h2 {
        font-size: 1rem;
        font-weight: normal;
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  &:last-child header svg {
    color: ${(props) => props.theme['purple']};
  }
`;

export const FormInputList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: grid;
    gap: 0.875rem;
  }

  div {
    grid-template-columns: 35% 1fr;
  }

  div:last-child {
    grid-template-columns: 35% 1fr 10%;
  }

  input {
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    font-size: 0.875rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    :focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }

    :disabled {
      background: ${(props) => props.theme['base-button']};
      cursor: not-allowed;
    }
  }

  > input:first-child {
    width: 35%;
  }
`;

export const PaymentTypesList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const PaymentTypeButton = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.875rem;

  border: 0;
  cursor: pointer;
  padding: 1rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 1px solid transparent;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;

  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme['purple']};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }

  :has(input:checked) {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme['purple']};
  }
`;

export const ActionsContainer = styled.div`
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