import { type Metadata } from "next";
import { fetchProductById } from "@/api/fetchProducts";
import { ProductItem } from "@/ui/atoms/ProductItem";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await fetchProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		category: product.category,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.coverImage.src,
					alt: product.coverImage.alt,
				},
			],
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await fetchProductById(params.productId);

	const { name, coverImage, price, category } = product;

	return (
		<main className="flex h-full w-full items-center justify-center">
			<h1>{name}</h1>
			<ProductItem coverImage={coverImage} name={name} price={price} category={category} />
		</main>
	);
}
