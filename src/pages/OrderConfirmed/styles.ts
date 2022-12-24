import styled, { css } from 'styled-components'

import { Title as Typography } from 'components/Typography'

export const Container = styled.main`
	margin: 5rem auto;
	padding: 0 1.5rem;
	width: 100%;
	max-width: 1120px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2.5rem;

	> div:first-of-type {
		grid-column: 1 / -1;
	}
`

export const Title = styled(Typography).attrs({
	size: 'l',
})`
	${({ theme }) => css`
		color: ${theme.colors.brand.yellowDark};
	`}
`

export const DeliveryInformationWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		padding: 2.5rem;
		height: 270px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		border-radius: 6px 36px;
		background: ${theme.colors.base.background};

		&::before {
			content: '';
			position: absolute;
			inset: -1px;
			background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
			border-radius: 7px 37px;
			z-index: -1;
		}

		ul {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	`}
`

export const Image = styled.img`
	margin-left: auto;
`
