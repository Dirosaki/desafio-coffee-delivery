import heroSectionImg from 'assets/images/hero-section.svg'

import { HeroSection } from './components/HeroSection'

import * as Styled from './styles'

export function Home() {
	return (
		<Styled.Container>
			<img src={heroSectionImg} alt="" />
			<HeroSection />
		</Styled.Container>
	)
}
