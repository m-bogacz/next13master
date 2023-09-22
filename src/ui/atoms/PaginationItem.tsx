"use client";

import { usePathname } from "next/navigation";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const PaginationItem = ({ page, arrow }: { page: number; arrow?: string }) => {
	const pathname = usePathname();
	const href = pathname.slice(0, pathname.length - 1) + page.toString();

	return (
		<li key={page} className="flex w-10 justify-center p-1">
			<ActiveLink href={href as Route}>{arrow ? arrow : page}</ActiveLink>
		</li>
	);
};
