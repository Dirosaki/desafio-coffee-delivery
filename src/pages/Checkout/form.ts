import zod from 'zod'

export const checkoutFormValidationSchema = zod.object({
	zipCode: zod.string().min(1),
	street: zod.string().min(1),
	number: zod.string().min(1),
	complement: zod.string().optional(),
	district: zod.string().min(1),
	city: zod.string().min(1),
	state: zod.string().min(1),
	paymentMethod: zod.enum(['credit-card', 'debit-card', 'money']),
})

export type CheckoutFormProps = zod.infer<typeof checkoutFormValidationSchema>
