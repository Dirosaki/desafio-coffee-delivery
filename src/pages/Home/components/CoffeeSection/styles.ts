import styled from 'styled-components'

export const CoffeeSection = styled.section`
	margin: 3rem auto 7.5rem;
	width: 100%;
	max-width: 1120px;

	@media (max-width: 626px) {
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		> strong {
			font-size: 1.75rem;
			text-align: center;
		}
	}
`

export const CoffeeList = styled.div`
	margin-top: 3.375rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
	gap: 2.5rem 2rem;

	@media (max-width: 626px) {
		margin-top: 3rem;

		> div {
			max-width: 18rem;
		}
	}
`
