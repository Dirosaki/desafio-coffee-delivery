import styled, { css } from 'styled-components'

export const Container = styled.main`
	margin: 2.5rem 0;
	padding: 0 1.5rem;

	form {
		margin: 0 auto;
		max-width: 1120px;
		display: flex;
		gap: 2rem;
	}

	@media (max-width: 1150px) {
		form {
			flex-direction: column;
		}
	}

	@media (max-width: 900px) {
		padding: 0 4rem;
	}

	@media (max-width: 714px) {
		padding: 0 3rem;
	}

	@media (max-width: 656px) {
		padding: 0 2rem;
	}

	@media (max-width: 626px) {
		padding: 0 1.5rem;
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

		@media (max-width: 600px) {
			padding: 2.5rem 2rem;
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
	grid-template-columns: minmax(10rem, 12.5rem) minmax(14rem, 17.25rem) 3.75rem;
	gap: 16px 12px;

	div:nth-child(2) {
		grid-column: 1 / 4;
	}

	div:nth-child(4) {
		grid-column: 2 / 4;
	}

	@media (max-width: 1150px) {
		grid-template-columns: 1fr;

		div {
			grid-column: auto;
		}

		div:nth-child(2) {
			grid-column: auto;
		}

		div:nth-child(4) {
			grid-column: auto;
		}
	}
`

export const PaymentMethodContainer = styled(BaseFormCard)`
	${({ theme }) => css`
		margin-top: 12px;
		color: ${theme.colors.brand.purple};
	`}
`

export const PaymentMethodFields = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

export const CheckoutContainer = styled.aside`
	width: 448px;

	@media (max-width: 1150px) {
		width: auto;
	}
`

export const CheckoutCard = styled(BaseFormCard)`
	border-radius: 0.375rem 2.75rem;
`

export const TotalPriceContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 12px;

	p:nth-child(even) {
		text-align: end;
	}
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
