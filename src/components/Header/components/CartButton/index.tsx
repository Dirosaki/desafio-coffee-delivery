import { ShoppingCart } from 'phosphor-react'

import * as Styled from './styles'

export function CartButton() {
	const counter = 0
	return (
		<Styled.CartButton to="/carrinho">
			<ShoppingCart size={22} weight="fill" />
			{!!counter && <Styled.CoffeeCounter>{counter}</Styled.CoffeeCounter>}
		</Styled.CartButton>
	)
}
