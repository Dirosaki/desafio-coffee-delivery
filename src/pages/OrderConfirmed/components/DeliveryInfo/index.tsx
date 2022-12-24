import { ReactElement } from 'react'

import { Icon as IconType } from 'phosphor-react'

import * as Styled from './styles'

type DeliveryInfoProps = {
	backgroundIcon: string
	icon: IconType
	children: ReactElement
}

export const DeliveryInfo = ({
	backgroundIcon,
	icon: Icon,
	children,
}: DeliveryInfoProps) => {
	return (
		<Styled.DeliveryInfo backgroundIcon={backgroundIcon}>
			<span>
				<Icon weight="fill" />
			</span>
			{children}
		</Styled.DeliveryInfo>
	)
}
