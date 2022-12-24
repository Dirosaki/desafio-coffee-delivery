import styled, { css } from 'styled-components'

import { BaseCartButton } from 'components/CartButton'
import { Text, Title } from 'components/Typography'

export const Card = styled.div`
	${({ theme }) => css`
		padding: 1.25rem 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: ${theme.colors.base.card};
		border-radius: 6px 36px;
	`}
`

export const CoffeeImage = styled.img`
	margin-top: -2.5rem;
`

export const Labels = styled.div`
	margin: 1rem 0 1.25rem;
	display: flex;
	gap: 4px;
`

export const Label = styled.span`
	${({ theme }) => css`
		padding: 4px 8px;
		border-radius: 100px;
		background: ${theme.colors.brand.yellowLight};
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		color: ${theme.colors.brand.yellowDark};
	`}
`

export const CoffeeName = styled(Title).attrs({
	size: 's',
	color: 'subtitle',
	weight: 700,
	as: 'strong',
})`
	margin-bottom: 0.5rem;
`

export const Description = styled(Text).attrs({
	size: 's',
	color: 'text',
	as: 'p',
})`
	margin-bottom: 2rem;
	width: calc(100% + 8px);
	text-align: center;
`

export const Footer = styled.footer`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 24px;
`

export const PricePrefix = styled(Text).attrs({
	size: 's',
	color: 'text',
	as: 'span',
})``

export const PriceValue = styled(Title).attrs({
	size: 'm',
	as: 'strong',
})``

export const ActionWrapper = styled.div`
	width: 7.75rem;
	display: flex;
	justify-content: space-between;
	gap: 8px;

	input {
		width: 100%;
		min-width: 18px;
	}
`

export const CartButton = styled(BaseCartButton)`
	${({ theme }) => css`
		background: ${theme.colors.brand.purpleDark};
		color: ${theme.colors.base.card};

		&:hover {
			background: ${theme.colors.brand.purple};
		}

		&:focus-visible {
			background: ${theme.colors.brand.purple};
			box-shadow: 0 0 0 2px ${theme.colors.base.title};
		}
	`}
`
