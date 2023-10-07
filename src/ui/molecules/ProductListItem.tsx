import { ActiveLink } from "../atoms/ActiveLink";
import { ProductItemLink } from "../atoms/ProductItemLink";

import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductListItem = ({
	product,
	size = "medium",
}: {
	product: ProductListItemFragment;
	size: "small" | "medium" | "big";
}) => {
	const { name, images, price, categories, averageRating } = product;
	return (
		<li className="cursor-pointer">
			<ActiveLink href={`/product/${product.id}`}>
				<ProductItemLink
					size={size}
					name={name}
					images={images}
					price={price}
					categories={categories}
					averageRating={averageRating}
				/>
			</ActiveLink>
		</li>
	);
};
