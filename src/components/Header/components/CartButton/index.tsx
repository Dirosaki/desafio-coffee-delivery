import { ShoppingCart } from 'phosphor-react'

import { useCart } from 'hooks/useCart'

import * as Styled from './styles'

export function CartButton() {
	const { quantityItems } = useCart()

	return (
		<Styled.CartButton to="/finalizar-pedido">
			<ShoppingCart size={22} weight="fill" />
			{!!quantityItems && (
				<Styled.CoffeeCounter>{quantityItems}</Styled.CoffeeCounter>
			)}
		</Styled.CartButton>
	)
}
