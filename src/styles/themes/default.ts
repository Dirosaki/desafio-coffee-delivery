import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
	colors: {
		brand: {
			yellowDark: '#C47F17',
			yellow: '#DBAC2C',
			yellowLight: '#F1E9C9',
			purpleDark: '#4B2995',
			purple: '#8047F8',
			purpleLight: '#EBE5F9',
		},
		base: {
			title: '#272221',
			subtitle: '#403937',
			text: '#574F4D',
			label: '#8D8686',
			hover: '#D7D5D5',
			button: '#E6E5E5',
			input: '#EDEDED',
			card: '#F3F2F2',
			background: '#FAFAFA',
			white: '#FFFFFF',
		},
	},
	fontSize: {
		title: {
			xl: '3rem',
			l: '2rem',
			m: '1.5rem',
			s: '1.25rem',
			xs: '1.125rem',
		},
		text: {
			l: '1.25rem',
			m: '1rem',
			s: '0.875rem',
		},
	},
}
