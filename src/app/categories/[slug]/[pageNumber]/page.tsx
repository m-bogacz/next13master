import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { getProductsByCategoryPerPage, getCategoryNameBySlug } from "@/api/getProductsList";
import { ProductList } from "@/ui/organisms/ProductList";

import { getPaginationInfo } from "@/utils/getPaginationInfo";
import { PRODUCTS_CATEGORY_COUNT_PER_PAGE } from "@/utils/const";
import { Pagination } from "@/ui/organisms/Pagination";
import { type ProductOrderByInput } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const category = await getCategoryNameBySlug(params.slug);

	return {
		title: category,
		description: category,
	};
};

export default async function Categories({
	params,
	searchParams,
}: {
	params: { category: string; slug: string; pageNumber: number };
	searchParams: { sortBy: ProductOrderByInput };
}) {
	const { productsPerPage, skipProduct } = getPaginationInfo(
		params.pageNumber,
		PRODUCTS_CATEGORY_COUNT_PER_PAGE,
	);
	const data = await getProductsByCategoryPerPage(
		params.slug,
		productsPerPage,
		skipProduct,
		searchParams.sortBy,
	);

	if (!data.categories[0]?.products || data.categories[0]?.products.length === 0) notFound();

	return (
		<div>
			<h1>{data.categories[0].name}</h1>
			<ProductList products={data.categories[0].products} />
			<article className="mt-5">
				<Pagination
					sortBy={searchParams.sortBy}
					countPerPage={PRODUCTS_CATEGORY_COUNT_PER_PAGE}
					productsCount={data.categoriesConnection.aggregate.count}
				/>
			</article>
		</div>
	);
}
