import { z } from 'zod'
import { formatNumberWithDecimals } from './utils'

const currency = z.string().refine((value) => /^d+(\.\d{2})?$/.test(formatNumberWithDecimals(Number(value))), 'Price format is incorrect.')

export const insertProductSchema = z.object({
    name: z.string().min(1, 'Product name cannot be empty.').max(220, 'Product name too long.'),
    description: z.string().nullable(),
    inventory: z.coerce.number(),
    image_url: z.array(z.string()).min(1, 'Product must have at least one image.'),
    brandId: z.string().min(1, 'Product must have a brand.'),
    categoryId: z.string().min(1, 'Product must be part of a category.'),
    price: currency,
    isFeatured: z.boolean() 
})

/**
 @TODO: make stronger password
 */
export const signInFormSchema = z.object({
    email: z.string().email('Invalid Email Address'),
    password: z.string().min(8, 'Password must be atleast 8 characters.')
})