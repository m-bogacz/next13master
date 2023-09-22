import "server-only";

import { PaginationItem } from "@/ui/atoms/PaginationItem";

export const Pagination = async ({
	countPerPage = 4,
	productsCount,
}: {
	productsCount: number;
	countPerPage?: number;
}) => {
	const pages = Array.from({ length: Math.ceil(productsCount / countPerPage) }, (_, i) => i + 1);

	return (
		<nav>
			<ul aria-label="Pagination" className="m-4 flex w-full justify-center">
				{pages.map((page) => {
					return <PaginationItem key={page} page={page} />;
				})}
			</ul>
		</nav>
	);
};
