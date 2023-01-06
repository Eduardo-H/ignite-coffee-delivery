import { MapPin, ShoppingCart } from 'phosphor-react';

import appLogo from '../../assets/app-logo.svg';

import { CartButton, HeaderButtons, HeaderContainer, LocationButton } from './styles';

export function Header() {
	return (
		<HeaderContainer>
			<img src={appLogo} />

			<HeaderButtons>
				<LocationButton>
					<MapPin weight="fill" size="22" /> Curitiba, PR
				</LocationButton>

				<CartButton>
					<ShoppingCart weight="fill" size="22" />
				</CartButton>
			</HeaderButtons>
		</HeaderContainer>
	);
}