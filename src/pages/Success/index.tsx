import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect } from 'react';

import deliverySvg from '../../assets/delivery.svg';

import { SuccessContainer, SummaryCard, SummaryContainer, SummaryCardIcon } from './styles';

export function Success() {
	async function fetchDeliveryData() {
		const deliveryData = localStorage.getItem('@coffee-delivery:delivery');

		console.log(deliveryData);
	}
	
	useEffect(() => {
		fetchDeliveryData();
	}, []);

	return (
		<SuccessContainer>
			<header>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>
			</header>

			<SummaryContainer>
				<SummaryCard>
					<div>
						<SummaryCardIcon variant="purple">
							<MapPin size={16} weight="fill" />
						</SummaryCardIcon>
						<div>
							<span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
							<span>Farrapos - Porto Alegre, RS</span>
						</div>
					</div>

					<div>
						<SummaryCardIcon variant="yellow">
							<Timer size={16} weight="fill" />
						</SummaryCardIcon>
						<div>
							<span>Previsão de entrega</span>
							<span>
								<strong>20 min - 30 min</strong>
							</span>
						</div>
					</div>

					<div>
						<SummaryCardIcon variant="yellow-dark">
							<CurrencyDollar size={16} weight="fill" />
						</SummaryCardIcon>
						<div>
							<span>Pagamento na entrega</span>
							<span>
								<strong>Cartão de Crédito</strong>
							</span>
						</div>
					</div>
				</SummaryCard>

				<img src={deliverySvg} alt="Homem pilotando uma motoneta roxa com uma caixa na parte de trás" />
			</SummaryContainer>
		</SuccessContainer> 
	);
}