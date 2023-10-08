import { type Metadata } from "next";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductItem } from "@/ui/molecules/SingleProductItem";

import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

import { Reviews } from "@/ui/organisms/Reviews";
import { getProductById } from "@/api/getProductsList";

// export const generateStaticParams = async () => {
// 	const products = await getProductsCountList();

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

			<Reviews id={product.id} />
		</main>
	);
}
