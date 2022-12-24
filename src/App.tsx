import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from 'contexts/CartContext'

import { GlobalStyle } from 'styles/global'
import { defaultTheme } from 'styles/themes/default'

import { Router } from './Router'

export const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CartContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</CartContextProvider>
			<GlobalStyle />
		</ThemeProvider>
	)
}
