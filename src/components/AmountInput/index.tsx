import { Minus, Plus } from 'phosphor-react';

import { AmountInputContainer } from './styles';

interface AmountInputProps {
  amount: number;
  onIncreaseAmount: () => void;
  onDecreaseAmount: () => void;
}

export function AmountInput({ amount, onIncreaseAmount, onDecreaseAmount }: AmountInputProps) {
	const isDecreseAmountButtonDisabled = amount === 1;

	return (
		<AmountInputContainer>
			<button type="button" onClick={onDecreaseAmount} disabled={isDecreseAmountButtonDisabled}>
				<Minus />
			</button>
			{ amount }
			<button type="button" onClick={onIncreaseAmount}>
				<Plus />
			</button>
		</AmountInputContainer>
	);
}