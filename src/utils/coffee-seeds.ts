import expressoTradicionalImg from '../assets/coffees/expresso-tradicional.png';
import expressoAmericanoImg from '../assets/coffees/expresso-americano.png';
import expressoCremosoImg from '../assets/coffees/expresso-cremoso.png';
import expressoGeladoImg from '../assets/coffees/expresso-gelado.png';
import cafeComLeiteImg from '../assets/coffees/cafe-com-leite.png';
import latteImg from '../assets/coffees/latte.png';
import capuccinoImg from '../assets/coffees/capuccino.png';
import macchiatoImg from '../assets/coffees/macchiato.png';
import mochaccinoImg from '../assets/coffees/mochaccino.png';
import chocolateQuenteImg from '../assets/coffees/chocolate-quente.png';
import cubanoImg from '../assets/coffees/cubano.png';
import havaianoImg from '../assets/coffees/havaiano.png';
import arabeImg from '../assets/coffees/arabe.png';
import irlandesImg from '../assets/coffees/irlandes.png';

export type Coffee = {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
  tags: string[];
  price: number;
  stockAmount: number;
}

export const coffeeSeeds: Coffee[] = [
	{
		id: '18a77fdb-9e3d-4a4d-98cc-854d18830436',
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		photoUrl: expressoTradicionalImg,
		tags: ['tradicional'],
		price: 4.9,
		stockAmount: 20
	},
	{
		id: '58397847-68e6-4e90-b585-f064e33d39b4',
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		photoUrl: expressoAmericanoImg,
		tags: ['tradicional'],
		price: 5.5,
		stockAmount: 20
	},
	{
		id: 'b164570f-f1e4-4e8c-b0a3-25a2d0222fa0',
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		photoUrl: expressoCremosoImg,
		tags: ['tradicional'],
		price: 6.9,
		stockAmount: 20
	},
	{
		id: 'cd44bc49-5d7a-4f4b-9278-93b2b54cac14',
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		photoUrl: expressoGeladoImg,
		tags: ['tradicional', 'gelado'],
		price: 6.9,
		stockAmount: 20
	},
	{
		id: '4ad49010-13a9-4094-8f51-56cb017ed568',
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		photoUrl: cafeComLeiteImg,
		tags: ['tradicional', 'com leite'],
		price: 5.9,
		stockAmount: 20
	},
	{
		id: 'c83ece68-0213-4de9-953c-7e50366f9a3e',
		name: 'Latte',
		description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		photoUrl: latteImg,
		tags: ['tradicional', 'com leite'],
		price: 9.9,
		stockAmount: 20
	},
	{
		id: '4fa89a18-ac08-4caa-9acf-a8fa80a986a2',
		name: 'Capuccino',
		description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		photoUrl: capuccinoImg,
		tags: ['tradicional', 'com leite'],
		price: 9.9,
		stockAmount: 20
	},
	{
		id: '4b0ef7ed-84ed-4455-a4a9-46253cfefb77',
		name: 'Macchiato',
		description: 'Café expresso misturado com um pouco de leite quente e espuma',
		photoUrl: macchiatoImg,
		tags: ['tradicional', 'com leite'],
		price: 12.5,
		stockAmount: 20
	},
	{
		id: 'eb14677f-6f16-4eeb-86ae-c7887c7e4c4b',
		name: 'Mochaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		photoUrl: mochaccinoImg,
		tags: ['tradicional', 'com leite'],
		price: 9.9,
		stockAmount: 20
	},
	{
		id: '98759f67-a231-4933-834d-14e679ab8a9d',
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		photoUrl: chocolateQuenteImg,
		tags: ['especial', 'com leite'],
		price: 14.9,
		stockAmount: 20
	},
	{
		id: '4427a857-daeb-4cc2-bbe9-5d1a4587db35',
		name: 'Cubano',
		description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		photoUrl: cubanoImg,
		tags: ['especial', 'alcoólico', 'gelado'],
		price: 14.9,
		stockAmount: 20
	},
	{
		id: 'b7f26eac-f33a-414e-a25e-8b5982067831',
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		photoUrl: havaianoImg,
		tags: ['especial'],
		price: 14.9,
		stockAmount: 20
	},
	{
		id: '41dea18b-91ff-484a-bd95-80137dc38f64',
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		photoUrl: arabeImg,
		tags: ['especial'],
		price: 14.9,
		stockAmount: 20
	},
	{
		id: 'a4b4acf6-bd8f-4f70-adcc-ee9a192e902f',
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		photoUrl: irlandesImg,
		tags: ['especial', 'alcoólico'],
		price: 19.9,
		stockAmount: 20
	}
];