import { getProductsList } from "@/api/getProductsList";
// import { type ProductOrderByInput } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products({} // searchParams,
: {
	// searchParams: { sortBy: ProductOrderByInput };
}) {
	const products = await getProductsList();

	// console.log("products =>", products, searchParams);

	return (
		<>
			<div>search</div>
			<ProductList products={products} />;
		</>
	);
}
