import { useCart } from '../../../../hooks/useCart';

import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard';

import { ActionsCard, CheckoutActionsContainer, FinishPurchaseButton, PurchaseSummary } from './styles';

export function CheckoutActions() {
	const { items } = useCart();

	const itemsTotal = items.reduce((acc, current) => acc + current.price, 0);
	const deliveryFee = itemsTotal * 0.2;
	const totalPrice = itemsTotal + deliveryFee;
	
	return (
		<CheckoutActionsContainer>
			<h1>Cafés selecionados</h1>

			<ActionsCard>
				{items.map(coffee => (
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
						<span>R$ {Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(itemsTotal)}</span>
					</div>
					<div>
						<span>Entrega</span>
						<span>R$ {Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(deliveryFee)}</span>
					</div>
					<div>
						<span>Total</span>
						<span>R$ {Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(totalPrice)}</span>
					</div>
				</PurchaseSummary>

				<FinishPurchaseButton>
					Confirmar pedido
				</FinishPurchaseButton>
			</ActionsCard>
		</CheckoutActionsContainer>
	);
}