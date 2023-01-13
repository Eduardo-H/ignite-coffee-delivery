import { useState } from 'react';
import { ShoppingCartSimple } from 'phosphor-react';

import { AmountInput } from '../AmountInput';

import { CoffeeCardContainer, CardFooter, Tag, Tags, CardActions, CartButton } from './styles';
import { useCart } from '../../hooks/useCart';

interface CoffeeCardProps {
  id: string;
  description: string;
  name: string;
  photoUrl: string;
  tags: string[];
  price: number;
}

export function CoffeeCard({
	id,
	name,
	description,
	photoUrl,
	price,
	tags
}: CoffeeCardProps) {
	const [amount, setAmount] = useState(1);

	const { addItemToCart } = useCart();

	function handleIncreaseAmount() {
		setAmount((state) => state + 1);
	}

	function handleDecreaseAmount() {
		if (amount > 1) {
			setAmount((state) => state - 1);
		}
	}

	function handleAddItemToCart() {
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
		<CoffeeCardContainer>
			<img src={photoUrl} />

			<Tags>
				{tags.map(tag => (
					<Tag key={`${id}-${tag}`}>
						{tag}
					</Tag>
				))}
			</Tags>
			
			<h3>{name}</h3>
			<p>{description}</p>

			<CardFooter>
				<span>
					<span>R$</span>
					{Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price)}
				</span>

				<CardActions>
					<AmountInput
						amount={amount}
						onIncreaseAmount={handleIncreaseAmount}
						onDecreaseAmount={handleDecreaseAmount}
					/>

					<CartButton onClick={handleAddItemToCart}>
						<ShoppingCartSimple weight="fill" size={22} />
					</CartButton>
				</CardActions>
			</CardFooter>
		</CoffeeCardContainer>
	);
}