import styled, { css } from 'styled-components'

export const Header = styled.header`
	${({ theme }) => css`
		padding: 2rem 10rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: ${theme.colors.base.background};

		@media (max-width: 1366px) {
			padding: 2rem 5rem;
		}

		@media (max-width: 768px) {
			padding: 1.5rem 2.5rem;
		}

		@media (max-width: 450px) {
			padding: 1.5rem 1.5rem;
		}
	`}
`

export const ActionsWrapper = styled.div`
	display: flex;
	gap: 12px;
`

export const MyLocation = styled.div`
	${({ theme }) => css`
		padding: 8px;
		display: flex;
		align-items: center;
		gap: 4px;
		background: ${theme.colors.brand.purpleLight};
		border-radius: 6px;
		color: ${theme.colors.brand.purple};

		span {
			font-size: 0.875rem;
			color: ${theme.colors.brand.purpleDark};
		}
	`}
`
