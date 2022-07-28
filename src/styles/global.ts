import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body {
		background: ${theme.colors.base.background};
		color: ${theme.colors.base.text};
		-webkit-font-smoothing: antialiased;
	}

	body,
	input,
	textarea,
	button {
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.3;
	}

	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}
`}
`
