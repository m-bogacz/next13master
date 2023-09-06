import { products } from "@/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default function Products() {
	return (
		<main className="h-full w-full">
			<ProductList products={products} />
		</main>
	);
}
