import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import heroCoffeeImg from '../../assets/hero-coffee.png';
import { CoffeeCard } from '../../components/CoffeeCard';

import { CoffeeList, CoffeeListContainer, HeroContainer, HeroInfo, HeroPerk, HeroPerks, HomeContainer } from './styles';
import { coffeeSeeds } from '../../utils/coffee-seeds';
import { useEffect } from 'react';

export function Home() {
	const coffees = coffeeSeeds;

	useEffect(() => {
		localStorage.clear();
	}, []);

	return (
		<HomeContainer>
			<HeroContainer>
				<HeroInfo>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
					
					<HeroPerks>
						<HeroPerk color="yellow-dark">
							<span><ShoppingCart weight="fill" /></span>
							Compra simples e segura
						</HeroPerk>

						<HeroPerk color="base-text">
							<span><Package weight="fill" /></span>
							Embalagem mantém o café intacto
						</HeroPerk>

						<HeroPerk color="yellow">
							<span><Timer weight="fill" /></span>
							Entrega rápida e rastreada
						</HeroPerk>

						<HeroPerk color="purple">
							<span><Coffee weight="fill" /></span>
							O café chega fresquinho até você
						</HeroPerk>
						
					</HeroPerks>
				</HeroInfo>
				<img src={heroCoffeeImg} />
			</HeroContainer>

			<CoffeeListContainer>
				<h2>Nossos cafés</h2>

				<CoffeeList>
					{coffees.map(coffee => (
						<CoffeeCard
							key={coffee.id}
							id={coffee.id}
							name={coffee.name}
							description={coffee.description}
							price={coffee.price}
							tags={coffee.tags}
							photoUrl={coffee.photoUrl}
						/>
					))}
					
				</CoffeeList>
			</CoffeeListContainer>
		</HomeContainer>
	);
}