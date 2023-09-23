import { type Route } from "next";
import { getCategoriesBySlug } from "@/api/getProductsList";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductImage } from "@/ui/atoms/ProductImage";

export default async function Categories() {
	const categories = await getCategoriesBySlug();

	return (
		<ul className="gap-15 flex">
			{categories.map((category) => {
				return (
					<li key={category.name}>
						<ActiveLink href={`/categories/${category.slug}/1` as Route}>
							{category.name}
							{category.image && category.image.url ? (
								<ProductImage
									src={category.image.url}
									alt={category.name}
									height={550}
									width={350}
								/>
							) : null}
						</ActiveLink>
					</li>
				);
			})}
		</ul>
	);
}
