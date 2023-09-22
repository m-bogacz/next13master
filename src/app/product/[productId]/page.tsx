import { type Metadata } from "next";

import { Suspense } from "react";
import { ProductItem } from "@/ui/molecules/SingleProductItem";
import { getProductById, getProductsList } from "@/api/getProductsList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();

	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: product.images[0] && [
				{
					url: product.images[0].url,
					alt: product.name,
				},
			],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<ProductItem
				coverImage={product.images[0]?.url}
				name={product.name}
				price={product.price}
				category={product.categories[0]?.name ?? "other"}
				description={product.description}
			/>
			<Suspense>
				{product.categories[0]?.slug && (
					<div>
						<SuggestedProducts suggets={product.categories[0].slug} />
					</div>
				)}
			</Suspense>
		</main>
	);
}
