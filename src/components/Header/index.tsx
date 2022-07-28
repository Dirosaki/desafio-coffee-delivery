import { Link } from 'react-router-dom'

import { MapPin } from 'phosphor-react'

import logoImg from 'assets/brand/logo.svg'

import { CartButton } from './components/CartButton'

import * as Styled from './styles'

export function Header() {
	return (
		<Styled.Header>
			<Link to="/">
				<img
					src={logoImg}
					alt="Copo de café roxo com um foguete dentro e ao lado escrito 'Coffe Delivery'"
				/>
			</Link>
			<Styled.ActionsWrapper>
				<Styled.MyLocation>
					<MapPin size={22} weight="fill" />
					<span>Porto Alegre, RS</span>
				</Styled.MyLocation>
				<CartButton />
			</Styled.ActionsWrapper>
		</Styled.Header>
	)
}
