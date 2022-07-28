import { useTheme } from 'styled-components'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Title, Text } from 'components/Typography'

import coffeeIllustrationImg from 'assets/images/coffee-illustration.webp'

import { Benefit } from '../Benefit'

import * as Styled from './styles'

export function HeroSection() {
	const { colors } = useTheme()

	return (
		<Styled.HeroSection>
			<Styled.ContentWrapper>
				<Title size="xl" color="title">
					Encontre o café perfeito para qualquer hora do dia
				</Title>
				<Text size="l" as="h2">
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora
				</Text>
				<Styled.BeneficitsWrapper>
					<Benefit
						icon={<ShoppingCart size={20} weight="fill" />}
						text="Compra simples e segura"
						backgroundIcon={colors.brand.yellowDark}
					/>
					<Benefit
						icon={<Package size={20} weight="fill" />}
						text="Embalagem mantém o café intacto"
						backgroundIcon={colors.base.text}
					/>
					<Benefit
						icon={<Timer size={20} weight="fill" />}
						text="Entrega rápida e rastreada"
						backgroundIcon={colors.brand.yellow}
					/>
					<Benefit
						icon={<Coffee size={20} weight="fill" />}
						text="O café chega fresquinho até você"
						backgroundIcon={colors.brand.purple}
					/>
				</Styled.BeneficitsWrapper>
			</Styled.ContentWrapper>
			<img
				src={coffeeIllustrationImg}
				alt="Ilustração de um copo de café com alguns grãos de café ao fundo e uma arte abstrata na cor amarela"
			/>
		</Styled.HeroSection>
	)
}
