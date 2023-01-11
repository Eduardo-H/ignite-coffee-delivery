import { MapPin, ShoppingCart } from 'phosphor-react';

import { useCart } from '../../hooks/useCart';

import appLogo from '../../assets/app-logo.svg';

import { CartButton, HeaderButtons, HeaderContainer, ImageButton, LocationButton } from './styles';

export function Header() {
	const { items } = useCart();

	return (
		<HeaderContainer>
			<ImageButton to="/">
				<img src={appLogo} />
			</ImageButton>
			
			<HeaderButtons>
				<LocationButton>
					<MapPin weight="fill" size="22" /> Curitiba, PR
				</LocationButton>

				<CartButton to="/checkout" amount={items.length}>
					<ShoppingCart weight="fill" size="22" />
					{ items.length > 0 && <span>{items.length}</span> }
				</CartButton>
			</HeaderButtons>
		</HeaderContainer>
	);
}