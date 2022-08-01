import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: ${theme.colors.base.input};
		border: 1px solid ${theme.colors.base.button};
		border-radius: 4px;
		transition: 0.2s ease-out;

		&:focus-within {
			border-color: ${theme.colors.brand.yellowDark};
		}
	`}
`

export const Input = styled.input`
	${({ theme }) => css`
		padding: 0 0.75rem;
		height: 2.5rem;
		flex: 1;
		display: flex;
		align-items: baseline;
		background: transparent;
		border: none;
		font-size: 0.875rem;
		line-height: 1;
		color: ${theme.colors.base.text};

		&::placeholder {
			color: ${theme.colors.base.label};
		}
	`}
`

export const OptionalText = styled.span`
	${({ theme }) => css`
		margin-right: 12px;
		font-size: 12px;
		font-style: italic;
		color: ${theme.colors.base.label};
	`}
`
