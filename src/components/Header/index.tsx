import { Link } from 'react-router-dom'

import { MapPin } from 'phosphor-react'

import logoImg from 'assets/brand/logo.svg'

import { CartButton } from './components/CartButton'

import * as Styled from './styles'

export function Header() {
	return (
		<Styled.Header>
			<div>
				<Link to="/" tabIndex={-1}>
					<img
						src={logoImg}
						alt="Copo de café roxo com um foguete dentro e ao lado escrito 'Coffe Delivery'"
					/>
				</Link>
				<Styled.ActionsWrapper>
					<Styled.MyLocation type="button">
						<MapPin size={22} weight="fill" />
						<span>Porto Alegre, RS</span>
					</Styled.MyLocation>
					<CartButton />
				</Styled.ActionsWrapper>
			</div>
		</Styled.Header>
	)
}
