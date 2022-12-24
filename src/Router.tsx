import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts/DefaultLayout'

import { Checkout } from 'pages/Checkout'
import { Home } from 'pages/Home'
import { OrderConfirmed } from 'pages/OrderConfirmed'

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="finalizar-pedido" element={<Checkout />} />
				<Route path="pedido-confirmado/:id" element={<OrderConfirmed />} />
			</Route>
		</Routes>
	)
}
