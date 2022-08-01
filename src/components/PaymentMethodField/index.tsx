import { InputHTMLAttributes } from 'react'

import { CreditCard, Bank, Money } from 'phosphor-react'

import * as Styled from './styles'

type PaymentMethodFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	id: 'credit-card' | 'debit-card' | 'money'
}

export function PaymentMethodField({ id, ...props }: PaymentMethodFieldProps) {
	const paymentTypes = {
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

	const { Icon, label } = paymentTypes[id]

	return (
		<div>
			<Styled.Input type="radio" name="payment-method" id={id} {...props} />
			<Styled.Label htmlFor={id}>
				<Icon size={16} />
				<span>{label}</span>
			</Styled.Label>
		</div>
	)
}
