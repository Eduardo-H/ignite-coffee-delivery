import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Spinner } from 'phosphor-react';

import { 
	Form, 
	FormCard, 
	FormContainer, 
	FormInputList, 
	PaymentTypesList, 
	PaymentTypeButton, 
	AddressHeader, 
	PaymentTypeHeader 
} from './styles';
import { useFormContext } from 'react-hook-form';

interface CheckoutFormProps {
	isSearchingCEP: boolean;
}

export function CheckoutForm({ isSearchingCEP }: CheckoutFormProps) {
	const { register } = useFormContext();

	return (
		<FormContainer>
			<h1>Complete seu pedido</h1>

			<Form>
				<FormCard>
					<AddressHeader>
						<div>
							<MapPinLine weight="light" size={22} />

							<div>
								<h2>Endereço de Entrega</h2>
								<p>Informe o endereço onde deseja receber seu pedido</p>
							</div>
						</div>

						{isSearchingCEP && (
							<span>
								<Spinner size={20} weight="bold" />
							</span>
						)}
					</AddressHeader>

					<FormInputList>
						<input type="text" placeholder="CEP" disabled={isSearchingCEP} {...register('cep', { maxLength: 8 })} />

						<input type="text" placeholder="Rua" disabled={isSearchingCEP} {...register('street')} />

						<div>
							<input type="text" placeholder="Número" disabled={isSearchingCEP} {...register('number')} />
							<input type="text" placeholder="Complemento" disabled={isSearchingCEP} {...register('complement')} />
						</div>

						<div>
							<input type="text" placeholder="Bairro" disabled={isSearchingCEP} {...register('district')} />

							<input type="text" placeholder="Cidade" disabled={isSearchingCEP} {...register('city')} />

							<input type="text" placeholder="UF" disabled={isSearchingCEP} {...register('state')} />
						</div>
					</FormInputList>
				</FormCard>

				<FormCard>
					<PaymentTypeHeader>
						<CurrencyDollar size={22} />

						<div>
							<h2>Pagamento</h2>
							<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
						</div>
					</PaymentTypeHeader>
						
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