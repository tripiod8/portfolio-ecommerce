import { cn } from "@/lib/utils";

const ProductPrice = ({ price, className }: { price: number; className?: string  }) => {
    const stringValue = price.toFixed(2)
    const [intValue, floatValue] = stringValue.split('.')

    const priceFinished = () => {
        return <p className={cn('text-xl', className)}><span className="text-xs align-super">$</span>{intValue}<span className="text-xs align-super">.{floatValue}</span></p>
    }

    return (
    <>{priceFinished()}</>
    )
}

export default ProductPrice