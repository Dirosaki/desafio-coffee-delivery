import styled, { css } from 'styled-components'

import { BaseCartButton } from 'components/CartButton'

export const CartButton = styled(BaseCartButton)`
	${({ theme }) => css`
		background: ${theme.colors.brand.yellowLight};
		color: ${theme.colors.brand.yellowDark};
		transition: all 0.2s ease-out;

		&:hover {
			box-shadow: 0 0 0 1px ${theme.colors.brand.yellowDark};
		}

		&:focus-visible {
			box-shadow: 0 0 0 2px ${theme.colors.brand.yellowDark};
		}
	`}
`

export const CoffeeCounter = styled.span`
	${({ theme }) => css`
		position: absolute;
		right: -10px;
		top: -10px;
		height: 22px;
		width: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${theme.colors.brand.yellowDark};
		border-radius: 999px;
		font-size: 12px;
		font-weight: 700;
		line-height: 0;
		color: ${theme.colors.base.white};
	`}
`
