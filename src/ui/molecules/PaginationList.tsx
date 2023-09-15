import "server-only";
import { PaginationItem } from "@/ui/atoms/PaginationItem";

export const PaginationList = ({
	productLength,
	count = 4,
	currentPage,
}: {
	productLength: number;
	currentPage: number;
	count?: number;
}) => {
	const pages = Array.from({ length: Math.ceil(productLength / count) }, (_, i) => i + 1);

	return (
		<article>
			<ul aria-label="Pagination" className="m-4 flex w-full justify-center">
				<PaginationItem page={currentPage - 1} arrow="<" />

				{pages.map((page) => {
					console.log(page);
					return <PaginationItem key={page} page={page} />;
				})}
				<PaginationItem page={currentPage + 1} arrow=">" />
			</ul>
		</article>
	);
};
