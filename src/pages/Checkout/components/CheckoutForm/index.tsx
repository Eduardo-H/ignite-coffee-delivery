import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Spinner } from 'phosphor-react';

import { 
	Form, 
	FormCard, 
	FormContainer, 
	FormInputList, 
	PaymentTypesList, 
	PaymentTypeButton, 
	AddressHeader, 
	PaymentTypeHeader, 
	InputContainer,
	InputRow,
	InputError
} from './styles';
import { useFormContext } from 'react-hook-form';

interface CheckoutFormProps {
	isSearchingCEP: boolean;
}

export function CheckoutForm({ isSearchingCEP }: CheckoutFormProps) {
	const { register, setValue, formState } = useFormContext();

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
						<InputContainer>
							<input type="text" placeholder="CEP" disabled={isSearchingCEP} {...register('cep', { maxLength: 8 })} />
							{formState.errors.cep && <InputError>{formState.errors.cep.message?.toString()}</InputError>}
						</InputContainer>

						<InputContainer>
							<input type="text" placeholder="Rua" disabled={isSearchingCEP} {...register('street')} />
							{formState.errors.street && <InputError>{formState.errors.street.message?.toString()}</InputError>}
						</InputContainer>
						

						<InputRow>
							<InputContainer>
								<input type="text" placeholder="Número" disabled={isSearchingCEP} {...register('number')} />
								{formState.errors.number && <InputError>{formState.errors.number.message?.toString()}</InputError>}
							</InputContainer>

							<InputContainer>
								<input type="text" placeholder="Complemento" disabled={isSearchingCEP} {...register('complement')} />
								{formState.errors.complement && <InputError>{formState.errors.complement.message?.toString()}</InputError>}
							</InputContainer>							
						</InputRow>

						<InputRow>
							<InputContainer>
								<input type="text" placeholder="Bairro" disabled={isSearchingCEP} {...register('district')} />
								{formState.errors.district && <InputError>{formState.errors.district.message?.toString()}</InputError>}
							</InputContainer>
							
							<InputContainer>
								<input type="text" placeholder="Cidade" disabled={isSearchingCEP} {...register('city')} />
								{formState.errors.city && <InputError>{formState.errors.city.message?.toString()}</InputError>}
							</InputContainer>
							
							<InputContainer>
								<input type="text" placeholder="UF" disabled={isSearchingCEP} {...register('state')} />
								{formState.errors.state && <InputError>{formState.errors.state.message?.toString()}</InputError>}
							</InputContainer>
						</InputRow>
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
						<PaymentTypeButton htmlFor="credit-card" onClick={() => setValue('paymentType', 'Cartão de Crédito')}>
							<CreditCard size={16} />
								Cartão de crédito

							<input type="radio" id="credit-card" name="payment-type" hidden />
						</PaymentTypeButton>

						<PaymentTypeButton htmlFor="debit-card" onClick={() => setValue('paymentType', 'Cartão de Débito')}>
							<Bank size={16} />
								Cartão de débito

							<input type="radio" id="debit-card" name="payment-type" hidden />
						</PaymentTypeButton>

						<PaymentTypeButton htmlFor="cash" onClick={() => setValue('paymentType', 'Dinheiro')}>
							<Money size={16}/>
								Dinheiro

							<input type="radio" id="cash" name="payment-type" hidden />
						</PaymentTypeButton>
					</PaymentTypesList>

					{formState.errors.paymentType && <InputError>Selecione um método de pagamento</InputError>}
				</FormCard>
			</Form>
		</FormContainer>
	);
}