import { type Metadata } from "next";
import { fetchProductById, fetchProductList } from "@/api/fetchProducts";
import { ProductItem } from "@/ui/atoms/SingleProductItem";

export const generateStaticParams = async () => {
	const products = await fetchProductList();

	return products.map((product) => ({
		productId: product.productId,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await fetchProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
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
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await fetchProductById(params.productId);

	const { name, coverImage, price, category, description } = product;

	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<ProductItem
				coverImage={coverImage}
				name={name}
				price={price}
				category={category}
				description={description}
			/>
		</main>
	);
}
