import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MapPin } from 'phosphor-react'

import { formatState } from 'utils/formatState'

import logoImg from 'assets/brand/logo.svg'

import { CartButton } from './components/CartButton'

import * as Styled from './styles'

type ResponseData = {
	city: string
	continent: string
	countryCode: string
	countryName: string
	locality: string
	latitude: number
	longitude: number
	principalSubdivision: string
}

export const Header = () => {
	const [myLocation, setMyLocation] = useState('Minha localização')

	const hasGeolocationInNavigator = 'geolocation' in navigator

	const getMyLocation = useCallback(() => {
		function success(position: GeolocationPosition) {
			const { latitude } = position.coords
			const { longitude } = position.coords

			fetch(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt-br`
			)
				.then((response) => response.json())
				.then(({ city, principalSubdivision }: ResponseData) => {
					const formattedState = formatState(principalSubdivision)
					setMyLocation(`${city}, ${formattedState}`)
				})
		}

		function error() {
			setMyLocation('Minha localização')
		}

		navigator.geolocation.getCurrentPosition(success, error)
	}, [])

	useEffect(() => {
		if (!hasGeolocationInNavigator) return
		getMyLocation()
	}, [getMyLocation, hasGeolocationInNavigator])

	return (
		<Styled.Header>
			<div>
				<Link to="/" tabIndex={-1}>
					<img
						src={logoImg}
						alt="Copo de café roxo com um foguete dentro e ao lado escrito 'Coffee Delivery'"
					/>
				</Link>
				<Styled.ActionsWrapper>
					{hasGeolocationInNavigator && (
						<Styled.MyLocation type="button" onClick={getMyLocation}>
							<MapPin size={22} weight="fill" />
							<span>{myLocation}</span>
						</Styled.MyLocation>
					)}

					<CartButton />
				</Styled.ActionsWrapper>
			</div>
		</Styled.Header>
	)
}
