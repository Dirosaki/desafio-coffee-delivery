export function formatPrice(value: number) {
	return Intl.NumberFormat('pt-BR', {
		minimumFractionDigits: 2,
	}).format(value)
}
