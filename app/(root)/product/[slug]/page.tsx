import Image from "next/image";
import { notFound } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { getProductBySlug } from "@/lib/actions/product.actions"
import ProductPrice from "@/components/shared/product/product-price";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetailsPage = async (props: {
	params: Promise<{ slug: string }>
}) => {
	const { slug } = await props.params
	const product = await getProductBySlug(slug)
	if (!product) notFound()

	return (
		<div className="grid grid-rows-[auto,1fr]">
			<div className="bg-slate-400 mb-1">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="#">
								{product.category.name}
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{product.name}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="grid grid-cols-2">
				<section className="flex justify-center p-5">
                    <Image src={product.image_url[0]} alt="Product Large Image" width={400} height={700} />
                </section>
				<section className="grid grid-rows-[auto,auto,auto,auto,1fr] bg-slate-200 p-5">
                    <div className="mb-1">
                        <h6 className="underline font-semibold">{product.brand.name}</h6>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">{product.name}</h4>
                    </div>
                    <div>
                        <ProductPrice price={Number(product.price)} />
                    </div>
					{/* 
						@TODO: Loop through images
					 */}
					<div className="mt-8">
						<div className="flex justify-center bg-white w-20">
							<Image src={product.image_url[0]} alt="Product Small Image" width={50} height={75} />
						</div>
					</div>
					<div className="grid grid-rows-[auto,1fr] mt-28 w-20">
						<div>
							{
								product.inventory > 0 ?
									<p className="text-sm">Out of Stock: </p>
								:
									<Badge variant='destructive'>Out Of Stock</Badge>
							}
						</div>
						{/* 
							@TODO: Make btn disabled if no inventory.
						*/}
						<Button className="bg-blue-500">
							+ Add To Cart
						</Button>
					</div>
                </section>
			</div>
		</div>
	)
}

export default ProductDetailsPage
