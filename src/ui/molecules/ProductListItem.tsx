import { type ProductItemType } from "../types";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";

export const ProductListItem = ({
	product: { name, description, coverImage },
}: {
	product: ProductItemType;
}) => {
	return (
		<li className="cursor-pointer p-1">
			<article>
				<ProductListItemDescription name={name} description={description} />
				<ProductListItemCoverImage src={coverImage.src} alt={coverImage.alt} />
			</article>
		</li>
	);
};
