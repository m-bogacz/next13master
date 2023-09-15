import { fetchProductsCount, fetchProductsPerPage } from "@/api/fetchProducts";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const productsCount = await fetchProductsCount();
	const counts = Array.from({ length: productsCount / 4 }, (_, i) => i + 1);

	return counts.map((count) => ({
		pageNumber: count.toString(),
	}));
};

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const products = await fetchProductsPerPage(params.pageNumber);

	return (
		<>
			<ProductList products={products} />
			<Pagination currentPage={params.pageNumber} />
		</>
	);
}
