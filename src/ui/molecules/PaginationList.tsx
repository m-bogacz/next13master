"use client";
import { useParams } from "next/navigation";
import { PaginationItem } from "@/ui/atoms/PaginationItem";

const getCurrentPage = (pageNumber: string | string[]) => {
	if (typeof pageNumber === "string") {
		return Number(pageNumber);
	}
	return Number(pageNumber[0]);
};

export const PaginationList = ({
	productLength,
	count = 20,
}: {
	productLength: number;
	count?: number;
}) => {
	const params = useParams();
	const currentPage = getCurrentPage(params.pageNumber ?? 1);

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
