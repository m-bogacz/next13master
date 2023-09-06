import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "../types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul
			className="flex h-96 w-full flex-wrap items-center justify-around"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
