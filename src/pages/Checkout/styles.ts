import styled, { css } from 'styled-components'

export const Container = styled.main`
	margin: 2.5rem auto;
	width: 100%;
	max-width: 1120px;

	form {
		display: flex;
		gap: 2rem;
	}
`

export const PersonalDataForm = styled.section`
	header {
		display: flex;
		gap: 8px;

		div {
			display: grid;
			gap: 4px;
		}
	}
`

const BaseFormCard = styled.div`
	${({ theme }) => css`
		padding: 40px;
		display: flex;
		flex-direction: column;
		gap: 32px;
		background: ${theme.colors.base.card};
		border-radius: 6px;

		strong + & {
			margin-top: 1rem;
		}
	`}
`

export const AddressData = styled(BaseFormCard)`
	${({ theme }) => css`
		color: ${theme.colors.brand.yellowDark};
	`}
`

export const Fields = styled.div`
	display: grid;
	grid-template-columns: 12.5rem 17.25rem 3.75rem;
	gap: 16px 12px;

	div:nth-child(2) {
		grid-column: 1 / 4;
	}

	div:nth-child(4) {
		grid-column: 2 / 4;
	}
`

export const PaymentMethodContainer = styled(BaseFormCard)`
	${({ theme }) => css`
		margin-top: 12px;
		color: ${theme.colors.brand.purple};
	`}
`

export const PaymentMethodFields = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	`}
`

export const CheckoutContainer = styled.aside`
	width: 448px;
`

export const CheckoutCard = styled(BaseFormCard)`
	${({ theme }) => css`
		border-radius: 0.375rem 2.75rem;
	`}
`

export const TotalPriceContainer = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 12px;

		p:nth-child(even) {
			text-align: end;
		}
	`}
`

export const ConfirmOrderButton = styled.button`
	${({ theme }) => css`
		padding: 8px 12px;
		height: 46px;
		background: ${theme.colors.brand.yellow};
		border: none;
		border-radius: 6px;
		font-size: 14px;
		font-weight: 700;
		line-height: 1.6;
		text-transform: uppercase;
		color: ${theme.colors.base.white};
		transition: background 0.2s ease-out;

		&:hover {
			background: ${theme.colors.brand.yellowDark};
		}
	`}
`
