import { InputHTMLAttributes } from 'react'

import * as Styled from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string
}

export function Input({ ...props }: InputProps) {
	const { required } = props

	return (
		<Styled.InputContainer>
			<Styled.Input {...props} />
			{!required && <Styled.OptionalText>Opcional</Styled.OptionalText>}
		</Styled.InputContainer>
	)
}
