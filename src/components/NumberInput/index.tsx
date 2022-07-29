import { ChangeEvent, KeyboardEvent } from 'react'

import { Minus, Plus } from 'phosphor-react'

import * as Styled from './styles'

type HandleKeys = Record<string, () => void>

type NumberInputProps = {
	quantityCoffee: number
	onIncreaseQuantityCoffee: () => void
	onDecreaseQuantityCoffee: () => void
	onQuantityCoffeeReceived: (quantity: number) => void
}

export function NumberInput({
	quantityCoffee,
	onIncreaseQuantityCoffee,
	onDecreaseQuantityCoffee,
	onQuantityCoffeeReceived,
}: NumberInputProps) {
	const handleKeys: HandleKeys = {
		ArrowUp: () => onIncreaseQuantityCoffee(),
		ArrowDown: () => onDecreaseQuantityCoffee(),
		Home: () => onQuantityCoffeeReceived(99),
		End: () => onQuantityCoffeeReceived(1),
	}

	function handleChangeCount(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target

		const formatValue = value.replace(/\D/g, '').replace(/(\d{2})\d+?$/g, '$1')

		onQuantityCoffeeReceived(Number(formatValue))
	}

	function handleChangeCountWithKeys(event: KeyboardEvent<HTMLInputElement>) {
		const keysType = ['ArrowUp', 'ArrowDown', 'Home', 'End']

		if (keysType.includes(event.key)) {
			event.preventDefault()
			handleKeys[event.key]()
		}
	}

	return (
		<Styled.NumberInputContainer>
			<Styled.SpinButton
				type="button"
				aria-label="Diminuir quantidade"
				onClick={onDecreaseQuantityCoffee}
				tabIndex={-1}
			>
				<Minus size={16} weight="bold" />
			</Styled.SpinButton>
			<Styled.Input
				type="text"
				placeholder="1"
				name="quantityCoffee"
				value={quantityCoffee || ''}
				onChange={handleChangeCount}
				onKeyDown={handleChangeCountWithKeys}
				aria-valuenow={quantityCoffee}
				aria-valuemin={1}
				aria-valuemax={99}
				role="spinbutton"
				inputMode="decimal"
				pattern="[0-9]"
				autoComplete="off"
				aria-label="Quantidade de café"
			/>
			<Styled.SpinButton
				type="button"
				aria-label="Aumentar quantidade"
				onClick={onIncreaseQuantityCoffee}
				tabIndex={-1}
			>
				<Plus size={16} weight="bold" />
			</Styled.SpinButton>
		</Styled.NumberInputContainer>
	)
}
