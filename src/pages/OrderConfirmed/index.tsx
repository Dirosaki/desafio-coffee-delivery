import { useLocation } from 'react-router-dom'

import { useTheme } from 'styled-components'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { CheckoutFormProps } from 'pages/Checkout/form'

import { PAYMENT_METHODS } from 'components/PaymentMethodField'
import { Text } from 'components/Typography'

import deliveryIllustration from 'assets/images/delivery-illustration.webp'

import { DeliveryInfo } from './components/DeliveryInfo'

import * as Styled from './styles'

type LocationProps = {
	state: CheckoutFormProps
}

export const OrderConfirmed = () => {
	const { colors } = useTheme()
	const { state } = useLocation() as LocationProps

	return (
		<Styled.Container>
			<div>
				<Styled.Title>Uhu! Pedido confirmado</Styled.Title>
				<Text as="p" size="l" color="subtitle">
					Agora é só aguardar que logo o café chegará até você
				</Text>
			</div>

			<Styled.DeliveryInformationWrapper>
				<ul>
					<DeliveryInfo backgroundIcon={colors.brand.purple} icon={MapPin}>
						<Text as="p">
							Entrega em&#32;
							<b>
								{state.street}, {state.number}
							</b>
							<br />
							{state.district} - {state.city}, {state.state}
						</Text>
					</DeliveryInfo>
					<DeliveryInfo backgroundIcon={colors.brand.yellow} icon={Timer}>
						<Text as="p">
							Previsão de Entrega <br /> <b>20 min - 30min</b>
						</Text>
					</DeliveryInfo>
					<DeliveryInfo
						backgroundIcon={colors.brand.yellowDark}
						icon={CurrencyDollar}
					>
						<Text as="p">
							Pagamento na entrega <br />
							<b>{PAYMENT_METHODS[state.paymentMethod].label}</b>
						</Text>
					</DeliveryInfo>
				</ul>
			</Styled.DeliveryInformationWrapper>
			<Styled.Image src={deliveryIllustration} alt="" />
		</Styled.Container>
	)
}
