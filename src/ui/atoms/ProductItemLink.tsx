import { ProductListItemDescription } from "./ProductListItemDescription";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductItemLink = ({
	name,
	images,
	price,
	categories,
	size = "medium",
}: {
	name: string;
	price: number;
	categories: ProductListItemFragment["categories"];
	images: ProductListItemFragment["images"];
	size: "small" | "medium" | "big";
}) => {
	const getSize = size === "small" ? "w-52" : size === "big" ? "w-72" : "";
	return (
		<article className={`p-4 ${getSize}`}>
			{images[0] && <ProductImage src={images[0]?.url} alt={name} />}
			<ProductListItemDescription
				name={name}
				price={price}
				category={categories[0]?.name ?? "other"}
			/>
		</article>
	);
};
