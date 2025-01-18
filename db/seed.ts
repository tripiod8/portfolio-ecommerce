import { PrismaClient } from '@prisma/client'
import sampleData from './skateboards.json'

async function main()
{
    const prisma = new PrismaClient()
    await prisma.product.deleteMany()
    await prisma.product.createMany({ data: sampleData })

    console.log('Database Seeded Successfully!');
}

main()