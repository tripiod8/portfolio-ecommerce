import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product; }) => {
    return <Card>
        <CardHeader>
            <Link href={`/product/${product.slug}`} className="flex justify-center">
                <Image src={product.image_url[0]} width={175} height={200} alt="Skateboard Image from CCS" priority={true} />
            </Link>
        </CardHeader>
        <CardContent>
            <div className="text-xs mb-1">{product.brand.name}</div>
            <h2 className="font-medium">{product.name}</h2>
            <div className="flex justify-between mt-5">
                <div>4.2 stars</div>
                {product.inventory > 0 ? <ProductPrice price={Number(product.price)} /> : <div className="text-destructive font-bold">Out Of Stock</div>}
            </div>
        </CardContent>
    </Card>
}

export default ProductCard