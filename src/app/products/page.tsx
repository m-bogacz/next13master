import { fetchProductList } from "@/api/fetchProducts";
import { ProductList } from "@/ui/organisms/ProductList";

export const runtime = "edge";

export default async function Products() {
	const products = await fetchProductList();

	return <ProductList products={products} />;
}
