import { CoffeeProps } from 'pages/Home/components/CoffeeCard'

export enum ActionTypes {
	ADD_COFFEE_TO_CART = 'ADD_NEW_COFFEE_ADD_COFFEE_TO_CART',
	REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
	INCREASE_QUANTITY_COFFEE = 'INCREASE_QUANTITY_COFFEE',
	DECREASE_QUANTITY_COFFEE = 'DECREASE_QUANTITY_COFFEE',
	CHANGE_QUANTITY_COFFEE = 'CHANGE_QUANTITY_COFFEE',
	CLEAR_CART = 'CLEAR_CART',
}

export function addCoffeeToCartAction(newCoffee: CoffeeProps) {
	return {
		type: ActionTypes.ADD_COFFEE_TO_CART,
		payload: { newCoffee },
	}
}

export function removeCoffeeFromCartAction(coffeeId: string) {
	return {
		type: ActionTypes.REMOVE_COFFEE_FROM_CART,
		payload: { coffeeId },
	}
}

export function increaseQuantityCoffeeAction(coffeeId: string) {
	return {
		type: ActionTypes.INCREASE_QUANTITY_COFFEE,
		payload: { coffeeId },
	}
}

export function decreaseQuantityCoffeeAction(coffeeId: string) {
	return {
		type: ActionTypes.DECREASE_QUANTITY_COFFEE,
		payload: { coffeeId },
	}
}

export function changeQuantityCoffeeAction(coffeeId: string, quantity: number) {
	return {
		type: ActionTypes.CHANGE_QUANTITY_COFFEE,
		payload: {
			coffeeId,
			quantity,
		},
	}
}

export function clearCartAction() {
	return {
		type: ActionTypes.CLEAR_CART,
	}
}
