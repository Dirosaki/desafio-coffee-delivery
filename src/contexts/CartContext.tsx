import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { CoffeeProps } from 'pages/Home/components/CoffeeCard'

type CartContextType = {
	cartItems: CoffeeProps[]
	totalPrice: number
	quantityItems: number
	addCoffeeToCart: (coffee: CoffeeProps) => void
	removeItemById: (itemId: string) => void
	changeItemQuantityById: (itemId: string, newValue: number) => void
	increaseItemQuantityById: (itemId: string) => void
	decreaseItemQuantityById: (itemId: string) => void
}

type CartContextProviderProps = { children: ReactNode }

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CoffeeProps[]>([])

	const totalPrice = cartItems.reduce((total, item) => {
		return total + item.price * item.quantity
	}, 0)

	const quantityItems = cartItems.length

	const addCoffeeToCart = useCallback(
		(coffee: CoffeeProps) => {
			const findex = cartItems.find((item) => item.id === coffee.id)

			if (findex) {
				const newItem = cartItems.map((item) => {
					if (item.id === coffee.id) {
						return { ...item, quantity: item.quantity + coffee.quantity }
					}
					return item
				})
				setCartItems(newItem)
			} else {
				setCartItems([...cartItems, coffee])
			}
		},
		[cartItems]
	)

	const removeItemById = useCallback(
		(itemId: string) => {
			const cartItemsWithoutDeletedOne = cartItems.filter(
				(item) => item.id !== itemId
			)

			setCartItems(cartItemsWithoutDeletedOne)
		},
		[cartItems]
	)

	const increaseItemQuantityById = useCallback(
		(itemId: string) => {
			const newItem = cartItems.map((item) => {
				if (item.id === itemId) {
					return { ...item, quantity: item.quantity + 1 }
				}
				return item
			})

			setCartItems(newItem)
		},
		[cartItems]
	)

	const decreaseItemQuantityById = useCallback(
		(itemId: string) => {
			const newItem = cartItems.map((item) => {
				if (item.id === itemId) {
					return { ...item, quantity: item.quantity - 1 }
				}
				return item
			})

			setCartItems(newItem)
		},
		[cartItems]
	)

	const changeItemQuantityById = useCallback(
		(itemId: string, newValue: number) => {
			const newItem = cartItems.map((item) => {
				if (item.id === itemId) {
					return { ...item, quantity: newValue }
				}
				return item
			})

			setCartItems(newItem)
		},
		[cartItems]
	)

	const values = useMemo(
		() => ({
			cartItems,
			totalPrice,
			quantityItems,
			addCoffeeToCart,
			removeItemById,
			increaseItemQuantityById,
			decreaseItemQuantityById,
			changeItemQuantityById,
		}),
		[
			cartItems,
			totalPrice,
			quantityItems,
			addCoffeeToCart,
			removeItemById,
			increaseItemQuantityById,
			decreaseItemQuantityById,
			changeItemQuantityById,
		]
	)

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
