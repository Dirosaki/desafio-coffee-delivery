import styled, { css } from 'styled-components'

export const NumberInputContainer = styled.div`
	${({ theme }) => css`
		padding: 0 8px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		gap: 4px;
		background: ${theme.colors.base.button};
		transition: box-shadow 0.2s ease-out;

		&:focus-within {
			box-shadow: 0 0 0 1px ${theme.colors.brand.purple} inset;
		}
	`}
`

export const SpinButton = styled.button`
	${({ theme }) => css`
		background: transparent;
		border: none;
		line-height: 0;
		color: ${theme.colors.brand.purple};
		transition: color 0.2s ease-out;

		&:hover {
			color: ${theme.colors.brand.purpleDark};
		}
	`}
`

export const Input = styled.input`
	background: transparent;
	border: none;
	text-align: center;
`
