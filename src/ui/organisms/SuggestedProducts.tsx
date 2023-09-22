import { getSuggestedProductsByCategorySlug } from "@/api/getProductsList";

import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const SuggestedProducts = async ({ suggets }: { suggets: string }) => {
	const products = await getSuggestedProductsByCategorySlug(suggets);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<h3 className="text-xl text-slate-700">Suggested Products</h3>
			<ul
				className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
				data-testid="related-products"
			>
				{products.map((product) => (
					<ProductListItem size="small" key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
