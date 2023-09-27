import { ArrowRight } from "lucide-react";

import { type Route } from "next";
import { getCollectionsAll, getProductsCountList } from "@/api/getProductsList";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductList } from "@/ui/organisms/ProductList";
import { ProductImage } from "@/ui/atoms/ProductImage";

export default async function Home() {
	const products = await getProductsCountList();
	const collections = await getCollectionsAll();

	return (
		<main className="flex flex-col items-center">
			<section className="mt-5 flex w-full flex-col gap-5 divide-y">
				<ul className="flex w-full flex-grow flex-wrap justify-around">
					{collections.map((collection) => {
						return (
							<li key={collection.name}>
								<ActiveLink exact={true} href={`collections/${collection.slug}` as Route}>
									<span>{collection.name}</span>
									{collection.image && collection.image.url ? (
										<ProductImage src={collection.image.url} alt={collection.name} />
									) : null}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
				<div />
			</section>
			<ProductList products={products} />

			<ActiveLink
				href="/products"
				className="flex-3 my-6 flex justify-center rounded-md border border-slate-300 p-2 align-baseline text-sm text-gray-500   hover:text-gray-700"
			>
				See more <ArrowRight size={"1.2rem"} />
			</ActiveLink>
		</main>
	);
}
