import { getProductsList } from "@/api/getProductsList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products() {
	const products = await getProductsList();

	return <ProductList products={products} />;
}
