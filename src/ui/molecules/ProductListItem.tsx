import { type ProductItemType } from "../types";
import { ActiveLink } from "../atoms/ActiveLink";
import { ProductItemLink } from "../atoms/ProductItemLink";

export const ProductListItem = ({
	product: { name, coverImage, price, productId, category },
}: {
	product: ProductItemType;
}) => {
	return (
		<li className="cursor-pointer">
			<ActiveLink href={`/product/${productId}`}>
				<ProductItemLink name={name} coverImage={coverImage} price={price} category={category} />
			</ActiveLink>
		</li>
	);
};
