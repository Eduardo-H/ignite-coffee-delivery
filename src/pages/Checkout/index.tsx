import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CheckoutActions } from './components/CheckoutActions';
import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutContainer } from './styles';
import { useEffect, useState } from 'react';

const newPurchaseFormValidationSchema = zod.object({
	cep: zod.string().max(8, 'Informe o CEP').regex(/^[0-9]{5}-[0-9]{3}$/, 'Informe um CEP válido'),
	street: zod.string().min(1, 'Informe a rua'),
	number: zod.string().min(1, 'Informe o número'),
	complement: zod.string().nullable(),
	district: zod.string().min(1, 'Informe o bairro'),
	city: zod.string().min(1, 'Informe a cidade'),
	state: zod.string().min(2).max(2)
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
			state: ''
		}
	});

	const { watch, reset } = newPurchaseForm;

	const cep = watch('cep');

	function handleFinishPurchase() {
		reset();
	}

	async function buscarCEP() {
		setIsSearchingCEP(true);

		try {
			const formatedCEP = cep.substring(0, 5) + '-' + cep.substring(5, 8);

			const response = await fetch(`https://cdn.apicep.com/file/apicep/${formatedCEP}.json`, {
				method: 'GET'
			});

			const cepData = await response.json();

			newPurchaseForm.setValue('street', cepData.address);
			newPurchaseForm.setValue('district', cepData.district);
			newPurchaseForm.setValue('city', cepData.city);
			newPurchaseForm.setValue('state', cepData.state);
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
			<form autoComplete="off">
				<FormProvider {...newPurchaseForm}>
					<CheckoutForm isSearchingCEP={isSearchingCEP} />
				</FormProvider>
			</form>

			<CheckoutActions onFinishPurchase={handleFinishPurchase} />
		</CheckoutContainer>
	);
}