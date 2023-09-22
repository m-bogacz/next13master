import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({
	products,
	size = "medium",
}: {
	products: ProductListItemFragment[];
	size?: "small" | "medium" | "big";
}) => {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ul
				className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem size={size} key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
