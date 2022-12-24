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

	@media (max-width: 900px) {
		padding: 0 4rem;
	}

	@media (max-width: 714px) {
		padding: 0 3rem;
	}

	@media (max-width: 656px) {
		padding: 0 2rem;
	}
`
