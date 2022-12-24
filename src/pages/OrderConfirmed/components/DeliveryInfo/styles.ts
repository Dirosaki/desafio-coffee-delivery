import styled, { css } from 'styled-components'

type DeliveryInfoProps = {
	backgroundIcon: string
}

export const DeliveryInfo = styled.li<DeliveryInfoProps>`
	${({ theme, backgroundIcon }) => css`
		display: flex;
		align-items: center;
		gap: 12px;
		list-style: none;

		span {
			height: 2rem;
			min-width: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 999px;
			background: ${backgroundIcon};
			color: ${theme.colors.base.white};
		}
	`}
`
