import styled, { css } from 'styled-components'

type TitleProps = {
	size?: 'xl' | 'l' | 'm' | 's' | 'xs'
	color?: 'title' | 'subtitle' | 'text'
	weight?: 700 | 800
}

type TextProps = {
	size?: 'l' | 'm' | 's'
	color?: 'subtitle' | 'label' | 'text'
	weight?: 400 | 700
}

export const Title = styled.h1<TitleProps>`
	${({ theme, size = 'm', color = 'text', weight = 800 }) => css`
		font-family: 'Baloo 2', cursive;
		font-size: ${theme.fontSize.title[size]};
		font-weight: ${weight};
		line-height: 1.3;
		color: ${theme.colors.base[color]};
	`}
`

export const Text = styled.h1<TextProps>`
	${({ theme, size = 'm', color = 'text', weight = 400 }) => css`
		font-family: 'Roboto', sans-serif;

		font-size: ${theme.fontSize.text[size]};
		font-weight: ${weight};
		line-height: 1.3;
		color: ${theme.colors.base[color]};
	`}
`
