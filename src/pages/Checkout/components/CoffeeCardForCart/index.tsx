import { Trash } from 'phosphor-react'

import { useCart } from 'hooks/useCart'

import { CoffeeProps } from 'pages/Home/components/CoffeeCard'

import { NumberInput } from 'components/NumberInput'
import { Text } from 'components/Typography'

import { formatPrice } from 'utils/formatPrice'

import * as Styled from './styles'

type CoffeeCardForCartProps = {
	coffee: CoffeeProps
}

export const CoffeeCardForCart = ({ coffee }: CoffeeCardForCartProps) => {
	const {
		removeItemById,
		increaseItemQuantityById,
		decreaseItemQuantityById,
		changeItemQuantityById,
	} = useCart()
	const coffeeTotalPrice = coffee.price * coffee.quantity

	const formattedPrice = formatPrice(coffeeTotalPrice)

	function handleRemoveItem() {
		removeItemById(coffee.id)
	}

	function handleIncreaseItemQuantity() {
		increaseItemQuantityById(coffee.id)
	}

	function handleDecreaseItemQuantity() {
		decreaseItemQuantityById(coffee.id)
	}

	function handleChangeItemQuantity(quantity: number) {
		changeItemQuantityById(coffee.id, quantity)
	}

	return (
		<Styled.CardContainer>
			<Styled.Info>
				<img src={coffee.img} alt="" />
				<Styled.Details>
					<Text color="subtitle" as="strong">
						{coffee.name}
					</Text>
					<NumberInput
						quantityCoffee={coffee.quantity}
						onIncreaseQuantityCoffee={handleIncreaseItemQuantity}
						onDecreaseQuantityCoffee={handleDecreaseItemQuantity}
						onQuantityCoffeeReceived={handleChangeItemQuantity}
					/>
					<Styled.RemoveButton type="button" onClick={handleRemoveItem}>
						<Trash />
						<span>Remover</span>
					</Styled.RemoveButton>
				</Styled.Details>
			</Styled.Info>
			<Text weight={700} as="p">
				R$ {formattedPrice}
			</Text>
		</Styled.CardContainer>
	)
}
