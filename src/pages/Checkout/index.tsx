import { CheckoutActions } from './components/CheckoutActions';
import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutContainer } from './styles';

export function Checkout() {	
	return (
		<CheckoutContainer>
			<CheckoutForm />

			<CheckoutActions />
		</CheckoutContainer>
	);
}