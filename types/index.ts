import { z } from 'zod'
import { insertProductSchema } from '@/lib/validators'
import { Brand } from '@prisma/client'

export type Product = z.infer<typeof insertProductSchema> & {
    id: string
    slug: string
    rating: string
    created_at: Date
    brand: Brand
}