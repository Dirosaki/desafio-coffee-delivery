import styled, { css } from 'styled-components'

export const Label = styled.label`
	${({ theme }) => css`
		padding: 1rem;
		height: 3.1875rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: ${theme.colors.base.button};
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s ease-out;

		&:hover {
			background: ${theme.colors.base.hover};
		}

		span {
			font-size: 0.75rem;
			line-height: 1;
			text-transform: uppercase;
			color: ${theme.colors.base.text};
		}
	`}
`

export const Input = styled.input`
	${({ theme }) => css`
		position: absolute;
		opacity: 0;

		&:focus-visible + label {
			background: ${theme.colors.base.hover};
		}

		&:checked + label {
			background: ${theme.colors.brand.purpleLight};
			box-shadow: 0 0 0 1px ${theme.colors.brand.purple} inset;
		}
	`}
`
