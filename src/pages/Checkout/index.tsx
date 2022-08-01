import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { useCart } from 'hooks/useCart'

import { Input } from 'components/Input'
import { PaymentMethodField } from 'components/PaymentMethodField'
import { Text, Title } from 'components/Typography'

import { formatPrice } from 'utils/formatPrice'

import { CoffeeCardForCart } from './components/CoffeeCardForCart'

import * as Styled from './styles'

export function Checkout() {
	const { cartItems, totalPrice } = useCart()

	const freight = 3.5

	const formattedFreight = formatPrice(freight)
	const formattedTotalItems = formatPrice(totalPrice)
	const formattedTotalOrder = formatPrice(totalPrice + freight)

	return (
		<Styled.Container>
			<form action="">
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
							<Input name="CEP" placeholder="CEP" required data-name="CEP" />
							<Input name="Rua" placeholder="Rua" required data-name="Rua" />
							<Input
								name="Número"
								placeholder="Número"
								required
								data-name="Número"
								datatype="Diego"
							/>
							<Input
								name="Complemento"
								placeholder="Complemento"
								data-name="Complemento"
							/>
							<Input
								name="Bairro"
								placeholder="Bairro"
								required
								data-name="Bairro"
							/>
							<Input
								name="Cidade"
								placeholder="Cidade"
								required
								data-name="Cidade"
							/>
							<Input name="UF" placeholder="UF" required data-name="UF" />
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
							<PaymentMethodField id="credit-card" />
							<PaymentMethodField id="debit-card" />
							<PaymentMethodField id="money" />
						</Styled.PaymentMethodFields>
					</Styled.PaymentMethodContainer>
				</Styled.PersonalDataForm>

				<Styled.CheckoutContainer>
					<Title size="xs" color="subtitle" weight={700} as="strong">
						Cafés selecionados
					</Title>
					<Styled.CheckoutCard>
						{cartItems.length > 0 && (
							<div>
								{cartItems.map((cartItem) => (
									<CoffeeCardForCart key={cartItem.id} coffee={cartItem} />
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
						<Styled.ConfirmOrderButton>
							Confirmar pedido
						</Styled.ConfirmOrderButton>
					</Styled.CheckoutCard>
				</Styled.CheckoutContainer>
			</form>
		</Styled.Container>
	)
}
