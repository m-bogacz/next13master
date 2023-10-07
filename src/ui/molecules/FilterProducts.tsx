"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const FilterProducts = () => {
	const router = useRouter();

	return (
		<div className="flex items-end justify-end gap-3">
			<button
				data-testid="sort-by-price"
				className={"rounded-lg border  border-slate-400 p-1 text-sm"}
				onClick={() => {
					router.push("/products/1?sortBy=price_ASC");
				}}
			>
				sort by price
			</button>
			<button
				data-testid="sort-by-rating"
				className={"rounded-lg border  border-slate-400 p-1 text-sm"}
				onClick={() => {
					router.push("/products/1?sortBy=averageRating_DESC");
				}}
			>
				sort-by-rating
			</button>
		</div>
	);
};
