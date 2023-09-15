import "server-only";
import { fetchProductsCount } from "@/api/fetchProducts";

import { PaginationList } from "@/ui/molecules/PaginationList";

export const Pagination = async ({ currentPage }: { currentPage: string }) => {
	const productsCount = await fetchProductsCount();

	return <PaginationList currentPage={Number(currentPage)} productLength={productsCount} />;
};
