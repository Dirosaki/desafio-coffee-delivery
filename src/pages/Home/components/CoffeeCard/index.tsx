import { useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import { NumberInput } from 'components/NumberInput'

import { formatPrice } from 'utils/formatPrice'

import * as Styled from './styles'

type CoffeeProps = {
	id: string
	img: string
	labels: string[]
	name: string
	description: string
	price: number
}

type CoffeeCardProps = {
	coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	const [quantityCoffee, setQuantityCoffee] = useState(1)

	function handleIncreaseQuantityCoffee() {
		if (quantityCoffee === 99) return
		setQuantityCoffee((state) => state + 1)
	}

	function handleDecreaseQuantityCoffee() {
		if (quantityCoffee === 1) return
		setQuantityCoffee((state) => state - 1)
	}

	function handleQuantityCoffeeReceived(quantity: number) {
		setQuantityCoffee(quantity)
	}

	const formattedPrice = formatPrice(coffee.price)

	return (
		<Styled.Card>
			<Styled.CoffeeImage src={coffee.img} alt="" />
			<Styled.Labels>
				{coffee.labels.map((label) => (
					<Styled.Label key={label}>{label}</Styled.Label>
				))}
			</Styled.Labels>
			<Styled.CoffeeName>{coffee.name}</Styled.CoffeeName>
			<Styled.Description>{coffee.description}</Styled.Description>
			<Styled.Footer>
				<Styled.PricePrefix>
					R$&nbsp;
					<Styled.PriceValue size="m" as="strong">
						{formattedPrice}
					</Styled.PriceValue>
				</Styled.PricePrefix>
				<Styled.ActionWrapper>
					<NumberInput
						quantityCoffee={quantityCoffee}
						onIncreaseQuantityCoffee={handleIncreaseQuantityCoffee}
						onDecreaseQuantityCoffee={handleDecreaseQuantityCoffee}
						onQuantityCoffeeReceived={handleQuantityCoffeeReceived}
					/>
					<Styled.CartButton type="button" as="button">
						<ShoppingCart size={20} weight="fill" />
					</Styled.CartButton>
				</Styled.ActionWrapper>
			</Styled.Footer>
		</Styled.Card>
	)
}
