import { v4 as uuidv4 } from 'uuid'

export const coffees = [
	{
		id: uuidv4(),
		img: '/coffees/expresso-tradicional.webp',
		labels: ['tradicional'],
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/expresso-americano.webp',
		labels: ['tradicional'],
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/expresso-cremoso.webp',
		labels: ['tradicional'],
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/expresso-gelado.webp',
		labels: ['tradicional', 'gelado'],
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/cafe-com-leite.webp',
		labels: ['tradicional', 'com leite'],
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/latte.webp',
		labels: ['tradicional', 'com leite'],
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/capuccino.webp',
		labels: ['tradicional', 'com leite'],
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/macchiato.webp',
		labels: ['tradicional', 'com leite'],
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/mocaccino.webp',
		labels: ['tradicional', 'com leite'],
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 9.9,
	},

	{
		id: uuidv4(),
		img: '/coffees/chocolate-quente.webp',
		labels: ['especial', 'com leite'],
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 9.9,
	},
	{
		id: uuidv4(),
		name: 'Cubano',
		img: '/coffees/cubano.webp',
		labels: ['especial', 'alcoólico', 'gelado'],
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 9.9,
	},

	{
		id: uuidv4(),
		img: '/coffees/havaiano.webp',
		labels: ['especial'],
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 9.9,
	},

	{
		id: uuidv4(),
		img: '/coffees/arabe.webp',
		labels: ['especial'],
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 9.9,
	},
	{
		id: uuidv4(),
		img: '/coffees/irlandes.webp',
		labels: ['especial', 'alcoólico'],
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 9.9,
	},
]
