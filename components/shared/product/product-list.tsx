import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({ data, title, limit}: {data: Product[]; title?: string; limit?: number}) => {
    const limitedData = limit ? data.slice(0, limit) : data
    return <div className="m-5">
        <h2 className="font-bold  text-2xl">{title}</h2>
        <div className="grid grid-cols-4 gap-4">
        {limitedData.map((skateboard: Product) => {
            return <ProductCard product={skateboard} key={skateboard.id} />
        })}
        </div>
    </div>
}

export default ProductList