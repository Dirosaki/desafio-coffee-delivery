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

export const HeroSection = styled.section`
	margin: 0 auto;
	padding: 5.75rem 0;
	width: 100%;
	max-width: 1120px;
	display: flex;
	justify-content: space-between;

	@media (max-width: 1150px) {
		img {
			width: 400px;
			object-fit: contain;
		}
	}

	@media (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		gap: 5rem;

		img {
			width: 400px;
			object-fit: contain;
		}
	}

	@media (max-width: 675px) {
		padding: 5rem 0;
	}

	@media (max-width: 450px) {
		padding: 4rem 0;

		img {
			width: 100%;
		}
	}
`

export const ContentWrapper = styled.div`
	h1 {
		width: 20ch;
	}

	h2 {
		margin-top: 1rem;
		width: 52ch;
	}

	@media (max-width: 1150px) {
		h1 {
			font-size: 44px;
		}

		h2 {
			font-size: 18px;
		}
	}

	@media (max-width: 1024px) {
		h1 {
			width: auto;
			text-align: center;
		}

		h2 {
			margin-top: 3rem;
			width: auto;
			text-align: center;
		}
	}

	@media (max-width: 675px) {
		h1 {
			font-size: 2.25rem;
		}

		h2 {
			margin: 3rem auto 0;
			padding: 0 2rem;
			font-size: 1.125rem;
		}
	}

	@media (max-width: 500px) {
		h1 {
			line-height: 1.2;
			font-size: 1.75rem;
		}

		h2 {
			margin: 2rem auto 0;
			padding: initial;
			font-size: 1rem;
		}
	}
`

export const BeneficitsWrapper = styled.div`
	margin-top: 4rem;
	display: grid;
	grid-template-columns: repeat(2, max-content);
	gap: 20px 40px;

	@media (max-width: 1150px) {
		gap: 20px 32px;
	}

	@media (max-width: 1024px) {
		justify-content: center;
	}

	@media (max-width: 675px) {
		margin-top: 3rem;
		grid-template-columns: repeat(1, max-content);
	}
`
