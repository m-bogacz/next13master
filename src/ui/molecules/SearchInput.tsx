"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

export const SearchInput = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const search = searchParams.get("query");
	const [searchTerm, setSearchTerm] = React.useState(search ?? "");
	const { debouncedValue } = useDebounce(searchTerm, 500);

	useEffect(() => {
		if (debouncedValue.length >= 1) {
			router.push(`/search?query=${debouncedValue}`);
		}
	}, [router, debouncedValue]);

	return (
		<div className=" items-center justify-center ">
			<input
				type="text"
				role="searchbox"
				placeholder="search..."
				onChange={(e) => setSearchTerm(e.target.value)}
				className="rounded-md border border-slate-300 p-1"
			/>
		</div>
	);
};
