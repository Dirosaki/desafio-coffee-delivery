import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			brand: {
				yellowDark: string
				yellow: string
				yellowLight: string
				purpleDark: string
				purple: string
				purpleLight: string
			}
			base: {
				title: string
				subtitle: string
				text: string
				label: string
				hover: string
				button: string
				input: string
				card: string
				background: string
				white: string
			}
		}
		fontSize: {
			title: {
				xl: string
				l: string
				m: string
				s: string
				xs: string
			}
			text: {
				l: string
				m: string
				s: string
			}
		}
	}
}
