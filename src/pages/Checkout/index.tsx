import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CheckoutActions } from './components/CheckoutActions';
import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutContainer } from './styles';
import { useEffect, useState } from 'react';

const newPurchaseFormValidationSchema = zod.object({
	cep: zod.string().min(8, 'Informe um CEP completo'),
	street: zod.string().min(1, 'Informe a rua'),
	number: zod.string().min(1, 'Informe o número'),
	complement: zod.string().optional(),
	district: zod.string().min(1, 'Informe o bairro'),
	city: zod.string().min(1, 'Informe a cidade'),
	state: zod.string().min(2, 'Informe a UF').max(2, 'Informe a UF'),
	paymentType: zod.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'])
});

type NewPurchaseFormData = zod.infer<typeof newPurchaseFormValidationSchema>

export function Checkout() {
	const [isSearchingCEP, setIsSearchingCEP] = useState(false);

	const newPurchaseForm = useForm<NewPurchaseFormData>({
		resolver: zodResolver(newPurchaseFormValidationSchema),
		defaultValues: {
			cep: '',
			street: '',
			number: '',
			complement: '',
			district: '',
			city: '',
			state: '',
			paymentType: undefined
		}
	});

	const { handleSubmit, watch, reset } = newPurchaseForm;

	const cep = watch('cep');

	function handleFinishPurchase(data: NewPurchaseFormData) {
		reset();
	}

	async function buscarCEP() {
		setIsSearchingCEP(true);

		try {
			const formatedCEP = cep.substring(0, 5) + '-' + cep.substring(5, 8);

			const response = await fetch(`https://cdn.apicep.com/file/apicep/${formatedCEP}.json`, {
				method: 'GET'
			});

			const addressData = await response.json();

			newPurchaseForm.setValue('street', addressData.address);
			newPurchaseForm.setValue('district', addressData.district);
			newPurchaseForm.setValue('city', addressData.city);
			newPurchaseForm.setValue('state', addressData.state);
		} catch(error) {
			window.alert('O CEP informado não foi encontrado.');
		} finally {
			setIsSearchingCEP(false);
		}
	}

	useEffect(() => {
		if (cep.length === 8) {
			buscarCEP();
		}
	}, [cep]);

	return (
		<CheckoutContainer>
			<FormProvider {...newPurchaseForm}>
				<form autoComplete="off">
					<CheckoutForm isSearchingCEP={isSearchingCEP} />
				</form>

				<CheckoutActions onFinishPurchase={handleSubmit(handleFinishPurchase)} />
			</FormProvider>
		</CheckoutContainer>
	);
}