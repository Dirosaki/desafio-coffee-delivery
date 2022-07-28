import styled, { css } from 'styled-components'

type BenefitProps = {
	backgroundIcon: string
}

export const Benefit = styled.p<BenefitProps>`
	${({ theme, backgroundIcon }) => css`
		display: flex;
		align-items: center;
		gap: 12px;
		line-height: initial;

		span {
			height: 36px;
			width: 36px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: ${backgroundIcon};
			border-radius: 999px;
			color: ${theme.colors.base.white};
		}

		@media (max-width: 1150px) {
			span {
				height: 34px;
				width: 34px;
			}
		}
	`}
`
