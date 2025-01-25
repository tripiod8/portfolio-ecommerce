import { PrismaClient } from '@prisma/client'
import skateboardProductData from './skateboards.json'

async function main()
{
    const prisma = new PrismaClient()
    await prisma.product.deleteMany()
    await prisma.account.deleteMany()
    await prisma.session.deleteMany()
    await prisma.verificationToken.deleteMany()
    await prisma.user.deleteMany()





    await prisma.product.createMany({ data: skateboardProductData })

    console.log('Database Seeded Successfully!');
}

main()