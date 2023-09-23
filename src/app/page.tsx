import { ArrowRight } from "lucide-react";

import { type Route } from "next";
import { getProductsCountList } from "@/api/getProductsList";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductList } from "@/ui/organisms/ProductList";

const subPagesCollections = [
	{ href: "/collections/new-in", label: "New In" },
	{ href: "/collections/throwback", label: "Throwback" },
];

export default async function Home() {
	const products = await getProductsCountList();

	return (
		<main className="flex flex-col items-center">
			<div>
				{subPagesCollections.map(({ href, label }) => {
					return (
						<ActiveLink href={href as Route} key={href}>
							{label}
						</ActiveLink>
					);
				})}
			</div>
			<ProductList products={products} />
			<ActiveLink
				href="/products"
				className="flex-3 flex w-64 justify-center rounded-md border border-slate-300 p-1 align-baseline text-sm text-gray-500   hover:text-gray-700"
			>
				See more <ArrowRight size={"1.2rem"} />
			</ActiveLink>
		</main>
	);
}
