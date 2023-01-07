import { useState } from 'react';
import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react';

import { Form, FormCard, FormContainer, FormInputList, PaymentTypesList, PaymentTypeButton } from './styles';

export function CheckoutForm() {
	const [isSearchingCEP, setIsSearchingCEP] = useState(false);

	return (
		<FormContainer>
			<h1>Complete seu pedido</h1>

			<Form autoComplete="off">
				<FormCard>
					<header>
						<MapPinLine weight="light" size={22} />

						<div>
							<h2>Endereço de Entrega</h2>
							<p>Informe o endereço onde deseja receber seu pedido</p>
						</div>
					</header>

					<FormInputList>
						<input type="text" placeholder="CEP" disabled={isSearchingCEP} />

						<input type="text" placeholder="Rua" disabled={isSearchingCEP} />

						<div>
							<input type="text" placeholder="Número" disabled={isSearchingCEP} />
							<input type="text" placeholder="Complemento" disabled={isSearchingCEP} />
						</div>

						<div>
							<input type="text" placeholder="Bairro" disabled={isSearchingCEP} />

							<input type="text" placeholder="Cidade" disabled={isSearchingCEP} />

							<input type="text" placeholder="UF" disabled={isSearchingCEP} />
						</div>
					</FormInputList>
				</FormCard>

				<FormCard>
					<header>
						<Money size={22} />

						<div>
							<h2>Pagamento</h2>
							<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
						</div>
					</header>
						
					<PaymentTypesList>
						<PaymentTypeButton htmlFor="credit-card">
							<CreditCard size={16} />
								Cartão de crédito

							<input type="radio" id="credit-card" name="payment-type" hidden />
						</PaymentTypeButton>

						<PaymentTypeButton htmlFor="debit-card">
							<Bank size={16} />
								Cartão de débito

							<input type="radio" id="debit-card" name="payment-type" hidden />
						</PaymentTypeButton>

						<PaymentTypeButton htmlFor="cash">
							<Money size={16}/>
								Dinheiro

							<input type="radio" id="cash" name="payment-type" hidden />
						</PaymentTypeButton>
					</PaymentTypesList>
				</FormCard>
			</Form>
		</FormContainer>
	);
}