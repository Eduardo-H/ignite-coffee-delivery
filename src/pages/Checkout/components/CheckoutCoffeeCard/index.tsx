import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { AmountInput } from '../../../../components/AmountInput';
import { Actions, CheckoutCoffeeCardContainer, RemoveCoffeeButton } from './styles';

interface CheckoutCoffeeCardProps {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  currentPrice: number;
}

export function CheckoutCoffeeCard({
	id,
	name,
	photoUrl,
	price,
	currentPrice
}: CheckoutCoffeeCardProps) {
	const [amount, setAmount] = useState(1);

	function handleIncreaseAmount() {
		setAmount((state) => state + 1);
	}

	function handleDecreaseAmount() {
		if (amount > 1) {
			setAmount((state) => state - 1);
		}
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

					<RemoveCoffeeButton>
						<Trash size={16} />
            Remover
					</RemoveCoffeeButton>
				</Actions>
			</div>						
		</CheckoutCoffeeCardContainer>
	);
}