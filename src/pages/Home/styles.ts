import styled from 'styled-components'

export const Container = styled.main`
	padding: 0 1.5rem;
	position: relative;

	> img {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 1440px;
		z-index: -1;
		filter: blur(70px);
	}
`
