import { searchProductsByName } from "@/api/getProductsList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Search({ searchParams }: { searchParams: { query: string } }) {
	const products = await searchProductsByName(searchParams.query);
	return (
		<>
			<h1>Search Products</h1>
			<ProductList products={products} />
		</>
	);
}
