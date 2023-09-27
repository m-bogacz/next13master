import { type Metadata } from "next";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductItem } from "@/ui/molecules/SingleProductItem";
import { getProductById } from "@/api/getProductsList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();

// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// };

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

	if (!product) {
		throw notFound();
	}

	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<ProductItem {...product} />

			<Suspense fallback="loading...">
				{product.categories[0]?.slug && (
					<div>
						<SuggestedProducts suggets={product.categories[0].slug} />
					</div>
				)}
			</Suspense>
		</main>
	);
}
