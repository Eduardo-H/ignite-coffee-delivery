import { useCart } from '../../../../hooks/useCart';

import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard';

import { ActionsCard, CheckoutActionsContainer, EmptyCartText, FinishPurchaseButton, PurchaseSummary } from './styles';

interface CheckoutActionsProps {
	onFinishPurchase: () => void;
}

export function CheckoutActions({ onFinishPurchase }: CheckoutActionsProps) {
	const { items, cartItemsPrice, cartDeliveryFee, cartTotalPrice } = useCart();

	const isFinishPurchaseButtonDisabled = items.length === 0;
	
	return (
		<CheckoutActionsContainer>
			<h1>Cafés selecionados</h1>

			<ActionsCard>
				{
					items.length > 0
						? (
							items.map(coffee => (
								<CheckoutCoffeeCard
									key={coffee.id}
									id={coffee.id}
									name={coffee.name}
									photoUrl={coffee.photoUrl}
									quantity={coffee.quantity}
									price={coffee.price}
									currentPrice={coffee.currentPrice}
								/>
							))
						) : (
							<EmptyCartText>Seu carrinho está vazio</EmptyCartText>
						)
				}

				<PurchaseSummary>
					<div>
						<span>Total de itens</span>
						<span>R$ {Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(cartItemsPrice)}</span>
					</div>
					<div>
						<span>Entrega</span>
						<span>R$ {Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(cartDeliveryFee)}</span>
					</div>
					<div>
						<span>Total</span>
						<span>R$ {Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(cartTotalPrice)}</span>
					</div>
				</PurchaseSummary>

				<FinishPurchaseButton 
					onClick={onFinishPurchase}
					disabled={isFinishPurchaseButtonDisabled}
				>
					Confirmar pedido
				</FinishPurchaseButton>
			</ActionsCard>
		</CheckoutActionsContainer>
	);
}