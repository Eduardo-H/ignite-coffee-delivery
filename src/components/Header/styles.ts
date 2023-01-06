import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;
`

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;

  transition: all 0.2s;
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['purple']};
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  :hover {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }
`