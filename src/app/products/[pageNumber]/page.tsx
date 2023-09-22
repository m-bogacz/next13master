import { getProductCount, getProductListPerPage } from "@/api/getProductsList";
import { Pagination } from "@/ui/organisms/Pagination";

import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_COUNT_PER_PAGE } from "@/utils/const";
import { getPaginationInfo } from "@/utils/getPaginationInfo";

export const generateStaticParams = async () => {
	const productsPerPage = 4;
	const productsCount = await getProductCount();
	const counts = Array.from({ length: productsCount / productsPerPage }, (_, i) => i + 1);

	return counts.map((count) => ({
		pageNumber: count.toString(),
	}));
};

export default async function Products({ params }: { params: { pageNumber: number } }) {
	const productsCount = await getProductCount();

	const [productsPerPage, skipProduct] = getPaginationInfo(
		params.pageNumber,
		PRODUCTS_COUNT_PER_PAGE,
	);
	const data = await getProductListPerPage(productsPerPage, skipProduct);

	return (
		<div>
			<ProductList products={data.products} />
			<div className="mt-auto">
				<Pagination countPerPage={PRODUCTS_COUNT_PER_PAGE} productsCount={productsCount} />
			</div>
		</div>
	);
}
