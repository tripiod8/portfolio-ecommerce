'use server';

import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        include: {
            brand: true
        },
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {created_at: 'desc'}
    })

    return convertToPlainObject(data)
}

export async function getProductBySlug(slug: string)
{
    const data = await prisma.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: true,
            brand: true
        }
    })

    return data
}