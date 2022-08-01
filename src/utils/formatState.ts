export function formatState(value: string) {
	return value.replace(/\s|[^A-Z]/g, '')
}
