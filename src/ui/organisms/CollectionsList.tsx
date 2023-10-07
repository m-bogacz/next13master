import React from "react";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { ProductImage } from "../atoms/ProductImage";
import { getCollectionsAll } from "@/api/getProductsList";

export const CollectionsList = async () => {
	const collections = await getCollectionsAll();

	return (
		<section className="mt-5 flex w-full flex-col gap-5 divide-y">
			<ul className="flex w-full flex-grow flex-wrap justify-around">
				{collections.map((collection) => {
					return (
						<li key={collection.name}>
							<ActiveLink exact={true} href={`/collections/${collection.slug}` as Route}>
								<span>{collection.name}</span>
								{collection.image && collection.image.url ? (
									<ProductImage src={collection.image.url} alt={collection.name} />
								) : null}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
