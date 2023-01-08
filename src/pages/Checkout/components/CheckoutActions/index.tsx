import { coffeeSeeds } from '../../../../utils/coffee-seeds';
import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard';

import { ActionsCard, CheckoutActionsContainer } from './styles';

export function CheckoutActions() {
	const selectedCoffes = coffeeSeeds.slice(0, 2);

	return (
		<CheckoutActionsContainer>
			<h1>Cafés selecionados</h1>

			<ActionsCard>
				{selectedCoffes.map(coffee => (
					<CheckoutCoffeeCard
						key={coffee.id}
						id={coffee.id}
						name={coffee.name}
						photoUrl={coffee.photoUrl}
						price={coffee.price}
						currentPrice={coffee.price}
					/>
				))}
			</ActionsCard>
		</CheckoutActionsContainer>
	);
}