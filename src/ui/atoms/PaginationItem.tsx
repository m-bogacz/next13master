import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const PaginationItem = ({ page, arrow }: { page: number | string; arrow?: string }) => {
	return (
		<li key={page} className="flex w-10 justify-center border border-slate-400 p-1">
			<ActiveLink href={`/products/${page}`}>{arrow ? arrow : page}</ActiveLink>
		</li>
	);
};
