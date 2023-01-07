import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import appLogo from '../../assets/app-logo.svg';

import { HeaderButtons, HeaderContainer, LocationButton } from './styles';

export function Header() {
	return (
		<HeaderContainer>
			<img src={appLogo} />

			<HeaderButtons>
				<LocationButton>
					<MapPin weight="fill" size="22" /> Curitiba, PR
				</LocationButton>

				<NavLink to="/checkout">
					<ShoppingCart weight="fill" size="22" />
				</NavLink>
			</HeaderButtons>
		</HeaderContainer>
	);
}