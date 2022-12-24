import { CoffeeCard } from 'pages/Home/components/CoffeeCard'

import { Title } from 'components/Typography'

import { coffees } from 'data/coffees'

import * as Styled from './styles'

export const CoffeeSection = () => {
	return (
		<Styled.CoffeeSection>
			<Title size="l" color="subtitle" as="strong">
				Nossos cafés
			</Title>
			<Styled.CoffeeList>
				{coffees.map((coffee) => (
					<CoffeeCard key={coffee.id} coffee={coffee} />
				))}
			</Styled.CoffeeList>
		</Styled.CoffeeSection>
	)
}
