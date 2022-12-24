import { ReactElement } from 'react'

import * as Styled from './styles'

type BenefitProps = {
	icon: ReactElement
	text: string
	backgroundIcon: string
}

export const Benefit = ({ icon, text, backgroundIcon }: BenefitProps) => {
	return (
		<Styled.Benefit backgroundIcon={backgroundIcon}>
			<span>{icon}</span>
			{text}
		</Styled.Benefit>
	)
}
