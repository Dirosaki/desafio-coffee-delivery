import { CoffeeProps } from 'pages/Home/components/CoffeeCard'

import { ActionTypes } from './actions'

export function coffeesReducer(state: CoffeeProps[], action: any) {
	switch (action.type) {
		case ActionTypes.ADD_COFFEE_TO_CART: {
			const coffeeExistsInCart = state.find(
				(item) => item.id === action.payload.newCoffee.id
			)

			if (coffeeExistsInCart) {
				const newItem = state.map((item) => {
					if (item.id === action.payload.newCoffee.id) {
						return {
							...item,
							quantity: item.quantity + action.payload.newCoffee.quantity,
						}
					}
					return item
				})

				return newItem
			}

			return [...state, action.payload.newCoffee]
		}

		case ActionTypes.REMOVE_COFFEE_FROM_CART:
			return state.filter((item) => item.id !== action.payload.coffeeId)

		case ActionTypes.INCREASE_QUANTITY_COFFEE:
			return state.map((item) => {
				if (item.id === action.payload.coffeeId) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})

		case ActionTypes.DECREASE_QUANTITY_COFFEE:
			return state.map((item) => {
				if (item.id === action.payload.coffeeId) {
					return { ...item, quantity: item.quantity - 1 }
				}
				return item
			})

		case ActionTypes.CHANGE_QUANTITY_COFFEE:
			return state.map((item) => {
				if (item.id === action.payload.coffeeId) {
					return { ...item, quantity: action.payload.quantity }
				}
				return item
			})

		case ActionTypes.CLEAR_CART:
			return []

		default:
			throw new Error(`ACTION desconhecida: ${action.type}`)
	}
}
