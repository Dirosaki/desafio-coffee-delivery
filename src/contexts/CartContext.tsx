import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useReducer,
} from 'react'

import {
	addCoffeeToCartAction,
	removeCoffeeFromCartAction,
	increaseQuantityCoffeeAction,
	decreaseQuantityCoffeeAction,
	changeQuantityCoffeeAction,
	clearCartAction,
} from 'reducers/coffees/actions'
import { coffeesReducer } from 'reducers/coffees/reducer'

import { CoffeeProps } from 'pages/Home/components/CoffeeCard'

type CartContextType = {
	coffees: CoffeeProps[]
	totalPrice: number
	quantityItems: number
	addCoffeeToCart: (coffee: CoffeeProps) => void
	removeItemById: (itemId: string) => void
	changeItemQuantityById: (itemId: string, newValue: number) => void
	increaseItemQuantityById: (itemId: string) => void
	decreaseItemQuantityById: (itemId: string) => void
	clearCart: () => void
}

type CartContextProviderProps = { children: ReactNode }

export const CartContext = createContext({} as CartContextType)

const initialState = [] as CoffeeProps[]

const STORAGENAME = '@coffee-delivery:coffees-1.0.0'

function getStoredState() {
	const storedStateAsJSON = localStorage.getItem(STORAGENAME)

	if (storedStateAsJSON) {
		return JSON.parse(storedStateAsJSON)
	}

	return []
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [coffees, dispatch] = useReducer(
		coffeesReducer,
		initialState,
		getStoredState
	)

	useEffect(() => {
		const stateJSON = JSON.stringify(coffees)

		localStorage.setItem(STORAGENAME, stateJSON)
	}, [coffees])

	const totalPrice = coffees.reduce((total, item) => {
		return total + item.price * item.quantity
	}, 0)

	const quantityItems = coffees.length

	const addCoffeeToCart = useCallback((coffee: CoffeeProps) => {
		dispatch(addCoffeeToCartAction(coffee))
	}, [])

	const removeItemById = useCallback((itemId: string) => {
		dispatch(removeCoffeeFromCartAction(itemId))
	}, [])

	const increaseItemQuantityById = useCallback((itemId: string) => {
		dispatch(increaseQuantityCoffeeAction(itemId))
	}, [])

	const decreaseItemQuantityById = useCallback((itemId: string) => {
		dispatch(decreaseQuantityCoffeeAction(itemId))
	}, [])

	const changeItemQuantityById = useCallback(
		(itemId: string, newValue: number) => {
			dispatch(changeQuantityCoffeeAction(itemId, newValue))
		},
		[]
	)

	const clearCart = useCallback(() => {
		dispatch(clearCartAction())
	}, [])

	const values = useMemo(
		() => ({
			coffees,
			totalPrice,
			quantityItems,
			addCoffeeToCart,
			removeItemById,
			increaseItemQuantityById,
			decreaseItemQuantityById,
			changeItemQuantityById,
			clearCart,
		}),
		[
			coffees,
			totalPrice,
			quantityItems,
			addCoffeeToCart,
			removeItemById,
			increaseItemQuantityById,
			decreaseItemQuantityById,
			changeItemQuantityById,
			clearCart,
		]
	)

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
