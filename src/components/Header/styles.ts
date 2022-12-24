import styled, { css } from 'styled-components'

export const Header = styled.header`
	${({ theme }) => css`
		padding: 2rem 1.5rem;
		position: sticky;
		top: 0;
		background: ${theme.colors.base.background};
		z-index: 100;

		> div {
			margin: 0 auto;
			width: 100%;
			max-width: 1120px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			a {
				line-height: 0;
			}
		}

		@media (max-width: 900px) {
			padding: 2rem 4rem;
		}

		@media (max-width: 714px) {
			padding: 2rem 3rem;
		}

		@media (max-width: 656px) {
			padding: 2rem;
		}

		@media (max-width: 626px) {
			padding: 2rem 1.5rem;
		}
	`}
`

export const ActionsWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 12px;
`

export const MyLocation = styled.button`
	${({ theme }) => css`
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		background: ${theme.colors.brand.purpleLight};
		border: none;
		border-radius: 6px;
		color: ${theme.colors.brand.purple};
		transition: box-shadow 0.2s ease-out;

		&:hover {
			box-shadow: 0 0 0 1px ${theme.colors.brand.purple};
		}

		&:focus-visible {
			box-shadow: 0 0 0 2px ${theme.colors.brand.purple};
		}

		span {
			font-size: 0.875rem;
			color: ${theme.colors.brand.purpleDark};
			line-height: initial;
		}

		@media (max-width: 450px) {
			&:focus {
				box-shadow: 0 0 0 1px ${theme.colors.brand.purple};
			}

			&:focus span {
				box-shadow: 0 0 0 1px ${theme.colors.brand.purple};
				opacity: 1;
			}

			span {
				padding: 8px;
				position: absolute;
				right: 0;
				bottom: calc(-100% + -2px);
				background: ${theme.colors.brand.purpleLight};
				border-radius: 4px;
				white-space: nowrap;
				pointer-events: none;
				opacity: 0;
				transition: 0.2s ease-out;
			}
		}
	`}
`
