import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
	${({ theme }) => css`
		padding: 8px 4px 32px;
		display: flex;

		justify-content: space-between;
		border-bottom: 1px solid ${theme.colors.base.button};

		& + & {
			margin-top: 24px;
		}

		p {
			white-space: nowrap;
		}
	`}
`

export const Info = styled.div`
	display: flex;
	gap: 20px;

	img {
		height: 64px;
	}

	@media (max-width: 460px) {
		img {
			display: none;
		}
	}
`

export const Details = styled.div`
	padding: 2px 0;
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-template-rows: auto 32px;
	gap: 0 8px;

	strong {
		grid-column: 1 / 3;
		height: 1.75rem;
	}
`

export const RemoveButton = styled.button`
	${({ theme }) => css`
		padding: 0 8px;
		display: flex;
		align-items: center;
		gap: 4px;
		background: ${theme.colors.base.button};
		border-radius: 6px;
		border: none;
		color: ${theme.colors.brand.purple};
		transition: 0.2s ease-out;

		&:hover {
			background: ${theme.colors.base.hover};

			span {
				color: ${theme.colors.base.subtitle};
			}
		}

		&:focus-visible {
			box-shadow: 0 0 0 1px ${theme.colors.brand.purple} inset;
		}

		span {
			font-size: 0.75rem;
			line-height: 1;
			text-transform: uppercase;
			color: ${theme.colors.base.text};
		}
	`}
`
