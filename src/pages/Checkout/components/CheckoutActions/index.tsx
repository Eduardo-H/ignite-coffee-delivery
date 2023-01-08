import { coffeeSeeds } from '../../../../utils/coffee-seeds';
import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard';

import { ActionsCard, CheckoutActionsContainer, FinishPurchaseButton, PurchaseSummary } from './styles';

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

				<PurchaseSummary>
					<div>
						<span>Total de itens</span>
						<span>R$ 30,40</span>
					</div>
					<div>
						<span>Entrega</span>
						<span>R$ 7,50</span>
					</div>
					<div>
						<span>Total</span>
						<span>R$ 37,90</span>
					</div>
				</PurchaseSummary>

				<FinishPurchaseButton>
					Confirmar pedido
				</FinishPurchaseButton>
			</ActionsCard>
		</CheckoutActionsContainer>
	);
}