import styled from 'styled-components';

export const AmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.5rem;
  text-align: center;

  background: ${(styled) => styled.theme['base-button']};
  border-radius: 6px;

  button {
    display: flex;
    align-items: center;
    padding: 2px;

    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${(styled) => styled.theme['purple']};
    border-radius: 3px;

    transition: color 0.2s;

    :hover {
      color: ${(styled) => styled.theme['purple-dark']};
    }

    :focus {
      box-shadow: 0 0 2px ${(props) => props.theme['purple']};
    }

    :disabled {
      cursor: not-allowed;
    }
  }
`;