import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import deliverySvg from '../../assets/delivery.svg';
import { useCart } from '../../hooks/useCart';

import { SuccessContainer, SummaryCard, SummaryContainer, SummaryCardIcon } from './styles';

interface DeliverySummary {
	cep: string;
	street: string;
	number: string;
	complement: string;
	district: string;
	city: string;
	state: string;
	paymentType: string;
}

export function Success() {
	const [deliverySummary, setDeliverySummary] = useState<DeliverySummary>({} as DeliverySummary);

	const { clearCart } = useCart();
	const navigate = useNavigate();

	async function fetchDeliveryData() {
		const deliveryData = localStorage.getItem('@coffee-delivery:delivery');

		if (!deliveryData) {
			return navigate('/');
		}

		setDeliverySummary(JSON.parse(deliveryData));

		console.log(deliveryData);
	}
	
	useEffect(() => {
		fetchDeliveryData();
		clearCart();
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
							<span>Entrega em <strong>{deliverySummary.street}, {deliverySummary.number}</strong></span>
							<span>{deliverySummary.district} - {deliverySummary.city}, {deliverySummary.state}</span>
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
								<strong>{deliverySummary.paymentType}</strong>
							</span>
						</div>
					</div>
				</SummaryCard>

				<img src={deliverySvg} alt="Homem pilotando uma motoneta roxa com uma caixa na parte de trás" />
			</SummaryContainer>
		</SuccessContainer> 
	);
}