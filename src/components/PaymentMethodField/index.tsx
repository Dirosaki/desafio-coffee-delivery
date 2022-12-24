import { forwardRef, InputHTMLAttributes } from 'react'

import { CreditCard, Bank, Money } from 'phosphor-react'

import * as Styled from './styles'

type PaymentMethodFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	id: 'credit-card' | 'debit-card' | 'money'
}

export const PAYMENT_METHODS = {
	'credit-card': {
		label: 'Cartão de crédito',
		Icon: CreditCard,
	},
	'debit-card': {
		label: 'Cartão de débito',
		Icon: Bank,
	},
	money: {
		label: 'Dinheiro',
		Icon: Money,
	},
}

export const PaymentMethodField = forwardRef<
	HTMLInputElement,
	PaymentMethodFieldProps
>((props, ref) => {
	const { Icon, label } = PAYMENT_METHODS[props.id]

	return (
		<div>
			<Styled.Input type="radio" name="payment-method" ref={ref} {...props} />
			<Styled.Label htmlFor={props.id}>
				<Icon size={16} />
				<span>{label}</span>
			</Styled.Label>
		</div>
	)
})
