import "server-only";

import { PaginationItem } from "@/ui/atoms/PaginationItem";

export const Pagination = async ({
	countPerPage = 4,
	productsCount,
	sortBy,
}: {
	productsCount: number;
	countPerPage?: number;
	sortBy: string;
}) => {
	const pages = Array.from({ length: Math.ceil(productsCount / countPerPage) }, (_, i) => i + 1);

	return (
		<nav>
			<ul aria-label="Pagination" className="m-4 flex w-full justify-center">
				{pages.map((page) => {
					return <PaginationItem sortBy={sortBy} key={page} page={page} />;
				})}
			</ul>
		</nav>
	);
};
