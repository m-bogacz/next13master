import "server-only";
import { fetchProductsCount } from "@/api/fetchProducts";

import { PaginationList } from "@/ui/molecules/PaginationList";

export const Pagination = async () => {
	const productsCount = await fetchProductsCount();

	return <PaginationList productLength={productsCount} />;
};
