import { forwardRef, InputHTMLAttributes } from 'react'

import * as Styled from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { required } = props

	return (
		<Styled.InputContainer>
			<Styled.Input ref={ref} {...props} />
			{!required && <Styled.OptionalText>Opcional</Styled.OptionalText>}
		</Styled.InputContainer>
	)
})
