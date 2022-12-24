import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { useCart } from 'hooks/useCart'

import { Input } from 'components/Input'
import { PaymentMethodField } from 'components/PaymentMethodField'
import { Text, Title } from 'components/Typography'

import { formatPrice } from 'utils/formatPrice'

import { CoffeeCardForCart } from './components/CoffeeCardForCart'
import { CheckoutFormProps, checkoutFormValidationSchema } from './form'

import * as Styled from './styles'

export const Checkout = () => {
	const { coffees, totalPrice, clearCart } = useCart()
	const { handleSubmit, register } = useForm<CheckoutFormProps>({
		resolver: zodResolver(checkoutFormValidationSchema),
	})
	const navigate = useNavigate()

	const freight = 3.5

	const formattedFreight = formatPrice(freight)
	const formattedTotalItems = formatPrice(totalPrice)
	const formattedTotalOrder = formatPrice(totalPrice + freight)

	const handleSubmitForm = (data: CheckoutFormProps) => {
		navigate(`/pedido-confirmado/${uuidv4()}`, { state: data })

		clearCart()
	}

	return (
		<Styled.Container>
			<form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
				<Styled.PersonalDataForm>
					<Title size="xs" color="subtitle" weight={700} as="strong">
						Complete seu pedido
					</Title>

					<Styled.AddressData>
						<header>
							<MapPinLine size={22} />
							<div>
								<Text color="subtitle" as="p">
									Endereço de Entrega
								</Text>
								<Text size="s" as="p">
									Informe o endereço onde deseja receber seu pedido
								</Text>
							</div>
						</header>
						<Styled.Fields>
							<Input placeholder="CEP" {...register('zipCode')} required />
							<Input placeholder="Rua" {...register('street')} required />
							<Input
								placeholder="Número"
								{...register('number')}
								required
								datatype="Diego"
							/>
							<Input placeholder="Complemento" {...register('complement')} />
							<Input placeholder="Bairro" {...register('district')} required />
							<Input placeholder="Cidade" {...register('city')} required />
							<Input placeholder="UF" {...register('state')} required />
						</Styled.Fields>
					</Styled.AddressData>

					<Styled.PaymentMethodContainer>
						<header>
							<CurrencyDollar size={22} />
							<div>
								<Text color="subtitle" as="p">
									Pagamento
								</Text>
								<Text size="s" as="p">
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</Text>
							</div>
						</header>
						<Styled.PaymentMethodFields>
							<PaymentMethodField
								id="credit-card"
								value="credit-card"
								{...register('paymentMethod')}
							/>
							<PaymentMethodField
								id="debit-card"
								value="debit-card"
								{...register('paymentMethod')}
							/>
							<PaymentMethodField
								id="money"
								value="money"
								{...register('paymentMethod')}
							/>
						</Styled.PaymentMethodFields>
					</Styled.PaymentMethodContainer>
				</Styled.PersonalDataForm>

				<Styled.CheckoutContainer>
					<Title size="xs" color="subtitle" weight={700} as="strong">
						Cafés selecionados
					</Title>
					<Styled.CheckoutCard>
						{coffees?.length > 0 && (
							<div>
								{coffees.map((coffee) => (
									<CoffeeCardForCart key={coffee.id} coffee={coffee} />
								))}
							</div>
						)}
						<Styled.TotalPriceContainer>
							<Text size="s" as="p">
								Total de itens
							</Text>
							<Text as="p">R$ {formattedTotalItems}</Text>
							<Text size="s" as="p">
								Entrega
							</Text>
							<Text as="p">R$ {formattedFreight}</Text>
							<Text size="l" color="subtitle" weight={700} as="p">
								Total
							</Text>
							<Text size="l" color="subtitle" weight={700} as="p">
								R$ {formattedTotalOrder}
							</Text>
						</Styled.TotalPriceContainer>
						<Styled.ConfirmOrderButton type="submit">
							Confirmar pedido
						</Styled.ConfirmOrderButton>
					</Styled.CheckoutCard>
				</Styled.CheckoutContainer>
			</form>
		</Styled.Container>
	)
}
