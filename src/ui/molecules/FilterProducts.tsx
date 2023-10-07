"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const FilterProducts = () => {
	const router = useRouter();
	const currentSort = "price_ASC";

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		router.push(`/products/1?sortBy=${e.target.value}`);
	};

	return (
		<select
			defaultValue={currentSort}
			onChange={handleSortChange}
			className={"rounded-lg border border-slate-400 p-1 text-sm"}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value} data-testid={option.testid ?? ""}>
					{option.label}
				</option>
			))}
		</select>
	);
};
const options = [
	{
		value: "price_ASC",
		label: "Price (Low to High)",
		testid: "sort-by-price",
	},
	{
		value: "price_DESC",
		label: "Price (High to Low)",
		testid: "sort-by-price",
	},
	{
		value: "averageRating_ASC",
		label: "Rating (Low to High)",
		testid: "sort-by-rating",
	},
	{
		value: "averageRating_DESC",
		label: "Rating (High to Low)",
		testid: "sort-by-rating",
	},
	{
		value: "name_ASC",
		label: "Name (A to Z)",
	},
	{
		value: "name_DESC",
		label: "Name (Z to A)",
	},
];
