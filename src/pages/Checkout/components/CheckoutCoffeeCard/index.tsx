import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { AmountInput } from '../../../../components/AmountInput';
import { useCart } from '../../../../hooks/useCart';
import { Actions, CheckoutCoffeeCardContainer, RemoveCoffeeButton } from './styles';

interface CheckoutCoffeeCardProps {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
	quantity: number;
  currentPrice: number;
}

export function CheckoutCoffeeCard({
	id,
	name,
	photoUrl,
	quantity,
	price,
	currentPrice
}: CheckoutCoffeeCardProps) {
	const [amount, setAmount] = useState(quantity);

	const { addItemToCart, removeItemFromCart } = useCart();

	function handleIncreaseAmount() {
		const updatedAmount = amount + 1;

		setAmount(updatedAmount);
		updateItemQuantityAndPrice(updatedAmount);
	}

	function handleDecreaseAmount() {
		if (amount > 1) {
			const updatedAmount = amount - 1;

			setAmount(updatedAmount);
			updateItemQuantityAndPrice(updatedAmount);
		}
	}

	function handleRemoveItemFromCart() {
		removeItemFromCart(id);
	}

	function updateItemQuantityAndPrice(amount: number) {
		const itemPrice = price * amount;

		addItemToCart({
			id,
			name,
			photoUrl,
			price: price,
			quantity: amount,
			currentPrice: itemPrice
		});
	}

	return (
		<CheckoutCoffeeCardContainer>
			<img src={photoUrl} />
      
			<div>
				<header>
					<span>{name}</span>

					<span>
						{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentPrice)}
					</span>
				</header>

				<Actions>
					<AmountInput
						amount={amount}
						onIncreaseAmount={handleIncreaseAmount}
						onDecreaseAmount={handleDecreaseAmount}
					/>

					<RemoveCoffeeButton onClick={handleRemoveItemFromCart}>
						<Trash size={16} />
            Remover
					</RemoveCoffeeButton>
				</Actions>
			</div>						
		</CheckoutCoffeeCardContainer>
	);
}