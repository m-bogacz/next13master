import { getProductsCountByCategory } from "@/api/getProductsList";
import { Pagination } from "@/ui/organisms/Pagination";
import { PRODUCTS_CATEGORY_COUNT_PER_PAGE } from "@/utils/const";

export default async function CategoryPageLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	const data = await getProductsCountByCategory(params.slug);

	return (
		<>
			{children}
			<article className="mt-5">
				<Pagination countPerPage={PRODUCTS_CATEGORY_COUNT_PER_PAGE} productsCount={data ?? 0} />
			</article>
		</>
	);
}
