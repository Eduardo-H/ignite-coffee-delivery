import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem;
`;

export const ImageButton = styled(NavLink)`
  :focus {
    box-shadow: none;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    transition: all 0.2s;

    :hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
    }
  }
`;

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  transition: all 0.2s;

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

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
  }
`;

interface CartButtonProps {
  amount: number;
}

export const CartButton = styled(NavLink)<CartButtonProps>`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    margin-bottom: 2rem;
    margin-left: 1.2rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: bold;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};
  }
`;