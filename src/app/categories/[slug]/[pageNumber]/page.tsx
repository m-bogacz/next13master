import { notFound } from "next/navigation";
import { type Metadata } from "next";

import {
	getProductsByCategoryPerPage,
	getCategoryNameBySlug,
	getProductsCountByCategory,
} from "@/api/getProductsList";
import { ProductList } from "@/ui/organisms/ProductList";

import { getPaginationInfo } from "@/utils/getPaginationInfo";
import { PRODUCTS_CATEGORY_COUNT_PER_PAGE } from "@/utils/const";
import { Pagination } from "@/ui/organisms/Pagination";

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
}: {
	params: { category: string; slug: string; pageNumber: number };
}) {
	const categories = await getProductsCountByCategory(params.slug);
	const category = await getCategoryNameBySlug(params.slug);

	const [showProducts, skipProduct] = getPaginationInfo(
		params.pageNumber,
		PRODUCTS_CATEGORY_COUNT_PER_PAGE,
	);
	const data = await getProductsByCategoryPerPage(params.slug, showProducts, skipProduct);

	if (!data.categories[0]?.products || data.categories[0]?.products.length === 0) notFound();

	return (
		<div>
			<h1>{category}</h1>
			<ProductList products={data.categories[0].products} />
			<article className="mt-5">
				<Pagination
					countPerPage={PRODUCTS_CATEGORY_COUNT_PER_PAGE}
					productsCount={categories ?? 0}
				/>
			</article>
		</div>
	);
}
