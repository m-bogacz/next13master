import React from "react";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { ProductImage } from "../atoms/ProductImage";
import { getCollectionsAll } from "@/api/getProductsList";

export const CollectionsList = async () => {
	const collections = await getCollectionsAll();

	return (
		<section className="p-5">
			<ul className=" mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
