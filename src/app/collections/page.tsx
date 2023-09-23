import { type Route } from "next";
import { getColelctionsAll } from "@/api/getProductsList";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductImage } from "@/ui/atoms/ProductImage";

export default async function CollectionsPage() {
	const collections = await getColelctionsAll();

	return (
		<ul className="mt-15 flex items-center justify-center gap-5">
			{collections.map((collection) => {
				return (
					<li key={collection.name}>
						<ActiveLink href={`/collections/${collection.slug}` as Route}>
							{collection.name}
							{collection.image && collection.image.url ? (
								<ProductImage src={collection.image.url} alt={collection.name} />
							) : null}
						</ActiveLink>
					</li>
				);
			})}
		</ul>
	);
}
