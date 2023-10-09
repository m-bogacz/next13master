import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { getProductsCountList } from "@/api/getProductsList";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductList } from "@/ui/organisms/ProductList";

import { CollectionsList } from "@/ui/organisms/CollectionsList";

export default async function Home() {
	const products = await getProductsCountList();

	return (
		<main className="flex flex-col items-center">
			<Suspense fallback="loading...">
				<CollectionsList />
			</Suspense>

			<Suspense fallback="loading...">
				<div className="mt-5 p-3">
					<h4 className="ml-10 divide-y text-lg text-slate-600">Products</h4>
					<ProductList products={products} />
				</div>
			</Suspense>

			<ActiveLink
				href="/products"
				className="flex-3 my-6 flex justify-center rounded-md border border-slate-300 p-2 align-baseline text-sm text-gray-500   hover:text-gray-700"
			>
				See more <ArrowRight size={"1.2rem"} />
			</ActiveLink>
		</main>
	);
}
